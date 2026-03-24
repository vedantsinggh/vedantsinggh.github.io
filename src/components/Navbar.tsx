import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-6 py-4 border-b border-white/10">
      <Link href="/">VS</Link>
      <div className="space-x-6">
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
