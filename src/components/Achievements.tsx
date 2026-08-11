"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/data";
import { Trophy, Users, Presentation, Lightbulb, Star } from "lucide-react";

export function Achievements() {
  const { achievements } = PORTFOLIO_DATA;

  const iconsMap: Record<string, React.ReactNode> = {
    "research-paper": <Presentation className="w-5 h-5 text-cyan-500" />,
    "leadership-medal": <Trophy className="w-5 h-5 text-amber-500" />,
    "science-fest": <Users className="w-5 h-5 text-blue-500" />,
    entrepreneurship: <Lightbulb className="w-5 h-5 text-emerald-500" />
  };

  return (
    <section id="achievements" className="py-20 relative">
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
            <span>07 // HONORS &amp; LEADERSHIP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Achievements &amp; Leadership Initiatives
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            National symposium paper presentations, campus leadership medals, and event coordination.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all shadow-md group relative flex flex-col justify-between"
            >
              <div>
                {/* Header Tag & Icon */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:scale-110 transition-transform">
                    {iconsMap[item.id] || <Star className="w-5 h-5 text-cyan-500" />}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold">
                    {item.tag}
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 mt-1 mb-3">
                  {item.organization}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
