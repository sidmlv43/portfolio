"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Automation Test Engineer",
    company: "Test Yantra Software Solutions Pvt. Ltd.",
    date: "05/2025 - Present",
    location: "Noida, India",
    description: "Automating test suites, building diagnostic SDKs, and optimizing CI/CD pipelines for high-traffic enterprise applications.",
    clients: ["Sprinklr (Care-Reporting)", "Zupee (Finance Module)"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        <div className="p-3 bg-blue-500/10 rounded-lg">
          <Briefcase className="text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">Experience</h2>
      </motion.div>

      <div className="relative border-l border-white/10 ml-6 space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative pl-8"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-black" />
            
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                  <p className="text-slate-400 font-medium">{exp.company}</p>
                </div>
                <div className="text-sm font-mono text-cyan-500/80 bg-cyan-500/10 px-3 py-1 rounded-full w-fit">
                  {exp.date}
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-4">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.clients.map((client, i) => (
                  <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/10">
                    Client: {client}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
