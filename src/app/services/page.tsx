"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { QrCode, PhoneMissed, BrainCircuit, CalendarCheck, Star, Database, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// --- Text Animation Variants ---

// H1 and p now manage their own stagger timings.
const h1Variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const pVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.01 } },
};

const charVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
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

// --- Feature Data ---
type FeatureData = {
  id: string;
  title: string;
  works: string;
  helps: string;
  icon: React.ElementType;
  borderColor: string;
  gradientTo: string;
  iconColor: string;
  iconGlow: string;
  radialGradient: string;
  dropShadow: string;
};

const features: FeatureData[] = [
  {
    id: "lead-capture",
    title: "Omnichannel Lead Capture",
    works: "Uses physical QR codes and digital links to route traffic into WhatsApp.",
    helps: "Turns passive foot traffic and social views into active conversations.",
    icon: QrCode,
    borderColor: "hover:border-brand-cyan/40",
    gradientTo: "from-brand-cyan/5",
    iconColor: "text-brand-cyan",
    iconGlow: "group-hover:border-brand-cyan/30",
    radialGradient: "bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15)_0%,transparent_70%)]",
    dropShadow: "drop-shadow-[0_0_50px_rgba(0,255,255,0.5)]",
  },
  {
    id: "missed-call",
    title: "Missed Call Revenue Recovery",
    works: "Detects missed calls and instantly texts the caller back.",
    helps: "Stops revenue leaks by ensuring you never lose a customer to a busy phone line.",
    icon: PhoneMissed,
    borderColor: "hover:border-brand-purple/40",
    gradientTo: "from-brand-purple/5",
    iconColor: "text-brand-purple",
    iconGlow: "group-hover:border-brand-purple/30",
    radialGradient: "bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.15)_0%,transparent_70%)]",
    dropShadow: "drop-shadow-[0_0_50px_rgba(138,43,226,0.5)]",
  },
  {
    id: "concierge",
    title: "24/7 Intelligent Concierge",
    works: "Answers common questions, sends PDF brochures, and gives location details via AI.",
    helps: "Saves you over 20 hours a week of repetitive manual messaging.",
    icon: BrainCircuit,
    borderColor: "hover:border-brand-cyan/40",
    gradientTo: "from-brand-cyan/5",
    iconColor: "text-brand-cyan",
    iconGlow: "group-hover:border-brand-cyan/30",
    radialGradient: "bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15)_0%,transparent_70%)]",
    dropShadow: "drop-shadow-[0_0_50px_rgba(0,255,255,0.5)]",
  },
  {
    id: "booking",
    title: "Conversational Booking Engine",
    works: "Allows customers to pick available times and schedule appointments entirely inside the chat.",
    helps: "Removes friction, increasing your total booked appointments.",
    icon: CalendarCheck,
    borderColor: "hover:border-brand-purple/40",
    gradientTo: "from-brand-purple/5",
    iconColor: "text-brand-purple",
    iconGlow: "group-hover:border-brand-purple/30",
    radialGradient: "bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.15)_0%,transparent_70%)]",
    dropShadow: "drop-shadow-[0_0_50px_rgba(138,43,226,0.5)]",
  },
  {
    id: "reputation",
    title: "Automated Reputation Loop",
    works: "Triggers a message hours after a visit to ask for a 5-star Google rating.",
    helps: "Builds local dominance and social proof on pure autopilot.",
    icon: Star,
    borderColor: "hover:border-brand-cyan/40",
    gradientTo: "from-brand-cyan/5",
    iconColor: "text-brand-cyan",
    iconGlow: "group-hover:border-brand-cyan/30",
    radialGradient: "bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15)_0%,transparent_70%)]",
    dropShadow: "drop-shadow-[0_0_50px_rgba(0,255,255,0.5)]",
  },
  {
    id: "data-bridge",
    title: "Encrypted Data Bridge",
    works: "Routes all captured customer info securely into your private Google Workspace or CRM.",
    helps: "Guarantees you own 100% of your data without us holding your client lists.",
    icon: Database,
    borderColor: "hover:border-brand-purple/40",
    gradientTo: "from-brand-purple/5",
    iconColor: "text-brand-purple",
    iconGlow: "group-hover:border-brand-purple/30",
    radialGradient: "bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.15)_0%,transparent_70%)]",
    dropShadow: "drop-shadow-[0_0_50px_rgba(138,43,226,0.5)]",
  },
];

