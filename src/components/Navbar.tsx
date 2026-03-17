"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <Image
              src="/logo.png"
              alt="Auto X Flow Logo"
              fill
              className="object-contain mix-blend-screen"
            />
          </div>
          <span className="font-semibold text-xl tracking-tight">Auto X Flow</span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link
          href="/services"
            className="text-sm font-medium text-zinc-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-300"
          >
            Services
          </Link>
          <Link
          href="/contact"
            className="text-sm font-medium text-zinc-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-300"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
