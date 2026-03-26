"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Project {
  slug: string;
  title: string;
  tag: string;
  description: string;
  year: string;
}

// ─── Breakpoint hook ──────────────────────────────────────────────────────────
function useBreakpoint() {
  const [w, setW] = useState(1200);
  useEffect(() => {
    const update = () => setW(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return {
    isMobile:  w < 640,
    isTablet:  w >= 640 && w < 1024,
    isDesktop: w >= 1024,
    w,
  };
}

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};
const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobile, isTablet }  = useBreakpoint();
  const compact = isMobile || isTablet;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { if (!compact) setMenuOpen(false); }, [compact]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "1rem 1.25rem" : "1.4rem 3rem",
          borderBottom: "1px solid var(--border)",
          position: "sticky",
          top: 0,
          background: scrolled ? "rgba(232,232,226,0.95)" : "var(--bg)",
          backdropFilter: scrolled ? "blur(6px)" : "none",
          zIndex: 200,
          transition: "background 0.3s",
        }}
      >
        <span style={{ fontFamily: "var(--mono)", fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          VEDANT SINGH
        </span>

        {!compact && (
          <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
            {["Work", "Lab", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--ink)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {!compact && (
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--muted)" }}>
            <span className="status-dot" />
            Available for projects
          </div>
        )}

        {compact && (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", flexDirection: "column", gap: "5px" }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block", width: 22, height: 1.5,
                  background: "var(--ink)",
                  transition: "transform 0.3s, opacity 0.3s",
                  transformOrigin: "center",
                  transform: menuOpen
                    ? i === 0 ? "translateY(6.5px) rotate(45deg)"
                    : i === 2 ? "translateY(-6.5px) rotate(-45deg)"
                    : "scaleX(0)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        )}
      </motion.nav>

      <AnimatePresence>
        {menuOpen && compact && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed",
              top: isMobile ? 57 : 65,
              left: 0, right: 0,
              background: "var(--bg)",
              borderBottom: "1px solid var(--border)",
              zIndex: 199,
              padding: "1.5rem 1.5rem 2rem",
            }}
          >
            {["Work", "Lab", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  fontFamily: "var(--mono)",
                  fontSize: "1.1rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  padding: "0.85rem 0",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                {item}
              </Link>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--muted)", marginTop: "1.5rem" }}>
              <span className="status-dot" />
              Available for projects
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const { isMobile, isTablet } = useBreakpoint();
  const compact = isMobile || isTablet;

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: compact ? "1fr" : "1fr 1fr",
        minHeight: isMobile ? "auto" : "88vh",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <motion.div
        variants={fadeUp} initial="hidden" animate="visible"
        style={{
          padding: isMobile ? "3rem 1.25rem 2.5rem" : isTablet ? "4rem 2rem 3rem" : "5rem 3rem 4rem",
          display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "2rem",
          borderRight:  compact ? "none" : "1px solid var(--border)",
          borderBottom: compact ? "1px solid var(--border)" : "none",
        }}
      >
        <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)" }}>
          Engineer · Builder · Systems thinker
        </span>

        <div>
          <h1 style={{
            fontFamily: "var(--mono)",
            fontSize: isMobile ? "clamp(2.8rem, 14vw, 4rem)" : "clamp(3rem, 6vw, 5.5rem)",
            fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "1.5rem",
          }}>
            VEDANT
            <span style={{ display: "block", fontStyle: "italic", fontWeight: 400, fontSize: isMobile ? "clamp(2.2rem, 11vw, 3.2rem)" : "clamp(2.4rem, 5vw, 4.5rem)" }}>
              SINGH
            </span>
          </h1>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "var(--muted)", maxWidth: "38ch" }}>
            I build systems that operate at the edge — autonomous robots, embedded runtimes, and AI-driven control loops. From bare metal to intelligence.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link href="/projects" className="btn-primary">View Projects</Link>
          <Link href="/blog"     className="btn-outline">Lab Notes →</Link>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn} initial="hidden" animate="visible"
        style={{ position: "relative", overflow: "hidden", minHeight: isMobile ? 320 : isTablet ? 420 : "auto" }}
      >
        <svg viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1 }}
        >
          <g stroke="var(--ink)" fill="none" strokeWidth="1">
            {[100, 200, 300, 400, 500].map((x) => (
              <line key={x} x1={x} y1={0} x2={x} y2={700} strokeDasharray="4 8" />
            ))}
            {[100, 200, 300, 400, 500, 600].map((y) => (
              <line key={y} x1={0} y1={y} x2={600} y2={y} strokeDasharray="4 8" />
            ))}
            <path className="circuit-path"                d="M 50 150 L 150 150 L 150 250 L 250 250" strokeWidth="1.5" />
            <path className="circuit-path circuit-path-2" d="M 350 150 L 450 150 L 450 350 L 550 350" strokeWidth="1.5" />
            <path className="circuit-path circuit-path-3" d="M 100 450 L 200 450 L 200 550 L 350 550" strokeWidth="1.5" />
            <circle cx="150" cy="150" r="4" fill="var(--ink)" />
            <circle cx="350" cy="350" r="4" fill="var(--ink)" />
            <circle cx="200" cy="550" r="4" fill="var(--ink)" />
            <rect x="60"  y="60"  width="80" height="40" rx="2" />
            <rect x="460" y="460" width="80" height="40" rx="2" />
          </g>
        </svg>

        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? "70%" : isTablet ? "60%" : "55%",
          aspectRatio: "3 / 4",
          border: "1px solid var(--border)",
          overflow: "hidden",
          background: "var(--white)",
        }}>
          <Image src="/assets/meai.jpeg" alt="Vedant" fill loading="eager" style={{ objectFit: "cover" }} />
        </div>

        <span style={{ position: "absolute", top: "1.25rem", left: "1.25rem", fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted)", textTransform: "uppercase", lineHeight: 1.6 }}>
          FIG. 01<br />PORTRAIT
        </span>
        <span style={{ position: "absolute", bottom: "1.25rem", right: "1.25rem", fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted)", textTransform: "uppercase", textAlign: "right", lineHeight: 1.6 }}>
          NEW DELHI<br />INDIA
        </span>
      </motion.div>
    </section>
  );
}

