"use client";

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

export default function BleedingCash() {
  return (
    <section className="py-24 px-6 relative w-full bg-black z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">

        {/* Character-stagger headline, scroll-triggered */}
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-8 leading-[1.05]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <TextGenerate text="Stop Bleeding " />
          <br className="block md:hidden" />
          <TextGenerate text="Cash" />
          <br className="hidden md:block" />
          <TextGenerate text="on " className="text-zinc-600" />
          <br className="block md:hidden" />
          <TextGenerate text="Missed " className="text-zinc-600" />
          <br className="block md:hidden" />
          <TextGenerate text="Connections." className="text-zinc-600" />
        </motion.h2>

        {/* Paragraph — simple opacity fade after headline settles */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-zinc-400 max-w-3xl font-light leading-relaxed tracking-tight"
        >
          In today&apos;s fast-paced digital era, a missed call or a delayed
          WhatsApp reply is a{" "}
          <span className="text-zinc-200 font-medium">permanently lost customer</span>.{" "}
          We eliminate human bottlenecks by building custom machines that handle
          your traffic instantly.
        </motion.p>
      </div>
    </section>
  );
}
