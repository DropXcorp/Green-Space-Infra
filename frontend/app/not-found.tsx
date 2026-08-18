import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid min-h-[75vh] place-items-center bg-[#f7f9f6] px-6 pt-28 text-center">
      <div>
        <p className="text-7xl font-extrabold text-[#43a324]">404</p>
        <h1 className="mt-5 font-[var(--font-playfair)] text-4xl font-semibold tracking-tight text-[#151715] md:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[#687068]">
          The page may have moved, or the address may be incorrect.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#43a324] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#2f7f1d]"
        >
          <ArrowLeft size={17} /> Back home
        </Link>
      </div>
    </section>
  );
}