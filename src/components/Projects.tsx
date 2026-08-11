"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA, Project } from "../data/data";
import { ProjectModal } from "./ProjectModal";
import { ExternalLink, ArrowUpRight, BarChart2, Eye, Sparkles, TrendingUp, Terminal, Activity } from "lucide-react";

export function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      
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
            <span>03 // END_TO_END_ANALYTICS_PROJECTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tighter"
          >
            Data Pipelines &amp; Executive Dashboards
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Real-world retail performance, customer retention, and commercial banking cohort segmentation.
          </motion.p>
        </div>

        {/* Staggered Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`linear-card linear-card-hover rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden ${
                idx % 2 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              {/* Card Header Badge */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-mono font-semibold border border-slate-200 dark:border-slate-800">
                  {project.period}
                </span>

                <span className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                  <Sparkles className="w-3 h-3" />
                  Featured Project
                </span>
              </div>

              {/* Title & Summary */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 my-5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-mono border border-slate-200 dark:border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* PROMINENT STANDOUT STAT CALLOUTS PANEL */}
              <div className="my-4 p-4 rounded-2xl bg-[#090c15] text-white space-y-2 border border-slate-800">
                <div className="flex items-center justify-between text-[10px] uppercase font-mono tracking-wider text-cyan-400 font-bold">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Executive KPI Callouts</span>
                  </span>
                  <span className="text-slate-500">Live Proof Points</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  {project.stats.map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between"
                    >
                      <p className="font-mono text-lg sm:text-xl font-extrabold text-cyan-400">
                        {stat.value}
                      </p>
                      <p className="text-[11px] font-semibold text-slate-200 mt-1 line-clamp-1">
                        {stat.label}
                      </p>
                      {stat.subtext && (
                        <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                          {stat.subtext}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800/80 mt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Case Study &amp; Insights</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                {project.tableauUrl && (
                  <a
                    href={project.tableauUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition-colors text-xs font-mono font-medium flex items-center gap-1"
                    title="Open Tableau Dashboard"
                  >
                    <span>Tableau</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
