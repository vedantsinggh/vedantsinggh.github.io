import { getProject, getProjects } from "@/lib/getProjects";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// ─── Static generation ────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Vedant Singh`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ProjectPage({ params }: any) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project || !project.contentHtml) notFound();

  // Derive display values with safe fallbacks
  const status   = project.status   ?? "complete";
  const year     = project.year     ?? "";
  const tags     = project.tags     ?? [];
  const subtitle = project.subtitle ?? "";
  const role     = project.role     ?? "";
  const duration = project.duration ?? "";
  const links    = project.links    ?? [];

  return (
    <div style={{ maxWidth: "100%", minHeight: "100vh", background: "var(--bg)" }}>

      {/* ── Back nav ─────────────────────────────────────────────────────── */}
      <div style={{
        padding: "1.25rem 3rem",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        position: "sticky", top: 0,
        background: "rgba(232,232,226,0.95)",
        backdropFilter: "blur(6px)",
        zIndex: 100,
      }}>
        <Link
          href="/projects"
          style={{
            fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--muted)",
            display: "flex", alignItems: "center", gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          ← Projects
        </Link>
        <span style={{ color: "var(--border)", fontSize: "0.6rem" }}>/</span>
        <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink)" }}>
          {project.title}
        </span>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div style={{ borderBottom: "1px solid var(--border)" }}>

        {/* Hero image — full bleed */}
        <div style={{
          width: "100%", height: "clamp(280px, 45vw, 580px)",
          position: "relative", overflow: "hidden",
          borderBottom: "1px solid var(--border)",
          background: "#0f0f0f",
        }}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              style={{ objectFit: "cover", filter: "grayscale(100%)", opacity: 0.55 }}
            />
          ) : (
            /* Generative fallback — circuit board pattern */
            <svg viewBox="0 0 1200 580" style={{ width: "100%", height: "100%", opacity: 0.12 }} xmlns="http://www.w3.org/2000/svg">
              <g stroke="#e8e8e2" fill="none" strokeWidth="1">
                {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => <line key={i} x1={i*110} y1={0} x2={i*110} y2={580} strokeDasharray="3 12" />)}
                {[0,1,2,3,4,5,6,7].map(i => <line key={i} x1={0} y1={i*83} x2={1200} y2={i*83} strokeDasharray="3 12" />)}
                <path d="M 110 166 L 330 166 L 330 332 L 550 332" strokeWidth="1.5"/>
                <path d="M 660 166 L 880 166 L 880 332 L 1100 332" strokeWidth="1.5"/>
                <path d="M 220 415 L 440 415 L 440 498 L 770 498" strokeWidth="1.5"/>
                <circle cx="330" cy="166" r="5" fill="#e8e8e2"/>
                <circle cx="880" cy="332" r="5" fill="#e8e8e2"/>
                <rect x="480" y="248" width="130" height="58" rx="2"/>
                <rect x="990" y="138" width="130" height="58" rx="2"/>
              </g>
            </svg>
          )}

          {/* Overlay gradient — bottom fade */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.85) 100%)",
          }} />

          {/* Title over image */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            padding: "3rem",
            display: "flex", flexDirection: "column", gap: "0.5rem",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
              <span style={{
                fontFamily: "var(--mono)", fontSize: "0.58rem", letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(232,232,226,0.5)",
                border: "1px solid rgba(232,232,226,0.2)",
                padding: "0.2rem 0.55rem",
              }}>
                {project.tag}
              </span>
              <span style={{
                fontFamily: "var(--mono)", fontSize: "0.58rem", letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0.2rem 0.55rem",
                background: status === "active" ? "rgba(232,232,226,0.9)" : "transparent",
                color: status === "active" ? "#0a0a0a" : "rgba(232,232,226,0.5)",
                border: "1px solid rgba(232,232,226,0.2)",
              }}>
                {status}
              </span>
            </div>

            <h1 style={{
              fontFamily: "var(--mono)",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 700, lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "#fafaf7",
            }}>
              {project.title}
              {subtitle && (
                <span style={{ display: "block", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.6rem, 3.5vw, 3.5rem)", opacity: 0.5 }}>
                  {subtitle}
                </span>
              )}
            </h1>
          </div>
        </div>

        {/* ── Meta strip ─────────────────────────────────────────────────── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          borderBottom: "1px solid var(--border)",
        }}>
          {[
            { label: "Year",     value: year     || "—" },
            { label: "Role",     value: role     || "Engineer" },
            { label: "Duration", value: duration || "—" },
            { label: "Stack",    value: tags.slice(0, 2).join(", ") || "—" },
          ].map((item, i) => (
            <div key={item.label} style={{
              padding: "1.5rem 2rem",
              borderRight: i < 3 ? "1px solid var(--border)" : "none",
            }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "0.55rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.5rem" }}>
                {item.label}
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "-0.01em" }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Body layout ──────────────────────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr minmax(0, 680px) 1fr", minHeight: "60vh" }}>
        {/* Left gutter — line numbers */}
        <div style={{
          borderRight: "1px solid var(--border)",
          padding: "4rem 1.5rem",
          display: "flex", flexDirection: "column", gap: "1.5rem",
          alignItems: "flex-end",
        }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} style={{
              fontFamily: "var(--mono)", fontSize: "0.58rem",
              color: "rgba(0,0,0,0.12)", letterSpacing: "0.05em",
              lineHeight: 1,
            }}>
              {String(i + 1).padStart(2, "0")}
            </span>
          ))}
        </div>

        {/* ── Article body ─────────────────────────────────────────────── */}
        <article style={{ padding: "4rem 3rem" }}>
          {/* Intro / description */}
          <p style={{
            fontFamily: "var(--mono)",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted)",
            marginBottom: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid var(--border)",
            letterSpacing: "-0.01em",
          }}>
            {project.description}
          </p>

          {/* Tags row */}
          {tags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "3rem" }}>
              {tags.map((t: string) => (
                <span key={t} style={{
                  fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.08em",
                  padding: "0.3rem 0.7rem",
                  background: "var(--ink)", color: "var(--bg)",
                  textTransform: "uppercase",
                }}>
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* MDX / HTML content */}
          <div
            className="project-prose"
            dangerouslySetInnerHTML={{ __html: String(project.contentHtml) }}
          />

          {/* External links */}
          {links.length > 0 && (
            <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "1rem" }}>
                Links
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {links.map((link: { label: string; href: string }) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--mono)", fontSize: "0.75rem", letterSpacing: "0.06em",
                      color: "var(--ink)",
                      display: "flex", alignItems: "center", gap: "0.5rem",
                      textDecoration: "none",
                      paddingBottom: "0.5rem",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <span style={{ opacity: 0.4 }}>↗</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
            <Link
              href="/projects"
              style={{
                fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.1em",
                textTransform: "uppercase", color: "var(--muted)",
                textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem",
              }}
            >
              ← Back to all projects
            </Link>
          </div>
        </article>

        {/* Right gutter — sticky meta sidebar */}
        <aside style={{
          borderLeft: "1px solid var(--border)",
          padding: "4rem 2rem",
          position: "sticky",
          top: "60px",
          height: "fit-content",
          alignSelf: "start",
        }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: "0.55rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "1.5rem" }}>
            At a glance
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { label: "Status", value: status },
              { label: "Year",   value: year || "—" },
              { label: "Role",   value: role || "Engineer" },
              ...(duration ? [{ label: "Duration", value: duration }] : []),
            ].map((item) => (
              <div key={item.label}>
                <div style={{ fontFamily: "var(--mono)", fontSize: "0.52rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.3rem" }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", fontWeight: 700 }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {tags.length > 0 && (
            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "0.52rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.75rem" }}>
                Stack
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {tags.map((t: string) => (
                  <span key={t} style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--ink)" }}>
                    — {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