// ─── TICKER ───────────────────────────────────────────────────────────────────
function Ticker() {
  const items = ["OS Development", "Embedded Systems", "Autonomous Robotics", "AI Control Systems", "Real-Time Compute", "Edge Intelligence", "Hardware/Software Co-Design"];
  const doubled = [...items, ...items];

  return (
    <div style={{ borderBottom: "1px solid var(--border)", overflow: "hidden", padding: "0.75rem 0", background: "var(--ink)", color: "var(--bg)" }}>
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", flexShrink: 0, display: "flex", alignItems: "center", gap: "1rem" }}>
            {item}
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--bg)", opacity: 0.4, display: "inline-block" }} />
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── FEATURED PROJECT ─────────────────────────────────────────────────────────
function FeaturedProject() {
  const { isMobile, isTablet } = useBreakpoint();
  const compact = isMobile || isTablet;

  return (
    <motion.section
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      style={{ padding: isMobile ? "3rem 1.25rem" : isTablet ? "4rem 2rem" : "5rem 3rem", borderBottom: "1px solid var(--border)" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2.5rem" }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)" }}>
          // Featured Project
        </span>
        <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--muted)" }}>01 / 06</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: compact ? "1fr" : "1fr 1fr", border: "1px solid var(--border)" }}>
        <div style={{
          padding: isMobile ? "2rem 1.5rem" : "3.5rem",
          display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "1.5rem",
          borderRight:  compact ? "none" : "1px solid var(--border)",
          borderBottom: compact ? "1px solid var(--border)" : "none",
        }}>
          <div>
            <span style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", border: "1px solid var(--muted)", display: "inline-block", padding: "0.25rem 0.75rem", marginBottom: "1.5rem" }}>
              Active
            </span>
            <h2 style={{ fontFamily: "var(--mono)", fontSize: isMobile ? "2.2rem" : "3rem", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
              AGNI
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Autonomous navigation system for real-world terrain. Multi-modal sensor fusion, real-time path planning, and adaptive obstacle avoidance. Deployed on uneven outdoor surfaces at up to 4.2 m/s.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "2rem" }}>
              {["C++", "ROS2", "SLAM", "LiDAR", "Kalman Filter"].map((t) => (
                <span key={t} style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.08em", padding: "0.3rem 0.7rem", background: "var(--ink)", color: "var(--bg)", textTransform: "uppercase" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <Link href="/projects/agni" className="btn-primary" style={{ width: "fit-content" }}>
            Case Study →
          </Link>
        </div>

        <div style={{ background: "var(--white)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: compact ? 240 : 380, padding: "2rem" }}>
          <svg viewBox="0 0 340 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 320, opacity: 0.85 }}>
            <g fontFamily="'Space Mono', monospace" fill="none" stroke="var(--ink)" strokeWidth="1">
              <rect x="10"  y="110" width="70" height="30" rx="2" fill="var(--bg)" />
              <text x="45"  y="129" textAnchor="middle" fontSize="8" fill="var(--ink)" stroke="none">SENSORS</text>
              <rect x="120" y="90"  width="80" height="30" rx="2" fill="var(--ink)" />
              <text x="160" y="109" textAnchor="middle" fontSize="8" fill="var(--bg)"  stroke="none">FUSION</text>
              <rect x="120" y="150" width="80" height="30" rx="2" fill="var(--ink)" />
              <text x="160" y="169" textAnchor="middle" fontSize="8" fill="var(--bg)"  stroke="none">PLANNER</text>
              <rect x="250" y="110" width="70" height="30" rx="2" fill="var(--bg)" />
              <text x="285" y="129" textAnchor="middle" fontSize="8" fill="var(--ink)" stroke="none">MOTORS</text>
              <line x1="80"  y1="125" x2="120" y2="105" />
              <line x1="80"  y1="125" x2="120" y2="165" />
              <line x1="200" y1="105" x2="250" y2="120" />
              <line x1="200" y1="165" x2="250" y2="125" />
              <line x1="160" y1="120" x2="160" y2="150" />
              <polygon points="120,102 112,108 116,111" fill="var(--ink)" stroke="none" />
              <polygon points="120,168 112,162 116,159" fill="var(--ink)" stroke="none" />
              <polygon points="250,120 243,114 243,120" fill="var(--ink)" stroke="none" />
              <text x="10"  y="50"  fontSize="24" fill="var(--ink)" stroke="none" fontWeight="700">4.2</text>
              <text x="10"  y="65"  fontSize="8"  fill="var(--muted)" stroke="none">M/S TOP SPEED</text>
              <text x="170" y="50"  fontSize="24" fill="var(--ink)" stroke="none" fontWeight="700">12ms</text>
              <text x="170" y="65"  fontSize="8"  fill="var(--muted)" stroke="none">LOOP LATENCY</text>
              <text x="10"  y="252" fontSize="8"  fill="var(--muted)" stroke="none">AGNI v2.4.1 — outdoor autonomous nav</text>
            </g>
          </svg>
        </div>
      </div>
    </motion.section>
  );
}

// ─── PROJECTS GRID ────────────────────────────────────────────────────────────
const FALLBACK_PROJECTS: Project[] = [
  { slug: "osmium",    title: "Osmium OS",  tag: "OS / Kernel",     description: "Minimalist OS for resource-constrained servers. Preemptive scheduler, memory manager, and HAL.",         year: "2026" },
  { slug: "neuron",    title: "NEURON",     tag: "AI / Inference",  description: "On-device inference engine. Quantized model execution on ARM Cortex-M with no external dependencies.", year: "2024" },
  { slug: "flux-ctrl", title: "FLUX CTRL",  tag: "Embedded",        description: "PID control library with auto-tuning. Used in thermal management and motor speed regulation.",          year: "2023" },
  { slug: "optic",     title: "OPTIC",      tag: "Computer Vision", description: "Real-time object detection pipeline optimised for low-power FPGA deployment. 30fps at 5W.",             year: "2023" },
];

function ProjectsGrid({ projects }: { projects: Project[] }) {
  const { isMobile } = useBreakpoint();
  const cols  = isMobile ? 1 : 2;
  const items = projects.length ? projects : FALLBACK_PROJECTS;

  return (
    <motion.section
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      style={{ padding: isMobile ? "3rem 1.25rem" : "5rem 3rem", borderBottom: "1px solid var(--border)" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2.5rem" }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)" }}>
          // Selected Work
        </span>
        <Link href="/projects" style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>
          View All →
        </Link>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, border: "1px solid var(--border)" }}>
        {items.slice(0, 4).map((p, i) => {
          const isLastCol = (i + 1) % cols === 0;
          const isLastRow = i >= 4 - cols;
          return (
            <Link key={p.slug} href={`/projects/${p.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div
                className="project-card"
                style={{
                  borderRight:  isLastCol ? "none" : "1px solid var(--border)",
                  borderBottom: isLastRow ? "none" : "1px solid var(--border)",
                }}
              >
                <span className="card-tag tag-mono" style={{ color: "var(--muted)", border: "1px solid var(--muted)", display: "inline-block", padding: "0.2rem 0.6rem", marginBottom: "1.25rem", position: "relative", zIndex: 1, transition: "color 0.3s, border-color 0.3s" }}>
                  {p.tag}
                </span>
                <div className="card-title" style={{ fontFamily: "var(--mono)", fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.6rem", position: "relative", zIndex: 1, transition: "color 0.3s" }}>
                  {p.title}
                </div>
                <p className="card-desc" style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.6, position: "relative", zIndex: 1, transition: "color 0.3s" }}>
                  {p.description}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.75rem", position: "relative", zIndex: 1 }}>
                  <span className="card-year tag-mono" style={{ color: "var(--muted)", transition: "color 0.3s" }}>{p.year}</span>
                  <span className="card-arrow" style={{ fontSize: "1.1rem", transition: "transform 0.3s, color 0.3s" }}>↗</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.section>
  );
}

// ─── ABOUT STRIP ──────────────────────────────────────────────────────────────
function AboutStrip() {
  const { isMobile, isTablet } = useBreakpoint();
  const compact = isMobile || isTablet;

  if (compact) {
    return (
      <motion.section
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid var(--border)" }}>
          {[{ label: "Experience", value: "4+", sub: "Years building" }, { label: "Projects", value: "12", sub: "Shipped" }].map((cell, i) => (
            <div key={i} style={{ padding: "2rem 1.5rem", borderRight: i === 0 ? "1px solid var(--border)" : "none" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "1rem" }}>{cell.label}</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em" }}>{cell.value}</div>
              <div style={{ marginTop: "0.4rem", fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.05em", textTransform: "uppercase" }}>{cell.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: "2rem 1.5rem" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "1rem" }}>About</div>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "var(--muted)" }}>
            Systems engineer obsessed with the intersection of hardware and intelligence. I write C and C++, design circuits, and occasionally break things in interesting ways. Currently building at the edge of robotics and AI.
          </p>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
      style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", borderBottom: "1px solid var(--border)" }}
    >
      {[
        { label: "Experience", value: "4+", sub: "Years building" },
        null,
        { label: "Projects",   value: "12", sub: "Shipped" },
      ].map((cell, i) =>
        cell ? (
          <div key={i} style={{ padding: "3rem", borderRight: i === 0 ? "1px solid var(--border)" : "none" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "1.5rem" }}>{cell.label}</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: "2.2rem", fontWeight: 700, letterSpacing: "-0.02em" }}>{cell.value}</div>
            <div style={{ marginTop: "0.5rem", fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.05em", textTransform: "uppercase" }}>{cell.sub}</div>
          </div>
        ) : (
          <div key={i} style={{ padding: "3rem", borderRight: "1px solid var(--border)", borderLeft: "1px solid var(--border)" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "1.5rem" }}>About</div>
            <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--muted)" }}>
              Systems engineer obsessed with the intersection of hardware and intelligence. I write C and C++, design circuits, and occasionally break things in interesting ways. Currently building at the edge of robotics and AI.
            </p>
          </div>
        )
      )}
    </motion.section>
  );
}

// ─── BLOG PREVIEW ─────────────────────────────────────────────────────────────
const BLOG_POSTS = [
  { date: "Mar 2025", title: "Why I rewrote the scheduler from scratch",  excerpt: "Priority inversion, priority inheritance, and why the simple solution was the right one." },
  { date: "Jan 2025", title: "Kalman filters: an honest field guide",      excerpt: "What the textbooks don't tell you about numerical instability and real sensor noise." },
  { date: "Nov 2024", title: "Debugging at 3am with a logic analyser",    excerpt: "The SPI clock was fine. The problem was something far more embarrassing." },
];

function BlogPreview() {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <motion.section
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      style={{ padding: isMobile ? "3rem 1.25rem" : isTablet ? "4rem 2rem" : "5rem 3rem", borderBottom: "1px solid var(--border)" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2.5rem" }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)" }}>
          // Lab Notes
        </span>
        <Link href="/blog" style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>
          All Notes →
        </Link>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, border: "1px solid var(--border)" }}>
        {BLOG_POSTS.slice(0, cols === 1 ? 3 : cols).map((post, i) => (
          <div
            key={i}
            style={{
              padding: isMobile ? "1.5rem" : "2rem",
              borderRight:  cols > 1 && i < cols - 1 ? "1px solid var(--border)" : "none",
              borderBottom: cols === 1 && i < BLOG_POSTS.length - 1 ? "1px solid var(--border)" : "none",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--white)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
          >
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted)", marginBottom: "0.75rem", textTransform: "uppercase" }}>
              {post.date}
            </div>
            <div style={{ fontFamily: "var(--mono)", fontSize: "0.9rem", fontWeight: 700, lineHeight: 1.4, marginBottom: "0.6rem" }}>
              {post.title}
            </div>
            <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.6 }}>
              {post.excerpt}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  const { isMobile } = useBreakpoint();
  const links = ["GitHub", "LinkedIn", "Twitter", "Email"];

  return (
    <footer style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      borderTop: "1px solid var(--border)",
    }}>
      <div style={{ padding: isMobile ? "2rem 1.25rem" : "3rem", borderRight: isMobile ? "none" : "1px solid var(--border)", borderBottom: isMobile ? "1px solid var(--border)" : "none" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>VS</div>
        <div style={{ fontFamily: "var(--mono)", fontSize: "0.7rem", letterSpacing: "0.08em", color: "var(--muted)", textTransform: "uppercase" }}>
          Systems Engineer · New Delhi, India
        </div>
      </div>
      <div style={{
        padding: isMobile ? "2rem 1.25rem" : "3rem",
        display: "flex", alignItems: "center",
        justifyContent: isMobile ? "flex-start" : "flex-end",
        gap: isMobile ? "1.5rem" : "2rem",
        flexWrap: "wrap",
      }}>
        {links.map((l) => (
          <span
            key={l}
            style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", cursor: "pointer", borderBottom: "1px solid transparent", transition: "color 0.2s, border-color 0.2s", paddingBottom: "2px" }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--ink)"; el.style.borderColor = "var(--ink)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--muted)"; el.style.borderColor = "transparent"; }}
          >
            {l}
          </span>
        ))}
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const projects: Project[] = FALLBACK_PROJECTS;

  return (
    <div style={{ maxWidth: "100%", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Ticker />
      <FeaturedProject />
      <ProjectsGrid projects={projects} />
      <AboutStrip />
      <BlogPreview />
      <Footer />
    </div>
  );
}
