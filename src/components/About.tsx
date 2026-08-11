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
  FileCheck2,
  Terminal,
  CheckCircle2
} from "lucide-react";

export function About() {
  const { personal } = PORTFOLIO_DATA;

  const pillars = [
    {
      title: "Quantitative Foundation",
      description: "Rooted in Physics, Mathematics & Economics from St. Xavier's College Jaipur. Strong mathematical intuition for statistical distributions and econometric modeling.",
      icon: GraduationCap,
      color: "text-cyan-400"
    },
    {
      title: "Pipeline Engineering",
      description: "Proficient in converting unstructured operational logs into structured SQL tables and Pandas dataframes, executing clean ETL transformations.",
      icon: BarChart3,
      color: "text-emerald-400"
    },
    {
      title: "Executive Storytelling",
      description: "Translates complex multi-variable analysis into crisp executive KPI cards, action-driven Tableau dashboards, and decision recommendations.",
      icon: Award,
      color: "text-amber-400"
    },
    {
      title: "AI-Augmented Analytics",
      description: "Leverages Anthropic Claude AI, Prompt Engineering, Gemini API, and Vertex AI to accelerate exploratory analysis and code optimization.",
      icon: Cpu,
      color: "text-indigo-400"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      
      {/* Section Axis Divider */}
      <div className="axis-divider max-w-7xl mx-auto px-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono font-medium"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // QUANTITATIVE_BACKGROUND</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tighter"
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
            From mathematical modeling to executive BI dashboards — turning raw operational data into actionable decisions.
          </motion.p>
        </div>

        {/* Linear Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
          
          {/* Main Bio Feature Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 linear-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Analytical Mindset &amp; Background
                </h3>
              </div>

              {personal.aboutExpanded.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Credential Badges Footer */}
            <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                <FileCheck2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-200">Google Certified</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Data Analytics Professional</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-200">BSc Degree</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Physics, Math &amp; Economics</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4 Pillars Grid (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="linear-card linear-card-hover p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-4 group"
                >
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className={`w-5 h-5 ${pillar.color}`} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
