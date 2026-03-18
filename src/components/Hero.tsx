"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.045, delayChildren: 0.1 },
  },
};

const charVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

function TextGenerate({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={charVariants} className={className} style={{ display: "inline-block", whiteSpace: "pre" }}>
          {char}
        </motion.span>
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-brand-cyan/10 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-75"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-brand-purple/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-48 w-48 md:h-56 md:w-56 mb-8 group"
        >
          <div className="absolute -inset-4 bg-linear-to-r from-brand-cyan to-brand-purple rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-pulse"></div>
          <Image src="/logo.png" alt="Auto X Flow Logo" fill priority className="object-contain relative z-10 mix-blend-screen" />
        </motion.div>

        {/* Character-stagger headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight mb-6 leading-[1.1]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <TextGenerate text="Scale Your " />
          <br className="block md:hidden" />
          <TextGenerate text="Business " />
          <br className="block md:hidden" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan to-brand-purple" style={{ display: "inline-block" }}>
            <TextGenerate text="on Autopilot." />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-lg md:text-xl text-zinc-400 max-w-3xl mb-12 tracking-tight font-light leading-relaxed"
        >
          We build autonomous AI systems that capture leads, answer FAQs 24/7,
          and book appointments—so you can focus on scaling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <Link href="/contact">
            <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:ring-offset-2 focus:ring-offset-black group transition-all duration-300 transform hover:scale-105">
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#00FFFF_50%,#8A2BE2_100%)] group-hover:bg-linear-to-r group-hover:from-brand-cyan group-hover:to-brand-purple transition-all duration-500" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-950 px-8 py-1 text-sm md:text-base font-semibold text-white backdrop-blur-3xl group-hover:bg-transparent group-hover:text-black transition-all duration-300">
                Claim Your Free Strategy Call
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
