"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/data";
import { X, Download, Printer, FileText, CheckCircle2, Award, Briefcase, GraduationCap } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const { personal, experience, education, certifications, skillsCategories, projects } = PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

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
          className="relative w-full max-w-4xl glass-panel bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-8 text-left max-h-[92vh] overflow-y-auto"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              <h2 className="text-lg font-bold text-white font-mono">
                {personal.name} — Curriculum Vitae
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-medium transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-cyan-400" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Document Content Area */}
          <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 text-slate-200 space-y-6 text-sm">
            
            {/* Resume Header */}
            <div className="border-b border-slate-800 pb-4 text-center sm:text-left space-y-2">
              <h1 className="text-2xl font-extrabold text-white">{personal.name}</h1>
              <p className="text-sm font-mono text-cyan-400 font-semibold">{personal.title}</p>
              <p className="text-xs text-slate-400">
                {personal.email} | {personal.phone} | {personal.location}
              </p>
              <p className="text-xs text-slate-400 font-mono">
                GitHub: github.com/aryan13a | LinkedIn: linkedin.com/in/aryankumawat13
              </p>
            </div>

            {/* Summary */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
                Executive Professional Summary
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {personal.heroSummary}
              </p>
            </div>

            {/* Core Competencies */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
                Technical Skills &amp; Proficiencies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {skillsCategories.map((sc) => (
                  <p key={sc.category}>
                    <strong className="text-slate-100">{sc.category}:</strong>{" "}
                    <span className="text-slate-400">
                      {sc.skills.map((s) => s.name).join(", ")}
                    </span>
                  </p>
                ))}
              </div>
            </div>

            {/* Key Analytics Projects */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
                Featured Data Analytics Projects
              </h3>
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between font-semibold text-xs text-slate-100">
                    <span>{proj.title} ({proj.period})</span>
                    <span className="font-mono text-cyan-400 text-[11px]">{proj.techStack.join(", ")}</span>
                  </div>
                  <p className="text-xs text-slate-300">{proj.summary}</p>
                  <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono text-cyan-300">
                    {proj.stats.map((st, i) => (
                      <span key={i} className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {st.label}: {st.value}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
                Experience &amp; Simulations
              </h3>
              {experience.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between font-semibold text-xs text-slate-100">
                    <span>{exp.role} — {exp.company}</span>
                    <span className="font-mono text-slate-400 text-[11px]">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-0.5">
                    {exp.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-1">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
                Education
              </h3>
              <div className="flex justify-between font-semibold text-xs text-slate-100">
                <span>{education.degree} ({education.field})</span>
                <span className="font-mono text-slate-400 text-[11px]">{education.period}</span>
              </div>
              <p className="text-xs text-slate-400">{education.institution}, {education.location}</p>
              <p className="text-xs text-slate-300">
                Relevant Coursework: {education.coursework.join(", ")}
              </p>
            </div>

            {/* Certifications List */}
            <div className="space-y-1">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
                Certifications
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {certifications.map((c) => `${c.title} (${c.issuer})`).join(" • ")}
              </p>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
