const http = require('http');

async function main() {
  const list = await new Promise((resolve) => {
    http.get('http://127.0.0.1:9222/json', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    });
  });

  const page = list.find(p => p.type === 'page' && p.url.includes('slide=2'));
  if (!page) {
    console.error('Page not found');
    process.exit(1);
  }

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);

  let id = 1;
  const send = (method, params) => new Promise(resolve => {
    const curId = id++;
    const handler = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.id === curId) {
        ws.removeEventListener('message', handler);
        resolve(data.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  // Ensure exact viewport emulation of 1536x960
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1536,
    height: 960,
    deviceScaleFactor: 1,
    mobile: false
  });

  const evalCode = `
    (() => {
      const sec = document.querySelector('#section-03');
      const allDivs = sec ? Array.from(sec.querySelectorAll('*')) : [];
      
      const report = {
        viewport: { width: window.innerWidth, height: window.innerHeight },
        section: {
          rect: sec.getBoundingClientRect(),
          style: {
            width: window.getComputedStyle(sec).width,
            maxWidth: window.getComputedStyle(sec).maxWidth,
            height: window.getComputedStyle(sec).height,
            maxHeight: window.getComputedStyle(sec).maxHeight,
          }
        },
        children: allDivs.slice(0, 15).map(el => ({
          tag: el.tagName,
          className: el.className,
          id: el.id,
          rect: el.getBoundingClientRect(),
          width: el.offsetWidth,
          height: el.offsetHeight,
          csWidth: window.getComputedStyle(el).width,
          csMaxWidth: window.getComputedStyle(el).maxWidth,
          csPadding: window.getComputedStyle(el).padding,
          csMargin: window.getComputedStyle(el).margin,
        }))
      };
      return report;
    })()
  `;

  const res = await send('Runtime.evaluate', { expression: evalCode, returnByValue: true });
  console.log(JSON.stringify(res.result ? res.result.value : res, null, 2));
  ws.close();
}

main().catch(console.error);
