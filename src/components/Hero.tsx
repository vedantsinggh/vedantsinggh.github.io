"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
<section className="relative pt-24 pb-16">

  <motion.h1
    className="hero-font text-4xl md:text-6xl leading-tight"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    I build systems<br />
    and learn by doing.
  </motion.h1>

  <p className="mt-6 max-w-lg text-sm opacity-70">
    Working across operating systems, robotics, and AI.  
    Most things are experiments. Some of them work.
  </p>

  <div className="mt-10 flex items-center gap-6 text-sm">

    <Link
      href="/projects"
      className="px-4 py-2 border border-black hover:bg-black hover:text-white transition"
    >
      View Work
    </Link>

    <Link
      href="/blog"
      className="opacity-70 hover:opacity-100 underline"
    >
      Read Logs
    </Link>

  </div>

  <div className="mt-8 text-xs opacity-50 mono">
    currently exploring → autonomous navigation, low-level systems
  </div>

</section>
  );
}
