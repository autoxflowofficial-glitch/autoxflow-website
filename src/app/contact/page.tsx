"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MessageCircle, Instagram, Facebook } from "lucide-react";
import Navbar from "@/components/Navbar";

// --- Text Animation Variants ---
const h1Variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

const charVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

function TextGenerate({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={charVariants}
          className={className}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-cyan/30">
      <Navbar />

      {/* ============================================================ */}
      {/* TIER 1 — HERO: DIRECT CONTACT                                */}
      {/* ============================================================ */}
      <section className="pt-40 pb-24 px-6 relative w-full flex flex-col items-center">
        {/* Background ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] bg-brand-cyan/5 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />

        {/* --- Headline --- */}
        <div className="text-center mb-16 max-w-3xl w-full">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-4"
            variants={h1Variants}
            initial="hidden"
            animate="visible"
          >
            <TextGenerate text="Ready to Automate" />
            <br />
            <TextGenerate text="Your Growth?" />
          </motion.h1>

          {/* Gradient subheadline — separate animation block */}
          <motion.p
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8"
            variants={h1Variants}
            initial="hidden"
            animate="visible"
          >
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan to-brand-purple" style={{ display: "inline-block" }}>
              <TextGenerate text="Claim Your Free Audit." />
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
            className="text-base md:text-lg text-zinc-300 font-light tracking-tight"
          >
            Reach out directly. We guarantee a priority response within{" "}
            <span className="text-white font-medium">15 minutes</span>.
          </motion.p>
        </div>

        {/* --- Contact Cards --- */}
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/7602488057"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col p-8 md:p-12 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-brand-cyan/50 transition-all duration-300 overflow-hidden cursor-pointer hover:shadow-[0_0_35px_rgba(0,255,255,0.1)]"
          >
            <div className="absolute inset-0 bg-linear-to-br from-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center group-hover:border-brand-cyan/30 transition-colors">
                <MessageCircle className="w-7 h-7 text-brand-cyan" />
              </div>
              <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan/10 transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-brand-cyan transition-colors">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white transition-colors">Chat on WhatsApp</h3>
              <p className="text-xl text-zinc-400 font-light tracking-tight group-hover:text-zinc-300 transition-colors">+91 76024 88057</p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=autoxflow.official@gmail.com&su=I'm%20ready%20to%20scale%20my%20business%20with%20AI"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col p-8 md:p-12 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-brand-purple/50 transition-all duration-300 overflow-hidden cursor-pointer hover:shadow-[0_0_35px_rgba(138,43,226,0.1)]"
          >
            <div className="absolute inset-0 bg-linear-to-bl from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center group-hover:border-brand-purple/30 transition-colors">
                <Mail className="w-7 h-7 text-brand-purple" />
              </div>
              <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-brand-purple/50 group-hover:bg-brand-purple/10 transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-brand-purple transition-colors">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white transition-colors">Send an Email</h3>
              <p className="text-xl text-zinc-400 font-light tracking-tight group-hover:text-zinc-300 transition-colors">autoxflow.official@gmail.com</p>
            </div>
          </motion.a>
        </div>

        {/* --- Socials Row --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-20 pt-10 border-t border-zinc-800/50 w-full max-w-4xl mx-auto flex flex-col items-center gap-8"
        >
          <span className="text-xs text-zinc-500 font-semibold tracking-widest uppercase">
            Connect on Socials
          </span>
          <div className="flex items-center gap-5">
            {[
            {
              href: "https://www.instagram.com/auto_x_flow/?hl=en",
              Icon: Instagram,
              glow: "hover:shadow-[0_0_18px_rgba(0,255,255,0.2)] hover:border-brand-cyan/40",
            },
            {
              href: "https://www.facebook.com/share/1BJqvRYfXC/",
              Icon: Facebook,
              glow: "hover:shadow-[0_0_18px_rgba(138,43,226,0.2)] hover:border-brand-purple/40",
            },
            ].map(({ href, Icon, glow }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/60 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 ${glow}`}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* TIER 2 — SCROLL-TRIGGERED: B2B INQUIRY FORM                  */}
      {/* ============================================================ */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-24 px-6 border-t border-zinc-800/50 bg-zinc-950/60"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight mb-10 text-center">
            Or Drop Your Details Below
          </h2>

          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 md:p-12">
            <form
              className="flex flex-col gap-6"
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="hidden" name="form-name" value="contact" />
              {/* Row 1: Name + Business */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-zinc-400 font-medium tracking-tight">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Smith"
                    className="bg-black border border-zinc-800 text-white rounded-lg p-4 w-full focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-zinc-600 text-sm md:text-base"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-zinc-400 font-medium tracking-tight">Business Name</label>
                  <input
                    type="text"
                    name="businessName"
                    placeholder="Acme Corp"
                    className="bg-black border border-zinc-800 text-white rounded-lg p-4 w-full focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-zinc-600 text-sm md:text-base"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-zinc-400 font-medium tracking-tight">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@yourbusiness.com"
                  className="bg-black border border-zinc-800 text-white rounded-lg p-4 w-full focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-zinc-600 text-sm md:text-base"
                />
              </div>

              {/* Textarea */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-zinc-400 font-medium tracking-tight">Tell us about your current bottlenecks...</label>
                <textarea
                  rows={5}
                  name="bottlenecks"
                  placeholder="e.g. we lose a lot of leads after hours, we need to automate appointment booking, etc."
                  className="bg-black border border-zinc-800 text-white rounded-lg p-4 w-full focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-zinc-600 resize-none text-sm md:text-base"
                />
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="relative inline-flex w-full h-14 overflow-hidden rounded-xl p-[2px] group transition-all duration-300"
              >
                <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#8A2BE2_50%,#00FFFF_100%)] animate-[spin_4s_linear_infinite]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-zinc-950 px-8 font-semibold text-white backdrop-blur-3xl group-hover:bg-transparent transition-all duration-300 tracking-tight">
                  Request System Audit
                </span>
              </motion.button>
            </form>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
