"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/data";
import { GraduationCap, MapPin, Calendar, BookOpen, Award, CheckCircle2 } from "lucide-react";

export function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-medium"
          >
            <span>05 // ACADEMIC BACKGROUND</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Education &amp; Quantitative Foundations
          </motion.h2>
        </div>

        {/* Education Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-left"
        >
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
            
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Institution & Degree */}
              <div className="lg:col-span-6 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold mb-2">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-semibold mb-2">
                    {education.period}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <p className="text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                    {education.field}
                  </p>
                </div>

                <div className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    {education.institution}
                  </p>
                  <p className="flex items-center gap-1 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                    {education.location}
                  </p>
                </div>
              </div>

              {/* Right Column: Key Coursework & Academic Highlights */}
              <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-slate-200 dark:lg:border-slate-800 lg:pl-8">
                
                {/* Coursework Tags */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-bold">
                    <BookOpen className="w-4 h-4 text-cyan-500" />
                    <span>Specialized Quantitative Coursework</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {education.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-mono font-medium border border-slate-200 dark:border-slate-800"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights Bullet points */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-bold">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Academic &amp; Campus Distinction</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {education.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
