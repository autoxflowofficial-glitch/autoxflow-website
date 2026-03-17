"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Statement() {
  return (
    <section className="relative w-full px-4 md:px-8 py-20 z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-20 flex flex-col items-center text-center group"
          style={{
            background:
              "radial-gradient(#ffffff12 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            backgroundColor: "rgba(24, 24, 27, 0.5)",
          }}
        >
          {/* Radial top glow */}
          <div className="absolute top-0 inset-x-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(0,255,255,0.07)_0%,transparent_65%)] pointer-events-none" />

          {/* 1px glowing border */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,255,255,0.25), rgba(138,43,226,0.25)) border-box",
              WebkitMask:
                "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              border: "1px solid transparent",
            }}
          />

          {/* AI Core Animation */}
          <div className="relative w-32 h-32 mb-10 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-5 h-5 rounded-full bg-brand-cyan shadow-[0_0_28px_rgba(0,255,255,0.9)] z-20"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
              className="absolute w-16 h-16 rounded-full border border-brand-purple/40"
              style={{ borderTopColor: "rgba(0,255,255,0.7)" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute w-28 h-28 rounded-full"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                borderLeftColor: "rgba(0,255,255,0.35)",
                borderRightColor: "rgba(138,43,226,0.45)",
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_8px_rgba(0,255,255,1)]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(138,43,226,1)]" />
            </motion.div>
          </div>

          {/* Pill Tag */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-400 text-xs font-medium tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse inline-block" />
            The Autonomous Era
          </div>

          {/* Statement Text */}
          <p className="text-3xl md:text-5xl lg:text-6xl font-semibold text-zinc-100 leading-[1.1] tracking-tight max-w-4xl mx-auto z-10 relative mb-10">
            Auto X Flow is your dedicated AI infrastructure, evolving
            traditional business operations.
          </p>

          {/* CTA Button */}
          <Link href="/services#arsenal">
            <button className="px-8 py-3 rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-200 text-sm font-medium tracking-tight hover:border-brand-cyan/60 hover:text-white hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition-all duration-300">
              View Infrastructure
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