export default function ServicesPage() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureData | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedFeature) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedFeature]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-cyan/30">
      <Navbar />

      {/* --- HERO HEADER --- */}
      <section className="pt-40 pb-20 px-6 relative w-full overflow-hidden flex flex-col items-center min-h-[70vh] justify-center">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-brand-cyan/5 rounded-[100%] blur-[100px] -z-10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-8 leading-[1.05]"
            variants={h1Variants}
            initial="hidden"
            animate="visible"
          >
            <TextGenerate text="Our " />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan to-brand-purple" style={{ display: "inline-block" }}>
              <TextGenerate text="Solutions" />
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl font-light leading-relaxed tracking-tight"
            variants={pVariants}
            initial="hidden"
            animate="visible"
          >
            <TextGenerate text="Intelligent systems custom-built to eliminate bottlenecks, capture every lead, and drive relentless growth." />
          </motion.p>
        </div>

        {/* Bouncing Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-20 text-brand-cyan/70 flex justify-center w-full"
        >
          <ChevronDown className="w-8 h-8 md:w-10 md:h-10 opacity-70 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]" />
        </motion.div>
      </section>

      {/* --- THE ARSENAL (BENTO BOX GRID) --- */}
      <section className="py-24 px-6 relative w-full z-10" id="arsenal">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">The Arsenal</h2>
            <p className="text-zinc-400 text-lg">Every tool you need to architect an autonomous pipeline.</p>
          </motion.div>

          {/* 3x2 Grid for 6 Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.id}
                layoutId={`card-${feature.id}`}
                onClick={() => setSelectedFeature(feature)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`cursor-pointer group relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 ${feature.borderColor} transition-colors duration-500 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-linear-to-br ${feature.gradientTo} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-black border border-zinc-800 flex items-center justify-center mb-6 ${feature.iconGlow} transition-colors`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <motion.h3 layoutId={`title-${feature.id}`} className="text-2xl font-semibold mb-3 tracking-tight">{feature.title}</motion.h3>
                  <p className="text-zinc-400 leading-relaxed font-light text-sm line-clamp-2">
                    {feature.works}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPANDING MODAL OVERLAY --- */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8 backdrop-blur-md bg-black/80"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              layoutId={`card-${selectedFeature.id}`}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 rounded-full bg-black/50 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column (Logic) */}
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-zinc-900">
                <motion.h3 layoutId={`title-${selectedFeature.id}`} className="text-3xl md:text-4xl font-semibold mb-10 text-white tracking-tight leading-tight">
                  {selectedFeature.title}
                </motion.h3>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4 }}
                  className="mb-8"
                >
                  <h4 className="text-brand-cyan text-sm uppercase tracking-widest font-semibold mb-3">How it Works</h4>
                  <p className="text-zinc-400 text-lg font-light leading-relaxed">{selectedFeature.works}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <h4 className="text-brand-purple text-sm uppercase tracking-widest font-semibold mb-3">How it Helps Your Business</h4>
                  <p className="text-zinc-300 text-lg font-light leading-relaxed">{selectedFeature.helps}</p>
                </motion.div>
              </div>

              {/* Right Column (Graphic) */}
              <div className="w-full md:w-1/2 relative bg-black/50 border-t md:border-t-0 md:border-l border-zinc-800 p-12 md:p-20 flex items-center justify-center min-h-[300px]">
                <div className={`absolute inset-0 ${selectedFeature.radialGradient} pointer-events-none`} />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, duration: 0.6, type: "spring", bounce: 0.4 }}
                >
                  <selectedFeature.icon className={`w-32 h-32 md:w-48 md:h-48 ${selectedFeature.iconColor} ${selectedFeature.dropShadow}`} />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HOW WE PARTNER (3-TIER PRICING) --- */}
      <section className="py-24 px-6 relative w-full border-t border-white/5 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">How We Partner</h2>
            <p className="text-zinc-400 text-lg">A structured approach to transforming your operations.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Tier 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50"
            >
              <div className="text-zinc-500 text-sm font-semibold tracking-wider uppercase mb-2">Phase 1</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Strategic Discovery</h3>
              <div className="text-4xl font-light text-brand-cyan mb-6">Free</div>
              <p className="text-zinc-400 font-light leading-relaxed mb-8 grow">
                We map out your exact business bottlenecks, FAQs, and appointment rules.
              </p>
            </motion.div>

            {/* Tier 2 (Highlighted) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col p-8 rounded-3xl bg-zinc-900 border border-brand-purple/50 relative overflow-hidden transform md:-translate-y-4 shadow-[0_0_40px_rgba(138,43,226,0.1)]"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-brand-cyan to-brand-purple" />
              <div className="text-brand-purple text-sm font-semibold tracking-wider uppercase mb-2">Phase 2</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Custom Deployment</h3>
              <div className="text-4xl font-light text-white mb-6">One-Time Setup</div>
              <p className="text-zinc-300 font-light leading-relaxed mb-8 grow">
                We build, connect, and rigorously test the entire AI infrastructure securely linked to your databases.
              </p>
            </motion.div>

            {/* Tier 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50"
            >
              <div className="text-zinc-500 text-sm font-semibold tracking-wider uppercase mb-2">Phase 3</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Autonomous Growth</h3>
              <div className="text-4xl font-light text-brand-cyan mb-6">Monthly Retainer</div>
              <p className="text-zinc-400 font-light leading-relaxed mb-8 grow">
                24/7 system monitoring, monthly performance reports, and silent backend updates.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Link href="/contact">
              <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 focus:ring-offset-black group transition-all duration-300 transform hover:scale-105">
                <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#8A2BE2_50%,#00FFFF_100%)] animate-[spin_4s_linear_infinite] group-hover:bg-linear-to-r group-hover:from-brand-cyan group-hover:to-brand-purple transition-all duration-500" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-950 px-8 py-1 text-sm md:text-base font-medium text-white backdrop-blur-3xl group-hover:bg-transparent transition-all duration-300">
                  Connect With Us
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
