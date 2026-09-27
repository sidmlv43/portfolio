"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Java", "Selenium WebDriver", "Rest Assured", "Appium", "Cucumber (BDD)", "TestNG", "JUnit", "WireMock"]
  },
  {
    title: "API & Testing Tools",
    skills: ["Postman", "Rest Assured", "Trace (UI)", "Essence (API)"]
  },
  {
    title: "Build, CI/CD & Methodologies",
    skills: ["Maven", "Jenkins", "Git", "GitHub", "Docker", "Agile", "Scrum", "TDD / BDD", "Black Box"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        <div className="p-3 bg-green-500/10 rounded-lg">
          <Cpu className="text-green-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-slate-300 border-b border-white/10 pb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-white/5 rounded-lg text-sm text-slate-300 transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
