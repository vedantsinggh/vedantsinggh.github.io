import React, {useState, useEffect, useRef} from 'react';
import {Github, Linkedin, Mail, ExternalLink, MapPin, DownloadIcon, Code, Cpu, Zap, Smartphone, Car, Globe, ChevronRight, Play, Pause} from 'lucide-react';

// Load Nothing's official Ndot font
const loadNdotFont = () => {
	const link = document.createElement('link');
	link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
	link.rel = 'stylesheet';
	document.head.appendChild(link);

	// Add custom Ndot font styles
	const style = document.createElement('style');
	style.textContent = `
    @font-face {
      font-family: 'Ndot';
      src: url('https://cdn.jsdelivr.net/gh/nothingos/fonts@main/Ndot-Regular.woff2') format('woff2'),
           url('https://cdn.jsdelivr.net/gh/nothingos/fonts@main/Ndot-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Ndot';
      src: url('https://cdn.jsdelivr.net/gh/nothingos/fonts@main/Ndot-Medium.woff2') format('woff2'),
           url('https://cdn.jsdelivr.net/gh/nothingos/fonts@main/Ndot-Medium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Ndot';
      src: url('https://cdn.jsdelivr.net/gh/nothingos/fonts@main/Ndot-Bold.woff2') format('woff2'),
           url('https://cdn.jsdelivr.net/gh/nothingos/fonts@main/Ndot-Bold.woff') format('woff');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
    
    body {
      font-family: 'Ndot', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
  `;
	document.head.appendChild(style);
};

