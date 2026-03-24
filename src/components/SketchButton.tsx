import Link from "next/link";

export default function SketchButton({ href, children }: any) {
  return (
    <Link href={href}>
      <button className="sketch px-4 py-2 hover:opacity-80">
        {children}
      </button>
    </Link>
  );
}
