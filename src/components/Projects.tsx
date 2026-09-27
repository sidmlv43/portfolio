"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Server, Smartphone, X } from "lucide-react";

const projects = [
  {
    title: "Care-Reporting Module",
    client: "Sprinklr",
    icon: <Server className="text-cyan-400" />,
    shortDesc: "Automated 250+ E2E test cases across 11+ dashboard widget types.",
    metrics: "Cut test execution time by 40% (10m → 6m)",
    tags: ["Selenium", "Java", "TestNG", "Agile"],
    details: [
      "Automated 250+ end-to-end test cases across 11+ dashboard widget types (Table, Pivot, Charts, Copilot) for functional and regression coverage in an Agile/Scrum workflow.",
      "Cut test execution time 40% (10+ minutes to under 6 minutes) by eliminating redundant waits and building a DashboardPool utility.",
      "Built reusable POM-based utility libraries for chart, table, and graph interactions, reducing new test onboarding time."
    ]
  },
  {
    title: "Care-Reporting Diagnostic SDK",
    client: "Sprinklr",
    icon: <Code className="text-purple-400" />,
    shortDesc: "Developed a diagnostic SDK that logs session metadata to detect timing discrepancies.",
    metrics: "Adopted by multiple automation teams",
    tags: ["Java", "SDK Dev", "Maven"],
    details: [
      "Developed a diagnostic SDK that logs session metadata (timestamps, session/partner IDs) to detect hard-to-reproduce agent login/logout timing discrepancies, reducing mean time to detect (MTTD) for intermittent defects.",
      "Adopted as a Maven dependency by other automation teams at Sprinklr, extending its use beyond the original Care-Reporting scope.",
      "Extended the SDK for modular, minimal-config integration across multiple automation frameworks."
    ]
  },
  {
    title: "Finance Module & KYC Automation",
    client: "Zupee",
    icon: <Smartphone className="text-green-400" />,
    shortDesc: "Automated 40+ RestAssured APIs and a 4-stage Android KYC workflow using Appium.",
    metrics: "Migrated 70+ legacy cases to modern internal tools",
    tags: ["Appium", "RestAssured", "Cucumber", "WireMock"],
    details: [
      "Automated 40+ RestAssured/Postman test cases across wallet, balance, and payment APIs; migrated 70+ legacy cases to internal tools (Trace, Essence), cutting maintenance overhead.",
      "Automated a 4-stage Android KYC workflow (onboarding, document upload, ID verification, status tracking) using Appium.",
      "Built BDD scenarios (Cucumber + TestNG) with WireMock service virtualization for 2 third-party APIs (payment and KYC)."
    ]
  },
  {
    title: "Restful Reads API Framework",
    client: "Personal Project",
    icon: <Server className="text-orange-400" />,
    shortDesc: "Designed a RestAssured/TestNG framework from scratch with parallel execution.",
    metrics: "Dockerized the full environment",
    tags: ["RestAssured", "Docker", "Node.js", "MongoDB"],
    details: [
      "Designed a RestAssured/TestNG/Cucumber framework from scratch for a Node.js/Express/MongoDB API with centralized endpoint management and environment-based configuration.",
      "Built a custom UseUser annotation with a listener-based design pattern (IInvokedMethodListener) for declarative, role-based test authentication.",
      "Engineered thread-safe parallel execution using ThreadLocal session isolation and a ConcurrentHashMap token cache per role.",
      "Containerized the full test environment with Docker Compose for one-command, reproducible setup."
    ]
  }
];

export default function Projects() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="space-y-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        <div className="p-3 bg-purple-500/10 rounded-lg">
          <Code className="text-purple-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            layoutId={`card-${idx}`}
            onClick={() => setSelectedIdx(idx)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.3 }}
            className="group relative bg-white/[0.02] border border-white/5 p-6 rounded-2xl overflow-hidden cursor-pointer"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none" />
            
            <motion.div layoutId={`icon-${idx}`} className="flex items-start justify-between mb-4 relative z-10">
              <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                {project.icon}
              </div>
              <span className="text-xs font-medium text-slate-500">{project.client}</span>
            </motion.div>
            
            <motion.h3 layoutId={`title-${idx}`} className="text-xl font-bold text-white mb-2 relative z-10 group-hover:text-cyan-300 transition-colors">
              {project.title}
            </motion.h3>
            
            <motion.p layoutId={`desc-${idx}`} className="text-slate-400 text-sm mb-4 relative z-10">
              {project.shortDesc}
            </motion.p>
            
            <motion.div layoutId={`metrics-${idx}`} className="p-3 bg-cyan-950/20 border border-cyan-900/30 rounded-lg mb-6 relative z-10">
              <p className="text-cyan-200/80 text-xs font-mono leading-relaxed">
                <span className="text-cyan-400 font-bold mr-2">Impact:</span> 
                {project.metrics}
              </p>
            </motion.div>

            <motion.div layoutId={`tags-${idx}`} className="flex flex-wrap gap-2 relative z-10">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIdx(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            
            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedIdx}`}
                className="bg-[#0a0a0f] border border-white/10 p-8 rounded-3xl max-w-2xl w-full relative overflow-y-auto max-h-[85vh] pointer-events-auto"
              >
                <button 
                  onClick={() => setSelectedIdx(null)}
                  className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} className="text-slate-400" />
                </button>

                <motion.div layoutId={`icon-${selectedIdx}`} className="mb-6 flex items-center gap-4">
                  <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                    {projects[selectedIdx].icon}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">{projects[selectedIdx].client}</span>
                  </div>
                </motion.div>

                <motion.h3 layoutId={`title-${selectedIdx}`} className="text-3xl font-bold text-white mb-6">
                  {projects[selectedIdx].title}
                </motion.h3>

                <div className="space-y-4 mb-8">
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Key Achievements</h4>
                  <ul className="space-y-4">
                    {projects[selectedIdx].details.map((detail, i) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        key={i} 
                        className="flex items-start gap-3 text-slate-300 leading-relaxed"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div layoutId={`metrics-${selectedIdx}`} className="p-4 bg-cyan-950/20 border border-cyan-900/30 rounded-xl mb-8">
                  <p className="text-cyan-200 text-sm font-mono leading-relaxed flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">Impact:</span> 
                    {projects[selectedIdx].metrics}
                  </p>
                </motion.div>

                <motion.div layoutId={`tags-${selectedIdx}`} className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {projects[selectedIdx].tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </motion.div>

              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
