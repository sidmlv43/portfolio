"use client";

import { motion } from "framer-motion";
import { GitBranch, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="space-y-12 pt-12 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-6 max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white">Let's Connect</h2>
        <p className="text-slate-400">
          Currently based in Noida, India. Always open to discussing test automation architecture, scalable frameworks, and new SDET opportunities.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <a
            href="mailto:sidmlv43@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all hover:scale-105"
          >
            <Mail size={18} className="text-cyan-400" />
            <span className="text-slate-200">sidmlv43@gmail.com</span>
          </a>
          
          <a
            href="https://github.com/sidmlv43"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all hover:scale-105"
          >
            <GitBranch size={18} className="text-purple-400" />
            <span className="text-slate-200">GitHub</span>
          </a>
          
          <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl opacity-70">
            <MapPin size={18} className="text-green-400" />
            <span className="text-slate-200">Noida, India</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
