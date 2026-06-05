"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full pt-48 pb-48 min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-mono text-xs tracking-widest text-primary mb-6">404</p>
      <h1 className="text-5xl font-serif text-white mb-8">Page not found.</h1>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-mono tracking-widest text-muted-foreground hover:text-primary transition-colors"
      >
        ← Back home
      </Link>
    </div>
  );
}
