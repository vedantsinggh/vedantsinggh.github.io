export interface ProjectItem {
  id: string;
  num: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
  alt: string;
  description?: string;
  link?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "ugv-dtu",
    num: "01",
    title: "UGV-DTU",
    category: "ROBOTICS",
    tags: ["ROBOTICS", "PERCEPTION", "AUTONOMY"],
    image: "/editorial/work-ugv.jpg",
    alt: "Autonomous UGV rover vehicle in rugged mountainous environment",
    description: "Multi-sensor perception pipelines, SLAM, sensor fusion, and autonomous navigation for rugged unmanned ground vehicles.",
    link: "https://github.com/vedantsinggh",
  },
  {
    id: "seva",
    num: "02",
    title: "SEVA",
    category: "SOFTWARE",
    tags: ["PLATFORM", "SYSTEMS", "DEPLOYMENT"],
    image: "/editorial/work-seva.jpg",
    alt: "Modern high-performance systems dashboard interface",
    description: "Distributed telemetry platform, real-time metrics streaming, and fault-tolerant infrastructure.",
    link: "https://github.com/vedantsinggh",
  },
  {
    id: "astro-sushil",
    num: "03",
    title: "ASTRO SUSHIL",
    category: "SOFTWARE",
    tags: ["ASTROLOGY", "PLATFORM", "ENGINEERING"],
    image: "/editorial/work-astro.jpg",
    alt: "Planetary celestial coordinate sphere and orbit calculation engine",
    description: "High-precision ephemeris calculation engine, celestial coordinate transforms, and modern computational backend.",
    link: "https://github.com/vedantsinggh",
  },
  {
    id: "other-work",
    num: "04",
    title: "OTHER WORK",
    category: "SOFTWARE",
    tags: ["SOFTWARE", "SYSTEMS", "EXPERIMENTS"],
    image: "/editorial/work-other.jpg",
    alt: "Dark workstation with code terminal and experimental runtime environments",
    description: "Low-level kernels, embedded microcontrollers, distributed protocols, and AI experiments.",
    link: "https://github.com/vedantsinggh",
  },
];
