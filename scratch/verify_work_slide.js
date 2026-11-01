const http = require('http');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const SCREENSHOT_DIR = '/home/pilot/.gemini/antigravity-ide/brain/6d4a5c07-f112-432c-83a8-fbe51643a9bc/screenshots';
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function httpGet(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    }).on('error', reject);
  });
}

function httpPut(url) {
  return new Promise((resolve, reject) => {
    const req = http.request(url, { method: 'PUT' }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

async function captureViewport(chromePort, width, height, filename) {
  // Create a new target/tab
  const target = await httpPut(`http://127.0.0.1:${chromePort}/json/new?http://localhost:3000/?slide=2`);
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);

  let id = 1;
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const curId = id++;
    const handler = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.id === curId) {
        ws.removeEventListener('message', handler);
        if (data.error) reject(data.error);
        else resolve(data.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  await send('Page.enable');
  await send('DOM.enable');
  await send('CSS.enable');

  await send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 600,
  });

  // Wait for intro transition (1600ms) and slide transition (750ms) to settle
  await wait(2800);

  // Hide dev overlay and wait for fonts
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const style = document.createElement('style');
        style.innerHTML = 'nextjs-portal, #__next-build-watcher { display: none !important; }';
        document.head.appendChild(style);
        return document.fonts ? document.fonts.ready : Promise.resolve();
      })()
    `,
    awaitPromise: true,
  });

  await wait(400);

  // Evaluate bounding boxes

  const evalRes = await send('Runtime.evaluate', {
    returnByValue: true,
    expression: `
      (() => {
        const root = document.querySelector('#section-03');
        const grid = document.querySelector('#work-main-grid');
        const img = document.querySelector('#work-featured-image');
        const list = document.querySelector('#work-project-list');
        const heading = root ? root.querySelector('h2') : null;

        const getBox = (el) => {
          if (!el) return null;
          const r = el.getBoundingClientRect();
          return {
            x: Math.round(r.x),
            y: Math.round(r.y),
            width: Math.round(r.width),
            height: Math.round(r.height),
            top: Math.round(r.top),
            bottom: Math.round(r.bottom),
            left: Math.round(r.left),
            right: Math.round(r.right)
          };
        };

        return {
          viewport: { width: window.innerWidth, height: window.innerHeight },
          root: getBox(root),
          grid: getBox(grid),
          featuredImage: getBox(img),
          projectList: getBox(list),
          heading: getBox(heading),
          computedWidthRatio: grid && root ? (grid.getBoundingClientRect().width / root.getBoundingClientRect().width) : 0,
          imageHeightRatio: img && grid ? (img.getBoundingClientRect().height / grid.getBoundingClientRect().height) : 0
        };
      })()
    `
  });

  // Take screenshot
  const screenshotData = await send('Page.captureScreenshot', { format: 'png' });
  const outPath = path.join(SCREENSHOT_DIR, filename);
  fs.writeFileSync(outPath, Buffer.from(screenshotData.data, 'base64'));

  // Close tab
  await send('Page.close');
  ws.close();

  return evalRes.result.value;
}

async function main() {
  const chromePort = 9223;
  const chromeProc = spawn('/usr/bin/google-chrome', [
    '--headless=new',
    `--remote-debugging-port=${chromePort}`,
    '--no-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--hide-scrollbars',
    'about:blank'
  ]);

  await wait(1500);

  console.log('Testing and capturing viewports...');
  
  // 1536x960
  const metrics1536 = await captureViewport(chromePort, 1536, 960, 'work_slide_1536x960.png');
  console.log('--- 1536x960 METRICS ---');
  console.log(JSON.stringify(metrics1536, null, 2));

  // 1366x768
  const metrics1366 = await captureViewport(chromePort, 1366, 768, 'work_slide_1366x768.png');
  console.log('--- 1366x768 METRICS ---');
  console.log(JSON.stringify(metrics1366, null, 2));

  // 1920x1080
  const metrics1920 = await captureViewport(chromePort, 1920, 1080, 'work_slide_1920x1080.png');
  console.log('--- 1920x1080 METRICS ---');
  console.log(JSON.stringify(metrics1920, null, 2));

  // 390x844
  const metrics390 = await captureViewport(chromePort, 390, 844, 'work_slide_390x844.png');
  console.log('--- 390x844 METRICS ---');
  console.log(JSON.stringify(metrics390, null, 2));

  chromeProc.kill();
  console.log('Screenshots and metrics capture complete.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
