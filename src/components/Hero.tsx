"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, Sparkles, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12 md:py-0">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6 md:w-[60%] flex flex-col items-start z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-sm font-mono mb-4">
          <Sparkles size={14} />
          <span>SDET / Automation Test Engineer</span>
        </div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight text-white origin-left cursor-default"
          whileHover={{ scale: 1.05, textShadow: "0px 0px 15px rgba(0,240,255,0.5)" }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          Siddharth <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Malviya</span>
        </motion.h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
          Building scalable, resilient test automation frameworks. 
          Expert in API, Web, and Mobile testing with a track record of cutting execution times by 40% 
          and building high-impact diagnostic tools.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a href="#projects" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors flex items-center gap-2">
            View Projects <Terminal size={18} />
          </a>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 font-medium rounded-lg border border-purple-500/20 transition-colors flex items-center gap-2">
            Resume <Download size={18} />
          </a>
          <a href="#contact" className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg border border-white/10 transition-colors flex items-center gap-2">
            Contact Me <Code2 size={18} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="md:w-[40%] flex justify-center relative z-10"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 group">
          {/* Glowing animated background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          
          <Image
            src="/profile.jpg"
            alt="Siddharth Malviya"
            fill
            className="rounded-full object-cover border-2 border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            priority
          />
        </div>
      </motion.div>

      {/* Decorative tech background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <Cpu size={300} className="text-cyan-500/20" />
        </motion.div>
      </div>
    </section>
  );
}
