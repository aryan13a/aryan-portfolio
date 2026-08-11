"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../data/data";
import { X, ExternalLink, TrendingUp, CheckCircle, Database, Calendar } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative w-full max-w-3xl glass-panel bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-8 text-left max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Metadata */}
          <div className="space-y-2 pr-10">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{project.period}</span>
              <span>•</span>
              <span className="text-slate-400">{project.role}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-sm text-slate-300">
              {project.summary}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 my-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Standout Stats Grid inside Modal */}
          <div className="my-6 space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400">
              Key Metrics &amp; Standout Indicators
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-800/90 border border-cyan-500/20 text-left"
                >
                  <p className="font-mono text-xl sm:text-2xl font-extrabold text-cyan-400">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold text-slate-200 mt-1">
                    {stat.label}
                  </p>
                  {stat.subtext && (
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {stat.subtext}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Paragraphs */}
          <div className="space-y-4 my-6 text-sm text-slate-300 leading-relaxed">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Project Architecture &amp; Execution
            </h4>
            {project.fullDescription.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Key Insights Bulleted */}
          <div className="space-y-3 my-6 p-4 rounded-xl bg-slate-850 border border-slate-800">
            <h4 className="text-xs font-bold text-cyan-400 font-mono uppercase tracking-wider flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Actionable Analytical Insights</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.insights.map((insight, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Links Footer */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
            {project.tableauUrl && (
              <a
                href={project.tableauUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs shadow-md hover:from-cyan-400 hover:to-blue-500 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Tableau Dashboard</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs hover:bg-slate-700 transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>Source Repository</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
