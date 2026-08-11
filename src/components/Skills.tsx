"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/data";
import {
  Code,
  PieChart,
  Layers,
  Wrench,
  Sparkles,
  CheckCircle2,
  Terminal
} from "lucide-react";

export function Skills() {
  const { skillsCategories } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillsCategories.map((c) => c.category)];

  const categoryIcons: Record<string, React.ReactNode> = {
    Languages: <Code className="w-4 h-4" />,
    "BI & Visualization": <PieChart className="w-4 h-4" />,
    "Libraries & Data Wrangling": <Layers className="w-4 h-4" />,
    "Tools & Environment": <Wrench className="w-4 h-4" />,
    "AI & Cloud Technologies": <Sparkles className="w-4 h-4" />
  };

  const filteredCategories =
    activeCategory === "All"
      ? skillsCategories
      : skillsCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-medium"
          >
            <span>02 // TECHNICAL SKILLS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Technical Stack &amp; Tooling
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            A comprehensive overview of programming languages, analytics libraries, visual BI platforms, and modern GenAI integrations.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 font-semibold scale-105"
                    : "bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700"
                }`}
              >
                {categoryIcons[cat]}
                <span>{cat}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <AnimatePresence mode="wait">
            {filteredCategories.map((catGroup) => (
              <motion.div
                key={catGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-200 dark:border-slate-800">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                      {categoryIcons[catGroup.category] || <Terminal className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {catGroup.category}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {catGroup.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {catGroup.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                            {skill.name}
                          </span>
                          {skill.highlight && (
                            <span className="font-mono text-[11px] text-cyan-600 dark:text-cyan-400 font-medium">
                              {skill.highlight}
                            </span>
                          )}
                        </div>

                        {/* Animated Progress Bar */}
                        <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