const BootAnimation = ({onComplete}) => {
	const [stage, setStage] = useState(0);
	const [isComplete, setIsComplete] = useState(false);

	useEffect(() => {
		const stages = [
			() => setStage(1), // Initial dots
			() => setStage(2), // Expanding pattern
			() => setStage(3), // Convergence
			() => setStage(4), // Final burst
			() => {
				setIsComplete(true);
				setTimeout(onComplete, 300);
			}
		];

		// Updated timings for 3-second total duration
		const timings = [100, 800, 1500, 2200, 3000];

		timings.forEach((time, index) => {
			setTimeout(stages[index], time);
		});
	}, [onComplete]);

	const generateDots = (count, stage) => {
		const dots = [];
		for (let i = 0; i < count; i++) {
			const angle = (i / count) * Math.PI * 2;
			const radius = stage === 1 ? 0 : stage === 2 ? 50 : stage === 3 ? 100 : 150;
			const x = Math.cos(angle) * radius;
			const y = Math.sin(angle) * radius;

			dots.push(
				<div
					key={i}
					className={`absolute w-2 h-2 rounded-full transition-all duration-500 ease-out
						${stage === 4 ? 'bg-red-500 shadow-lg shadow-red-500/50' : 'bg-red-400/80'}
						${stage === 4 ? 'animate-pulse' : ''}
					`}
					style={{
						transform: `translate(${x}px, ${y}px) scale(${stage === 4 ? 1.5 : 1})`,
						animationDelay: `${i * 50}ms`
					}}
				/>
			);
		}
		return dots;
	};

	return (
		<div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-300 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
			{/* Background grid pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="w-full h-full" style={{
					backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,0,0,0.3) 1px, transparent 0)`,
					backgroundSize: '20px 20px'
				}} />
			</div>

			{/* Central animation container */}
			<div className="relative">
				{/* Primary dot pattern */}
				<div className="relative w-4 h-4 flex items-center justify-center">
					{generateDots(12, stage)}
				</div>

				{/* Secondary rings */}
				{stage >= 2 && (
					<div className="absolute inset-0 flex items-center justify-center">
						{generateDots(24, stage)}
					</div>
				)}

				{/* Tertiary outer ring */}
				{stage >= 3 && (
					<div className="absolute inset-0 flex items-center justify-center">
						{generateDots(36, stage)}
					</div>
				)}

				{/* Central core dot */}
				<div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700 ease-out
					${stage >= 2 ? 'w-4 h-4 bg-red-500 shadow-lg shadow-red-500/50' : 'w-2 h-2 bg-red-400/60'}
					${stage === 4 ? 'animate-ping' : ''}
				`} />
			</div>

			{/* Loading text */}
			<div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
				<div className="flex items-center gap-4">
					<div className="flex gap-1">
						{[0, 1, 2].map((i) => (
							<div
								key={i}
								className="w-2 h-2 bg-red-500 rounded-full animate-pulse"
								style={{animationDelay: `${i * 200}ms`}}
							/>
						))}
					</div>
					<span className="text-gray-400 text-sm font-ndot tracking-wider">
						{stage === 1 ? 'INITIALIZING' :
							stage === 2 ? 'LOADING' :
								stage === 3 ? 'CONNECTING' :
									stage === 4 ? 'READY' : 'LOADING'}
					</span>
				</div>
			</div>

			{/* Scanning line effect */}
			{stage >= 2 && (
				<div className="absolute inset-0 pointer-events-none">
					<div className="w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"
						style={{
							position: 'absolute',
							top: '50%',
							animation: 'scan 2s ease-in-out infinite'
						}} />
				</div>
			)}

			{/* Custom animations */}
			<style jsx>{`
				@keyframes scan {
					0% { transform: translateY(-100vh); opacity: 0; }
					50% { opacity: 1; }
					100% { transform: translateY(100vh); opacity: 0; }
				}
			`}</style>
		</div>
	);
};
// Load font when component mounts
if (typeof window !== 'undefined') {
	loadNdotFont();
}
const handleOpenResume = () => {
	console.log('asdasd');
	window.open('/resume.pdf', '_blank');
};
const DotMatrix = ({rows = 8, cols = 12, animationSpeed = 2000}) => {
	const [activeDots, setActiveDots] = useState(new Set());
	const intervalRef = useRef(null);

	useEffect(() => {
		const animateDots = () => {
			const totalDots = rows * cols;
			const activeCount = Math.floor(totalDots * 0.3);
			const newActiveDots = new Set();

			for (let i = 0; i < activeCount; i++) {
				newActiveDots.add(Math.floor(Math.random() * totalDots));
			}

			setActiveDots(newActiveDots);
		};

		animateDots();
		intervalRef.current = setInterval(animateDots, animationSpeed);

		return () => clearInterval(intervalRef.current);
	}, [rows, cols, animationSpeed]);

	const dots = [];
	for (let i = 0; i < rows * cols; i++) {
		dots.push(
			<div
				key={i}
				className={`w-1 h-1 rounded-full transition-all duration-500 ${activeDots.has(i) ? 'bg-red-500 shadow-md shadow-red-500/50' : 'bg-gray-800'
					}`}
			/>
		);
	}

	return (
		<div
			className="grid gap-1 p-4 bg-black/50 rounded-lg border border-gray-800"
			style={{gridTemplateColumns: `repeat(${cols}, 1fr)`}}
		>
			{dots}
		</div>
	);
};

const GlowingCard = ({children, className = "", hover = true}) => (
	<div className={`
    relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6
    ${hover ? 'hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10' : ''}
    transition-all duration-300 group
    ${className}
  `}>
		{children}
	</div>
);

const ProjectCard = ({title, description, tech, github, live, icon: Icon}) => (
	<GlowingCard className="h-full">
		<div className="flex items-start justify-between mb-4">
			<div className="flex items-center gap-3">
				<div className="p-2 bg-red-500/20 rounded-lg">
					<Icon className="w-5 h-5 text-red-500" />
				</div>
				<h3 className="text-xl font-semibold">{title}</h3>
			</div>
			<div className="flex gap-2">
				{github && (
					<a href={github} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
						<Github className="w-4 h-4" />
					</a>
				)}
				{live && (
					<a href={live} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
						<ExternalLink className="w-4 h-4" />
					</a>
				)}
			</div>
		</div>
		<p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
		<div className="flex flex-wrap gap-2">
			{tech.map((t, i) => (
				<span key={i} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
					{t}
				</span>
			))}
		</div>
	</GlowingCard>
);

const handleDownload = () => {
	const url = `/resume.pdf`;
	console.log("Trying to download from:", url);
	const link = document.createElement('a');
	link.href = url;
	link.setAttribute('download', 'Vedant_Singh_Resume.pdf');
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

const SkillCategory = ({title, skills, icon: Icon}) => (
	<GlowingCard>
		<div className="flex items-center gap-3 mb-4">
			<div className="p-2 bg-red-500/20 rounded-lg">
				<Icon className="w-5 h-5 text-red-500" />
			</div>
			<h3 className="text-lg font-semibold">{title}</h3>
		</div>
		<div className="grid grid-cols-2 gap-2">
			{skills.map((skill, i) => (
				<div key={i} className="flex items-center gap-2 p-2 bg-gray-800/50 rounded-lg">
					<div className="w-2 h-2 bg-red-500 rounded-full"></div>
					<span className="text-sm">{skill}</span>
				</div>
			))}
		</div>
	</GlowingCard>
);

const ContactCard = ({icon: Icon, label, value, href}) => (
	<a href={href} className="block">
		<GlowingCard className="text-center">
			<div className="flex flex-col items-center gap-3">
				<div className="p-3 bg-red-500/20 rounded-full">
					<Icon className="w-6 h-6 text-red-500" />
				</div>
				<div>
					<p className="text-sm text-gray-400">{label}</p>
					<p className="font-semibold">{value}</p>
				</div>
			</div>
		</GlowingCard>
	</a>
);

const AnimatedCounter = ({end, duration = 2000}) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let start = 0;
		const increment = end / (duration / 16);
		const timer = setInterval(() => {
			start += increment;
			if (start >= end) {
				setCount(end);
				clearInterval(timer);
			} else {
				setCount(Math.ceil(start));
			}
		}, 16);

		return () => clearInterval(timer);
	}, [end, duration]);

	return <span>{count}</span>;
};

const App = () => {
	const [showBoot, setShowBoot] = useState(true);
	const [isLoaded, setIsLoaded] = useState(false);
	const projects = [
		{
			title: "Autonomous Ground Vehicle – IGVC 2025",
			description:
				"Led the full autonomy stack and electronics integration for a UGV that achieved 95% waypoint accuracy and reduced planning latency by 45%. Integrated LiDAR, RTK-GPS, and 3D cameras for robust navigation.",
			tech: ["C++", "ROS2", "LiDAR", "RTK-GPS", "3D Vision", "Path Planning"],
			github: "https://github.com/vedantsinggh",
			icon: Car
		},
		{
			title: "Rover for ICMTC-8, Egypt",
			description:
				"Built real-time sensor fusion algorithms using GPS, IMU, LiDAR, and encoder data, improving navigation accuracy by 30% and reducing drift to under 2°. Developed low-latency data pipelines for real-time decision making.",
			tech: ["C++", "ROS2", "Sensor Fusion", "Embedded Systems", "Real-time Systems"],
			github: "https://github.com/vedantsinggh",
			icon: Cpu
		},
		{
			title: "Custom Operating System",
			description:
				"Developed a lightweight OS kernel from scratch with memory management, basic process scheduling, and custom device drivers using C and Assembly.",
			tech: ["C", "Assembly", "Kernel Dev", "Memory Management", "OS Internals"],
			github: "https://github.com/vedantsinggh",
			icon: Zap
		},
		{
			title: "JEE ELEVATE Platform",
			description:
				"Served as Founding Tech Lead. Designed and developed a full-stack ed-tech MVP with scalable backend systems, handling 200+ users with zero downtime during launch.",
			tech: ["Go", "Node.js", "MongoDB", "React", "Docker"],
			github: "https://github.com/vedantsinggh",
			icon: Globe
		}
	];

	const skills = [
		{
			title: "Languages",
			skills: ["C", "C++", "Python", "Go", "JavaScript", "Dart", "SQL", "C#"],
			icon: Code
		},
		{
			title: "Robotics & Embedded",
			skills: ["ROS/ROS2", "RTK-GPS (ZED-F9P)", "LiDAR", "IMU", "Sensor Fusion", "STM32", "Arduino"],
			icon: Cpu
		},
		{
			title: "Systems & Simulation",
			skills: ["Linux", "Bash", "Embedded Systems", "Custom OS", "Raylib", "SDL2"],
			icon: Smartphone
		},
		{
			title: "Web & Tools",
			skills: ["React.js", "Node.js", "MongoDB", "Docker", "Git", "CMake", "Ubuntu"],
			icon: Zap
		}
	];

	const stats = [
		{label: "Projects", value: 42},
		{label: "Commits", value: 500},
		{label: "Global Competeitions", value: 2},
		{label: "Team Members Lead", value: 35}
	];

	const [activeSection, setActiveSection] = useState('about');
	const handleBootComplete = () => {
		setShowBoot(false);
		setIsLoaded(true);

		// Optional: Add any additional logic here
		// console.log('Boot animation completed after 3 seconds');
	};

	// Optional: Trigger boot animation manually
	const triggerBootAnimation = () => {
		setShowBoot(true);
		setIsLoaded(false);
	};

	// Optional: Auto-trigger boot animation on page load
	useEffect(() => {
		// Boot animation will automatically show because showBoot starts as true
		// If you want to delay it, you can add a setTimeout here
		// setTimeout(() => setShowBoot(true), 500);
	}, []);

	// Optional: Skip boot animation on subsequent visits
	useEffect(() => {
		const hasSeenBoot = localStorage.getItem('hasSeenBoot');
		if (hasSeenBoot) {
			setShowBoot(false);
			setIsLoaded(true);
		}
	}, []);

	useEffect(() => {
		const handleKeyPress = (e) => {
			if (e.key === 'Escape' && showBoot) {
				handleBootComplete();
			}
		};
		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	}, [showBoot]);
	if (showBoot) {
		return <BootAnimation onComplete={handleBootComplete} />;
	}
	return (
		<div className="min-h-screen bg-black text-white relative overflow-hidden font-ndot">
			{/* Animated Background */}
			<div className="fixed inset-0 opacity-5">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)]"></div>
				<div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] animate-pulse"></div>
			</div>

			{/* Custom CSS for Nothing font */}
			<style jsx global>{`
        .font-ndot {
          font-family: 'Ndot', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .text-ndot-display {
          font-family: 'Ndot', 'Inter', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        
        .text-ndot-heading {
          font-family: 'Ndot', 'Inter', sans-serif;
          font-weight: 500;
          letter-spacing: -0.01em;
        }
        
        .text-ndot-body {
          font-family: 'Ndot', 'Inter', sans-serif;
          font-weight: 400;
          letter-spacing: 0;
        }
      `}</style>

			<div className="relative z-10">
				{/* Header */}
				<header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
					<div className="container mx-auto px-6 py-4">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-4">
								<h1 className="text-xl font-bold">VS</h1>
							</div>

							<nav className="hidden md:flex items-center gap-6">
								{[].map((section) => (
									<button
										key={section}
										onClick={() => setActiveSection(section)}
										className={`px-4 py-2 rounded-lg transition-all capitalize ${activeSection === section
											? 'bg-red-500 text-white'
											: 'text-gray-300 hover:text-white hover:bg-gray-800'
											}`}
									>
										{section}
									</button>
								))}
							</nav>

							<div className="flex items-center gap-4">
								<DotMatrix rows={3} cols={4} animationSpeed={1500} />
							</div>
						</div>
					</div>
				</header>

				{/* Main Content */}
				<main className="pt-20">
					{/* Hero Section */}
					<section className="container mx-auto px-6 py-16 text-center">
						<div className="max-w-4xl mx-auto">
							<div className="mb-8">
								<h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent text-ndot-display">
									VEDANT SINGH
								</h1>
								<p className="text-xl md:text-2xl text-gray-300 mb-8 text-ndot-body">
									Embedded Systems • Robotics • Low Level Architectures
								</p>

								<div className="flex justify-center gap-8 mb-12">
									{stats.map((stat, i) => (
										<div key={i} className="text-center">
											<div className="text-2xl font-bold text-red-500">
												<AnimatedCounter end={stat.value} />
											</div>
											<div className="text-sm text-gray-400">{stat.label}</div>
										</div>
									))}
								</div>
							</div>

							<div className="flex flex-wrap justify-center gap-4 mb-12">
								<DotMatrix rows={6} cols={8} animationSpeed={2000} />
								<DotMatrix rows={6} cols={8} animationSpeed={1800} />
								<DotMatrix rows={6} cols={8} animationSpeed={2200} />
							</div>

							<div className="flex flex-wrap justify-center gap-4">
								<GlowingCard className="flex items-center gap-3">
									<MapPin className="w-5 h-5 text-red-500" />
									<span>Delhi, India</span>
								</GlowingCard>
								<GlowingCard className="flex items-center gap-3" onClick={handleOpenResume}>
									<a
										href="/resume.pdf"
										download="Vedant_Singh_Resume.pdf"
										className="flex items-center gap-3 text-white hover:underline"
									>
										<DownloadIcon className="w-5 h-5 text-green-400" />
										<span className="text-white">Download Resume</span>
									</a>
								</GlowingCard>
							</div>
						</div>
					</section>

					{/* About Section */}
					<section className="container mx-auto px-6 py-16" id="about">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-4xl font-bold mb-8 flex items-center gap-4 text-ndot-heading">
								<div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
									<span className="text-red-500 text-2xl">👋</span>
								</div>
								About Me
							</h2>

							<div className="grid md:grid-cols-2 gap-8">
								<GlowingCard>
									<p className="text-lg leading-relaxed mb-6">
										I’m a passionate robotics and systems developer with deep interest in autonomous navigation, real-time embedded computing, and low-level systems.
										From building custom operating systems to leading robot teams for global competitions, I thrive at the intersection of software, hardware, and strategy.
									</p>
									<p className="text-gray-300 leading-relaxed">
										From developing custom operating systems to implementing advanced navigation
										algorithms, I love solving complex problems that push the boundaries of what's possible.
									</p>
								</GlowingCard>

								<div className="space-y-4">
									<DotMatrix rows={10} cols={12} animationSpeed={2500} />

									<div className="flex gap-4">
										<ContactCard
											icon={Github}
											label="GitHub"
											value="vedantsinggh"
											href="https://github.com/vedantsinggh"
										/>
										<ContactCard
											icon={Linkedin}
											label="LinkedIn"
											value="vedant-singh"
											href="https://linkedin.com/in/vedantsinggh"
										/>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Projects Section */}
					<section className="container mx-auto px-6 py-16" id="projects">
						<div className="max-w-6xl mx-auto">
							<h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
								<div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
									<span className="text-red-500 text-2xl">🚀</span>
								</div>
								Projects
							</h2>

							<div className="grid md:grid-cols-2 gap-8">
								{projects.map((project, i) => (
									<ProjectCard key={i} {...project} />
								))}
							</div>
						</div>
					</section>

					{/* Skills Section */}
					<section className="container mx-auto px-6 py-16" id="skills">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
								<div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
									<span className="text-red-500 text-2xl">🔧</span>
								</div>
								Skills & Technologies
							</h2>

							<div className="grid md:grid-cols-2 gap-6 mb-12">
								{skills.map((skill, i) => (
									<SkillCategory key={i} {...skill} />
								))}
							</div>

							<div className="flex justify-center">
								<DotMatrix rows={8} cols={16} animationSpeed={1800} />
							</div>
						</div>
					</section>

					{/* Contact Section */}
					<section className="container mx-auto px-6 py-16" id="contact">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
								<div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
									<span className="text-red-500 text-2xl">📫</span>
								</div>
								Get In Touch
							</h2>

							<div className="grid md:grid-cols-3 gap-6 mb-12">
								<ContactCard
									icon={Mail}
									label="Email"
									value="vedantsinggh@gmail.com"
									href="mailto:vedantsinggh@gmail.com"
								/>
								<ContactCard
									icon={Linkedin}
									label="LinkedIn"
									value="vedantsinggh"
									href="https://linkedin.com/in/vedantsinggh"
								/>
								<ContactCard
									icon={Github}
									label="GitHub"
									value="vedantsinggh"
									href="https://github.com/vedantsinggh"
								/>
							</div>

							<GlowingCard className="text-center">
								<p className="text-xl mb-4">Engineering autonomy, from silicon to code.</p>
								<p className="text-gray-300">
									Yeah!
								</p>
							</GlowingCard>
						</div>
					</section>
				</main>

				{/* Footer */}
				<footer className="container mx-auto px-6 py-8 border-t border-gray-800">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<p className="text-gray-400 text-sm">
							© {new Date().getFullYear()} Vedant Singh. Crafted with ⚡ and Nothing OS inspiration.
						</p>

						<div className="flex items-center gap-4">
							<DotMatrix rows={2} cols={6} animationSpeed={3000} />
							<ChevronRight className="w-4 h-4 text-red-500" />
							<span className="text-sm text-gray-400">Always innovating</span>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default App;
