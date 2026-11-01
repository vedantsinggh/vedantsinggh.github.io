export interface CaseStudyMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface CaseStudyArchitectureStep {
  title: string;
  description: string;
  tag?: string;
}

export interface CaseStudyDetail {
  slug: string;
  category: "robotics" | "ai" | "app-dev" | "web-dev";
  categoryTitle: string;
  title: string;
  subtitle: string;
  heroKicker: string;
  year: string;
  status: "ACTIVE" | "COMPLETED" | "DEPLOYED" | "RESEARCH";
  role: string;
  timeline: string;
  githubUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
  isComingSoon?: boolean;
  metrics: CaseStudyMetric[];
  tags: string[];
  summary: string;
  imageUrl?: string;
  secondaryImageUrl?: string;
  imagePlaceholderText: string;
  imageAspect?: "16/9" | "16/10" | "4/3" | "3/2" | "auto";
  isFlagship?: boolean;
}

export const CASE_STUDIES: Record<string, CaseStudyDetail> = {
  "seva-first": {
    slug: "seva-first",
    category: "web-dev",
    categoryTitle: "Web Platforms & Systems",
    title: "SEVA First National Platform",
    subtitle: "Distributed High-Concurrency Architecture Serving 50,000+ Student Registrations — Ministry of Education",
    heroKicker: "National Initiative · Ministry of Education · SIH 1st Place Winner",
    year: "2024 — 2025",
    status: "DEPLOYED",
    isFlagship: true,
    role: "Founding Tech Lead & Backend Architect",
    timeline: "2024 — 2025 (Smart India Hackathon Winner 1st / 1,500+)",
    liveUrl: "https://sewafirstryic.dtu.ac.in/",
    metrics: [
      { label: "TOTAL REGISTRATIONS", value: "50,000+", detail: "Validated national student registrations across 28 states" },
      { label: "DAILY VISITORS", value: "1,000+", detail: "Daily active traffic during registration windows" },
      { label: "COMPETITION RANK", value: "1st / 1,500+", detail: "Winner at Smart India Hackathon (Ministry of Education)" },
      { label: "BACKEND STACK", value: "Go & Node.js", detail: "Redis distributed caching & PostgreSQL schemas" },
    ],
    tags: ["Go", "Node.js", "Redis", "PostgreSQL", "Docker", "Ministry of Education", "Distributed Systems"],
    summary:
      "SEVA First is an educational volunteer and assessment platform recognized by the Ministry of Education & AICTE, winning 1st place at Smart India Hackathon 2024 among 1,500+ competing institutions. Architected with Go and Node.js microservices, Redis distributed rate-limiting, and PostgreSQL, the system served over 50,000 registered students with 1,000+ daily visitors.",
    imageUrl: "/assets/seva-hero.png",
    imagePlaceholderText: "Official Ministry of Education SEVA First registration portal and management dashboard.",
    imageAspect: "16/9",
  },

  "astro-sushil": {
    slug: "astro-sushil",
    category: "app-dev",
    categoryTitle: "Application Development",
    title: "Astro Sushil Mobile & Web Suite",
    subtitle: "Production Vedic Astrology Platform with Sub-50ms Ephemeris Engine and Native Mobile Interfaces",
    heroKicker: "Client Platform · Production Monorepo · 2025 — 2026",
    year: "2025 — 2026",
    status: "ACTIVE",
    isFlagship: true,
    isComingSoon: true,
    role: "Full-Stack Architect & Lead Mobile Engineer",
    timeline: "2025 — Present (Coming Soon)",
    githubUrl: "https://github.com/vedantsinggh/astrosushil",
    metrics: [
      { label: "EPHEMERIS TARGET", value: "< 50 ms", detail: "Design target for offline Swiss Ephemeris calculation" },
      { label: "TYPE SAFETY", value: "100% Monorepo", detail: "End-to-end typing via Prisma, TypeScript & Dart" },
      { label: "CLIENT PLATFORMS", value: "3 Targets", detail: "Native Flutter (iOS/Android) and Next.js Web" },
      { label: "CHART RENDERING", value: "60 FPS Canvas", detail: "North and South Indian Kundali layouts" },
    ],
    tags: ["Flutter", "Dart", "Next.js", "Node.js", "Prisma ORM", "Docker", "Swiss Ephemeris", "TypeScript"],
    summary:
      "Astro Sushil is a production client platform combining a native Flutter mobile app, Next.js administrative dashboard, and Prisma/Node.js backend. Built around an offline Swiss Ephemeris astronomical engine, it targets sub-50ms calculation of complex planetary longitudes and house cusps (Bhavas), supporting consultation booking and report delivery.",
    imageUrl: "/assets/astro-sushil-hero.png",
    imagePlaceholderText: "Astro Sushil Flutter smartphone client suite and Next.js administrative workstation.",
    imageAspect: "16/9",
  },

  avni: {
    slug: "avni",
    category: "robotics",
    categoryTitle: "Robotics & Autonomous Systems",
    title: "Avni Autonomous Ground Vehicle",
    subtitle: "Deep-Terrain Competition Rover Platform Engineered for GPS-Denied, Unstructured Environments",
    heroKicker: "Field Dossier · UGV-DTU · UGVC 2026 Egypt",
    year: "2026",
    status: "ACTIVE",
    role: "Robotics & Embedded Systems Architect",
    timeline: "2024 — Present",
    githubUrl: "https://github.com/vedantsinggh/mercury",
    metrics: [
      { label: "TERRAIN SPEED", value: "4.2 m/s", detail: "Traversing mixed gravel and slope courses" },
      { label: "CONTROL LATENCY", value: "11.8 ms", detail: "Deterministic 99th-percentile loop under Linux SCHED_FIFO" },
      { label: "DRIVE ARCHITECTURE", value: "4WD BLDC Hub", detail: "Direct drive with custom articulated inverted-V suspension" },
      { label: "SENSOR SYNC", value: "Hardware PPS", detail: "1 Hz PPS pulse for microsecond timestamp alignment" },
    ],
    tags: ["ROS 2 Jazzy", "C++", "CAN-FD", "Hardware PPS", "LiDAR SLAM", "Inverted-V Chassis"],
    summary:
      "Avni is a competition-grade autonomous ground vehicle engineered to conquer unstructured outdoor terrain without relying on GPS. Built for the Unmanned Ground Vehicle Competition (UGVC 2026, Egypt), the platform combines custom mechanical suspension, isolated CAN-FD bus communication, deterministic 11.8ms ROS 2 control loops, and multi-sensor confidence-weighted localization.",
    imageUrl: "/projects/avni-rover.jpg",
    imagePlaceholderText: "Awaiting outdoor test-course photograph of Avni rover hardware, inverted-V suspension, and sensor mast at DTU.",
    imageAspect: "16/9",
  },

  agni: {
    slug: "agni",
    category: "robotics",
    categoryTitle: "Robotics & Autonomous Systems",
    title: "AGNI: Adaptive Sensor Fusion Research",
    subtitle: "Hybrid Confidence-Adaptive Fusion (HCAF) Under Environmental Uncertainty — IEEE 44th ICCE",
    heroKicker: "Peer-Reviewed Research · IEEE 44th ICCE (Las Vegas, 2025)",
    year: "2025",
    status: "RESEARCH",
    role: "Lead Author & Autonomous Systems Researcher",
    timeline: "8 Months (Presented at IEEE ICCE 2025, Las Vegas)",
    githubUrl: "https://github.com/vedantsinggh/ugvc2024_ws",
    paperUrl: "https://github.com/vedantsinggh/ugvc2024_ws",
    metrics: [
      { label: "ERROR REDUCTION", value: "~32%", detail: "Compared to standard EKF across outdoor gravel (measured)" },
      { label: "NAVIGATION SUCCESS", value: "~95%", detail: "Autonomous navigation success rate in GPS denial" },
      { label: "MAPPING ACCURACY", value: "~20 cm", detail: "3D costmap precision via LiDAR and stereo fusion" },
      { label: "LOCAL PLANNER", value: "DWA + IMU", detail: "Coupled with IMU vibration feedback" },
    ],
    tags: ["Sensor Fusion", "Kalman Filtering", "IEEE ICCE 2025", "ROS 2", "LiDAR", "C++", "SLAM"],
    summary:
      "AGNI formulates the Hybrid Confidence-Adaptive Fusion (HCAF) architecture, dynamically adjusting Kalman gain matrices when sensors degrade due to dust occlusion, wheel slip, or GPS dropouts. Published and presented at the IEEE 44th International Conference on Consumer Electronics in Las Vegas, AGNI demonstrates a ~32% localization error reduction across rugged terrain.",
    imageUrl: "/projects/agni-research.jpg",
    imagePlaceholderText: "Awaiting IEEE publication diagram, sensor degradation plots, and outdoor testing course overlay.",
    imageAspect: "16/10",
  },

  forgeos: {
    slug: "forgeos",
    category: "ai",
    categoryTitle: "AI & Perception",
    title: "FlawCode (ForgeOS)",
    subtitle: "Autonomous Multi-Agent AI Software Engineering Operating System with Deterministic State Machine Orchestration",
    heroKicker: "Multi-Agent AI Operating System · Active Development",
    year: "2025",
    status: "ACTIVE",
    role: "System Architect & AI Engineer",
    timeline: "2025 — Present",
    githubUrl: "https://github.com/vedantsinggh/flaw_code",
    metrics: [
      { label: "SPECIALIZED AGENTS", value: "5 Roles", detail: "Hermes, OpenClaw, Coder, QA & Security" },
      { label: "EXECUTION SAFETY", value: "Sandboxed", detail: "Docker container containment with AST validation" },
      { label: "TOOL EXECUTION", value: "Pydantic Loop", detail: "Strict JSON schema validation without hallucinations" },
      { label: "INTEGRATIONS", value: "Slack & GitHub", detail: "Thread status streaming and automated PR creation" },
    ],
    tags: ["Multi-Agent OS", "Python", "FastAPI", "Docker", "Slack API", "GitHub API", "Claude Tools", "AST Analysis"],
    summary:
      "FlawCode (ForgeOS) is a multi-agent software engineering operating system designed to automate software lifecycles safely. Supervised by the Hermes orchestrator and OpenClaw planner, specialized sub-agents write code, execute tests, audit security vulnerabilities, and generate pull requests within isolated Docker containers while streaming progress to Slack.",
    imageUrl: "/projects/forgeos-graph.jpg",
    imagePlaceholderText: "Awaiting FlawCode multi-agent Slack workflow telemetry and OpenClaw execution graph capture.",
    imageAspect: "4/3",
  },
};

