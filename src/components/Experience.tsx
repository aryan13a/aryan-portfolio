"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/data";
import { Briefcase, Calendar, MapPin, ChevronRight, Terminal } from "lucide-react";

export function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 relative">
      
      {/* Section Axis Divider */}
      <div className="axis-divider max-w-7xl mx-auto px-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono font-medium"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // CAREER_TIMELINE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tighter"
          >
            Work &amp; Industry Simulations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Deloitte Australia analytics simulation combined with technical recruitment engineering internships.
          </motion.p>
        </div>

        {/* Vertical Timeline Thread */}
        <div className="relative max-w-4xl mx-auto text-left">
          
          {/* Central Vertical Connecting Thread Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experience.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#07090e] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/30 z-10 hidden sm:flex">
                    <Briefcase className="w-4 h-4" />
                  </div>

                  {/* Experience Card */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)]">
                    <div className="linear-card linear-card-hover p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md group">
                      
                      {/* Period Badge & Type */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>

                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          {item.type}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                        <span>{item.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5">
                          <MapPin className="w-3 h-3 text-cyan-500" />
                          {item.location}
                        </span>
                      </p>

                      {/* Description Bullet points */}
                      <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {item.description.map((desc, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-200 dark:border-slate-800">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200 dark:border-slate-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
