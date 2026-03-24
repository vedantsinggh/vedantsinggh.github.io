import { getProjects } from "@/lib/getProjects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-6xl mx-auto px-6">

		<Hero />
      {/* SYSTEM VISUAL */}
      <section className="my-20">
        <div className="sketch p-4">
          <img
            src="/assets/system-diagram.png"
            alt="system diagram"
            className="w-full grayscale"
          />
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="my-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <div>
            <h2 className="text-3xl font-semibold">
              AGNI
            </h2>

            <p className="mt-4 text-sm opacity-70">
              Autonomous navigation system for real-world terrain.
            </p>

            <Link
              href="/projects/agni"
              className="mt-6 inline-block underline"
            >
              View Case Study →
            </Link>
          </div>

          <div className="sketch p-4">
            <img
              src="/assets/agni.png"
              alt="agni system"
              className="w-full grayscale"
            />
          </div>

        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="my-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl">Selected Work</h2>

          <Link
            href="/projects"
            className="text-sm opacity-60"
          >
            view all →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p: any) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* SYSTEM IDENTITY STRIP */}
      <section className="my-20">
        <div className="sketch p-6 flex flex-wrap gap-6 text-sm">

          <div>OS DEVELOPMENT</div>
          <div>EMBEDDED SYSTEMS</div>
          <div>ROBOTICS</div>
          <div>AI SYSTEMS</div>
          <div>REAL-TIME COMPUTE</div>

        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="my-20 flex justify-between items-center">
        <div>
          <h2 className="text-lg">Lab Notes</h2>
          <p className="text-sm opacity-60 mt-2">
            Research, failures, experiments
          </p>
        </div>

        <Link
          href="/blog"
          className="border border-black px-5 py-2 hover:bg-black hover:text-white transition"
        >
          Open
        </Link>
      </section>

    </div>
  );
}
