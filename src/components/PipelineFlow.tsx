"use client";

import { motion } from "framer-motion";
import { Smartphone, Bot, Database } from "lucide-react";

export default function PipelineFlow() {
  const steps = [
    {
      id: "capture",
      title: "1. Capture",
      icon: Smartphone,
      description: "Route traffic via Social Ads & physical QR Codes directly into your WhatsApp.",
    },
    {
      id: "automate",
      title: "2. Automate",
      icon: Bot,
      description: "Our 24/7 AI chatbot instantly answers FAQs and replies to missed calls.",
    },
    {
      id: "scale",
      title: "3. Scale",
      icon: Database,
      description: "Appointments and leads are instantly routed to your own secure database.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 relative w-full bg-zinc-950 z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between relative gap-12 md:gap-0">
          
          {/* Desktop Dotted Connecting Line */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-zinc-800 z-0"></div>
          
          {/* Mobile Dotted Connecting Line */}
          <div className="md:hidden absolute top-12 bottom-12 left-[44px] w-[2px] border-l-2 border-dashed border-zinc-800 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="relative z-10 flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-8 w-full md:w-1/3 group"
            >
              {/* Icon Container */}
              <div className="shrink-0 w-24 h-24 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:border-brand-cyan/50 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                <div className="absolute inset-0 bg-linear-to-br from-brand-cyan/10 to-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <step.icon className="w-10 h-10 text-zinc-400 group-hover:text-brand-cyan transition-colors duration-300 relative z-10" />
              </div>

              {/* Content */}
              <div className="flex flex-col text-left md:text-center mt-2 md:mt-0 px-2">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
