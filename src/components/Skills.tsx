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
  Terminal,
  Activity
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
      
      {/* Section Axis Divider */}
      <div className="axis-divider max-w-7xl mx-auto px-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono font-medium"
          >
            <Activity className="w-3.5 h-3.5" />
            <span>02 // TECH_MATRIX &amp; TOOLING</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tighter"
          >
            Technical Stack &amp; Tooling Matrix
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Programming languages, analytics libraries, BI platforms, and Next-Gen AI integrations.
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
                className={`relative px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  isActive
                    ? "text-slate-900 dark:text-white font-bold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillCategoryTab"
                    className="absolute inset-0 bg-cyan-500/20 border border-cyan-500/40 rounded-xl"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {categoryIcons[cat]}
                  <span>{cat}</span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Terminal Style Data Table Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <AnimatePresence mode="wait">
            {filteredCategories.map((catGroup) => (
              <motion.div
                key={catGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="linear-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-200 dark:border-slate-800/80">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
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

                  {/* Skills Table List */}
                  <div className="space-y-4">
                    {catGroup.skills.map((skill, sIdx) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                            {skill.name}
                          </span>
                          {skill.highlight && (
                            <span className="font-mono text-[11px] text-cyan-600 dark:text-cyan-400 font-medium">
                              {skill.highlight}
                            </span>
                          )}
                        </div>

                        {/* Progress Indicator */}
                        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: sIdx * 0.1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full"
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
