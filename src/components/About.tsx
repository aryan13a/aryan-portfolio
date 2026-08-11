"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/data";
import {
  GraduationCap,
  Award,
  BarChart3,
  Cpu,
  Brain,
  CheckCircle,
  FileCheck2
} from "lucide-react";

export function About() {
  const { personal } = PORTFOLIO_DATA;

  const pillars = [
    {
      title: "Quantitative Foundation",
      description: "Rooted in Physics, Mathematics & Economics from St. Xavier's College Jaipur. Strong mathematical intuition for statistical distributions, hypothesis testing, and econometric modeling.",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "End-to-End Pipeline Engineering",
      description: "Proficient in converting unstructured operational logs into structured SQL tables and Pandas dataframes, executing clean ETL transformations, and modeling scalable data schemas.",
      icon: BarChart3,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Executive Storytelling",
      description: "Translates complex multi-variable analysis into crisp executive KPI cards, action-driven Tableau dashboards, and high-impact business decision recommendations.",
      icon: Award,
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "AI-Augmented Analytics",
      description: "Leverages Anthropic Claude AI, Prompt Engineering, Gemini API, and Vertex AI to accelerate exploratory analysis, code optimization, and data synthesis.",
      icon: Cpu,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-medium"
          >
            <span>01 // ABOUT ME</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Bridging Quantitative Rigor &amp; Business Strategy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            From mathematical modeling to executive BI dashboards — how I help organizations make confident, data-backed moves.
          </motion.p>
        </div>

        {/* About Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Bio Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-5 text-left"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Brain className="w-5 h-5 text-cyan-500" />
                <span>Analytical Mindset &amp; Background</span>
              </h3>

              {personal.aboutExpanded.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Key Credentials Badges */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <FileCheck2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <div className="text-left">
                    <p className="text-xs font-semibold text-slate-900 dark:text-slate-200">Google Certified</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Data Analytics Professional</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <GraduationCap className="w-4 h-4 text-blue-500 shrink-0" />
                  <div className="text-left">
                    <p className="text-xs font-semibold text-slate-900 dark:text-slate-200">BSc Degree</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Physics, Math &amp; Economics</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pillars Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-left hover:border-cyan-500/50 transition-all hover:scale-[1.02] group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
