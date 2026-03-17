"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FooterRouting() {
  return (
    <section className="py-24 px-6 relative w-full bg-black z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Services */}
        <Link href="/services" className="block outline-none group">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative h-64 md:h-80 w-full rounded-3xl bg-zinc-950 border border-zinc-800 p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:border-brand-cyan/40 group-hover:shadow-[0_0_50px_rgba(0,255,255,0.15)] group-focus-visible:ring-2 group-focus-visible:ring-brand-cyan group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-black"
          >
            <div className="absolute inset-0 bg-linear-to-br from-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <span className="text-zinc-500 text-sm font-medium tracking-widest uppercase mb-4 block">
                Capabilities
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter group-hover:text-brand-cyan transition-colors duration-500">
                Explore Our Services
              </h3>
            </div>
            
            <div className="relative z-10 w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-brand-cyan group-hover:border-brand-cyan transition-all duration-500 text-zinc-400 group-hover:text-black">
              <ArrowRight className="w-6 h-6 transform group-hover:-rotate-45 transition-transform duration-500" />
            </div>
          </motion.div>
        </Link>

        {/* Card 2: Contact */}
        <Link href="/contact" className="block outline-none group">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative h-64 md:h-80 w-full rounded-3xl bg-zinc-950 border border-zinc-800 p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:border-brand-purple/40 group-hover:shadow-[0_0_50px_rgba(138,43,226,0.15)] group-focus-visible:ring-2 group-focus-visible:ring-brand-purple group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-black"
          >
            <div className="absolute inset-0 bg-linear-to-br from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <span className="text-zinc-500 text-sm font-medium tracking-widest uppercase mb-4 block">
                Get Started
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter group-hover:text-brand-purple transition-colors duration-500">
                Contact Us
              </h3>
            </div>
            
            <div className="relative z-10 w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-brand-purple group-hover:border-brand-purple transition-all duration-500 text-zinc-400 group-hover:text-black">
              <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-500" />
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
