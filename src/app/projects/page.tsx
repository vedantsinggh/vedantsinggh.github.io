"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  tag: string;
  year: string;
  status?: "active" | "complete" | "archived";
  description: string;
  image?: string;
  tags?: string[];
}

// ─── Breakpoint ───────────────────────────────────────────────────────────────
function useBreakpoint() {
  const [w, setW] = useState(1200);
  useEffect(() => {
    const update = () => setW(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return { isMobile: w < 640, isTablet: w >= 640 && w < 1024 };
}

// ─── Animation ────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

// ─── NAV ─────────────────────────────────────────────────────────────────────
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
        <Link
          href="/"
          style={{ fontFamily: "var(--mono)", fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink)", textDecoration: "none" }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--ink)")}
        >
          VEDANT SINGH
        </Link>

        {!compact && (
          <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
            {["Projects", "Lab", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", transition: "color 0.2s", textDecoration: "none" }}
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
            {["Projects", "Lab", "About", "Contact"].map((item) => (
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
                  textDecoration: "none",
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

// ─── SAMPLE DATA ──────────────────────────────────────────────────────────────
const SAMPLE_PROJECTS: Project[] = [
  {
    slug: "agni",
    title: "AGNI",
    subtitle: "Autonomous Terrain Navigation",
    tag: "Robotics",
    year: "2025",
    status: "active",
    description: "Multi-modal sensor fusion system for real-world autonomous navigation. Operates at 4.2 m/s on uneven outdoor terrain with 12ms control loop latency.",
    image: "/assets/agni.png",
    tags: ["C++", "ROS2", "SLAM", "LiDAR"],
  },
  {
    slug: "osmium",
    title: "OSMIUM OS",
    subtitle: "Minimalist Server Kernel",
    tag: "OS / Kernel",
    year: "2026",
    status: "active",
    description: "Preemptive micro-kernel for resource-constrained servers. Custom memory allocator, scheduler, and hardware abstraction layer from scratch.",
    image: "/assets/osmium.png",
    tags: ["C", "Assembly", "x86-64"],
  },
];

// ─── Status badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status?: string }) {
  const colors: Record<string, string> = {
    active:   "var(--ink)",
    complete: "transparent",
    archived: "transparent",
  };
  const textColors: Record<string, string> = {
    active:   "var(--bg)",
    complete: "var(--muted)",
    archived: "var(--muted)",
  };
  return (
    <span style={{
      fontFamily: "var(--mono)",
      fontSize: "0.55rem",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      padding: "0.2rem 0.55rem",
      background: colors[status ?? "complete"],
      color: textColors[status ?? "complete"],
      border: "1px solid var(--border)",
      display: "inline-block",
      flexShrink: 0,
    }}>
      {status ?? "complete"}
    </span>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div custom={index} variants={fadeUp} initial="hidden" animate="visible" style={{ height: "100%" }}>
      <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            border: "1px solid var(--border)",
            background: hovered ? "var(--ink)" : "var(--white)",
            transition: "background 0.35s cubic-bezier(0.16,1,0.3,1)",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* Image zone */}
          <div style={{
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            borderBottom: "1px solid var(--border)",
            background: hovered ? "#111" : "var(--bg)",
            position: "relative",
            transition: "background 0.35s",
            flexShrink: 0,
          }}>
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                  opacity: hovered ? 0.3 : 0.85,
                  transition: "opacity 0.35s",
                }}
              />
            ) : (
              <svg viewBox="0 0 400 225" style={{ width: "100%", height: "100%", opacity: hovered ? 0.15 : 0.08 }}>
                <g stroke={hovered ? "var(--bg)" : "var(--ink)"} fill="none" strokeWidth="1">
                  {[0,1,2,3,4,5].map(i => <line key={i} x1={i*80} y1={0} x2={i*80} y2={225} strokeDasharray="3 9" />)}
                  {[0,1,2,3].map(i => <line key={i} x1={0} y1={i*75} x2={400} y2={i*75} strokeDasharray="3 9" />)}
                  <rect x="160" y="90" width="80" height="45" rx="2" />
                  <circle cx="200" cy="112" r="12" />
                  <line x1="80" y1="112" x2="160" y2="112" />
                  <line x1="240" y1="112" x2="320" y2="112" />
                </g>
                <text x="200" y="117" textAnchor="middle" fontFamily="'Space Mono', monospace" fontSize="10"
                  fill={hovered ? "var(--bg)" : "var(--ink)"} opacity="0.5">
                  {project.slug.toUpperCase()}
                </text>
              </svg>
            )}
            <span style={{
              position: "absolute", bottom: "0.75rem", right: "0.75rem",
              fontFamily: "var(--mono)", fontSize: "0.55rem", letterSpacing: "0.1em",
              color: hovered ? "rgba(255,255,255,0.4)" : "var(--muted)",
              textTransform: "uppercase", transition: "color 0.35s",
            }}>
              {project.year}
            </span>
          </div>

          {/* Content */}
          <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
            {/* Tag + status row — flex-wrap so they never overflow */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "0.5rem",
              flexWrap: "wrap",
              marginBottom: "0.6rem",
            }}>
              <span style={{
                fontFamily: "var(--mono)", fontSize: "0.58rem", letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: hovered ? "rgba(232,232,226,0.5)" : "var(--muted)",
                border: `1px solid ${hovered ? "rgba(232,232,226,0.2)" : "rgba(0,0,0,0.2)"}`,
                padding: "0.18rem 0.5rem",
                transition: "color 0.35s, border-color 0.35s",
              }}>
                {project.tag}
              </span>
              <StatusBadge status={project.status} />
            </div>

            {/* Title — larger touch-friendly size, allows break */}
            <div style={{
              fontFamily: "var(--mono)", fontSize: "1.1rem", fontWeight: 700,
              letterSpacing: "-0.02em", lineHeight: 1.2,
              color: hovered ? "var(--bg)" : "var(--ink)",
              transition: "color 0.35s",
              marginBottom: "0.3rem",
              wordBreak: "break-word",
            }}>
              {project.title}
            </div>

            {project.subtitle && (
              <div style={{
                fontFamily: "var(--mono)", fontSize: "0.65rem",
                color: hovered ? "rgba(232,232,226,0.5)" : "var(--muted)",
                letterSpacing: "0.04em", transition: "color 0.35s",
                marginBottom: "0.5rem",
                lineHeight: 1.5,
              }}>
                {project.subtitle}
              </div>
            )}

            {/* Description — full width, enough line-height to read comfortably */}
            <p style={{
              fontSize: "0.85rem",
              lineHeight: 1.7,
              color: hovered ? "rgba(232,232,226,0.65)" : "var(--muted)",
              transition: "color 0.35s",
              margin: 0,
              flex: 1,
            }}>
              {project.description}
            </p>

            {/* Footer row */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              marginTop: "1rem", paddingTop: "0.75rem",
              borderTop: `1px solid ${hovered ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)"}`,
              gap: "0.5rem",
            }}>
              <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap", flex: 1 }}>
                {project.tags?.slice(0, 3).map((t) => (
                  <span key={t} style={{
                    fontFamily: "var(--mono)", fontSize: "0.55rem", letterSpacing: "0.06em",
                    padding: "0.15rem 0.45rem",
                    background: hovered ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)",
                    color: hovered ? "rgba(232,232,226,0.7)" : "var(--muted)",
                    textTransform: "uppercase", transition: "all 0.35s",
                  }}>
                    {t}
                  </span>
                ))}
              </div>
              <span style={{
                fontSize: "1rem",
                color: hovered ? "var(--bg)" : "var(--ink)",
                transition: "transform 0.3s, color 0.35s",
                transform: hovered ? "translate(3px, -3px)" : "none",
                display: "inline-block",
                flexShrink: 0,
              }}>↗</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Filter bar ───────────────────────────────────────────────────────────────
function FilterBar({ active, tags, onChange }: { active: string; tags: string[]; onChange: (t: string) => void }) {
  const { isMobile } = useBreakpoint();
  return (
    // Outer: clips overflow; inner: natural width so buttons never compress
    <div style={{
      border: "1px solid var(--border)",
      marginBottom: "2rem",
      overflowX: "auto",
      WebkitOverflowScrolling: "touch" as any,
    }}>
      <div style={{
        display: "flex",
        flexWrap: "nowrap",       // never wrap — horizontal scroll instead
        width: "max-content",     // shrink-wrap to content
        minWidth: "100%",         // but fill container when content is narrower
      }}>
        {["All", ...tags].map((tag, i, arr) => (
          <button
            key={tag}
            onClick={() => onChange(tag)}
            style={{
              fontFamily: "var(--mono)",
              fontSize: isMobile ? "0.68rem" : "0.62rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              // Taller tap target on mobile
              padding: isMobile ? "0.9rem 1rem" : "0.65rem 1.25rem",
              background: active === tag ? "var(--ink)" : "transparent",
              color: active === tag ? "var(--bg)" : "var(--muted)",
              border: "none",
              borderRight: i < arr.length - 1 ? "1px solid var(--border)" : "none",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Projects() {
  const projects = SAMPLE_PROJECTS;

  const { isMobile, isTablet } = useBreakpoint();
  const [activeFilter, setActiveFilter] = useState("All");

  const allTags = Array.from(new Set(projects.map((p) => p.tag)));
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.tag === activeFilter);
  const cols = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <div style={{ maxWidth: "100%", minHeight: "100vh", background: "var(--bg)" }}>
      <Nav />

      {/* ── Page header ── */}
      <div style={{
        padding: isMobile ? "2.5rem 1.25rem 2rem" : isTablet ? "3.5rem 2rem 3rem" : "5rem 3rem 4rem",
        borderBottom: "1px solid var(--border)",
        display: "grid",
        // Always stack on mobile — single column gives full width to text
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "1.5rem" : "2rem",
        alignItems: "end",
      }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "1rem" }}>
            // Selected Work
          </div>
          <h1 style={{
            fontFamily: "var(--mono)",
            // Fluid size: comfortable on 320px screens, large on desktop
            fontSize: isMobile
              ? "clamp(2.2rem, 11vw, 3rem)"
              : isTablet
              ? "clamp(2.5rem, 6vw, 3.5rem)"
              : "clamp(3rem, 5vw, 5rem)",
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            // Safety net: never overflow the container
            overflowWrap: "break-word",
          }}>
            PROJECTS
            <span style={{
              display: "block",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: isMobile
                ? "clamp(1.8rem, 9vw, 2.5rem)"
                : isTablet
                ? "clamp(2rem, 5vw, 3rem)"
                : "clamp(2.5rem, 4vw, 4rem)",
            }}>
              &amp; Systems
            </span>
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
          <p style={{
            fontSize: isMobile ? "0.88rem" : "0.9rem",
            lineHeight: 1.8,
            color: "var(--muted)",
            // Remove hard maxWidth on mobile — let text fill its column naturally
            maxWidth: isMobile ? "none" : "42ch",
          }}>
            A collection of systems built across robotics, embedded compute, operating systems, and AI. Each project is a step toward hardware that thinks.
          </p>
          <div style={{ marginTop: "1.25rem", display: "flex", gap: isMobile ? "1.5rem" : "2rem" }}>
            {[
              { label: "Total",  value: projects.length },
              { label: "Active", value: projects.filter(p => p.status === "active").length },
              { label: "Years",  value: "4+" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: "var(--mono)", fontSize: isMobile ? "1.25rem" : "1.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: "var(--mono)", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginTop: "0.2rem" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Grid ── */}
      <div style={{ padding: isMobile ? "2rem 1.25rem" : isTablet ? "3rem 2rem" : "4rem 3rem" }}>
        <FilterBar active={activeFilter} tags={allTags} onChange={setActiveFilter} />

        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          // On mobile: gap between cards since 1px background trick looks bad single-col
          gap: isMobile ? "1rem" : "1px",
          background: isMobile ? "transparent" : "var(--border)",
        }}>
          {filtered.map((project, i) => (
            <div key={project.slug} style={{ background: "var(--bg)" }}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "6rem 0", fontFamily: "var(--mono)", fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            No projects in this category
          </div>
        )}
      </div>
    </div>
  );
}