export function getCaseStudyBySlug(slug: string): CaseStudyDetail | undefined {
  if (slug === "flawcode") return CASE_STUDIES.forgeos;
  if (slug === "seva") return CASE_STUDIES["seva-first"];
  if (slug === "astrosushil") return CASE_STUDIES["astro-sushil"];
  return CASE_STUDIES[slug];
}

export interface CaseStudyNavItem {
  slug: string;
  category: "robotics" | "ai" | "app-dev" | "web-dev";
  title: string;
  shortTitle: string;
  year: string;
  isFlagship?: boolean;
}

export const CASE_STUDY_NAV_ITEMS: CaseStudyNavItem[] = [
  { slug: "seva-first", category: "web-dev", title: "SEVA First", shortTitle: "SEVA First", year: "2024 — 2025", isFlagship: true },
  { slug: "astro-sushil", category: "app-dev", title: "Astro Sushil", shortTitle: "Astro Sushil", year: "2025 — 2026", isFlagship: true },
  { slug: "avni", category: "robotics", title: "Avni Rover", shortTitle: "Avni", year: "2026" },
  { slug: "agni", category: "robotics", title: "AGNI Fusion", shortTitle: "AGNI", year: "2025" },
  { slug: "forgeos", category: "ai", title: "FlawCode", shortTitle: "FlawCode", year: "2025" },
];

export function getNextCaseStudy(currentSlug: string): CaseStudyNavItem {
  const normalizedSlug = currentSlug === "flawcode" ? "forgeos" : currentSlug;
  const currentIndex = CASE_STUDY_NAV_ITEMS.findIndex((item) => item.slug === normalizedSlug);
  const nextIndex = (currentIndex + 1) % CASE_STUDY_NAV_ITEMS.length;
  return CASE_STUDY_NAV_ITEMS[nextIndex];
}

export function getAllCaseStudySlugs(): { category: string; project: string }[] {
  return [
    { category: "web-dev", project: "seva-first" },
    { category: "app-dev", project: "astro-sushil" },
    { category: "robotics", project: "avni" },
    { category: "robotics", project: "agni" },
    { category: "ai", project: "forgeos" },
    { category: "ai", project: "flawcode" },
  ];
}
