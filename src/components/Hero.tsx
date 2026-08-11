"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/data";
import {
  FileText,
  Mail,
  ArrowRight,
  Database,
  TrendingUp,
  BarChart,
  Code2,
  CheckCircle2,
  Terminal
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

interface HeroProps {
  onOpenResumeModal: () => void;
}

export function Hero({ onOpenResumeModal }: HeroProps) {
  const { personal } = PORTFOLIO_DATA;

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{personal.availability}</span>
            </motion.div>

            {/* Name and Title Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-mono font-semibold text-cyan-600 dark:text-cyan-400 tracking-wide flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                <span>{personal.title}</span>
              </h2>
            </motion.div>

            {/* Hero Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              {personal.heroSummary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Resume PDF</span>
              </button>

              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-700 hover:scale-[1.02] active:scale-[0.98] transition-all border border-slate-800 dark:border-slate-700 shadow-md"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>

              {/* Social Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personal.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-105 transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personal.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-105 transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Data Analytics Interactive Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl relative">
              {/* Top Header of Console */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-cyan-500" />
                  <span>pipeline_insights.py</span>
                </span>
              </div>

              {/* Code Snippet / SQL Stream Mock */}
              <div className="font-mono text-xs space-y-2 bg-slate-900 text-slate-200 p-4 rounded-xl shadow-inner overflow-x-auto text-left">
                <p className="text-slate-500"># End-to-End Analytics Workflow</p>
                <p className="text-purple-400">import <span className="text-cyan-300">pandas</span> as <span className="text-cyan-300">pd</span></p>
                <p className="text-purple-400">import <span className="text-cyan-300">bigquery</span> as <span className="text-cyan-300">bq</span></p>
                <p className="text-purple-400">from <span className="text-cyan-300">tableau</span> import <span className="text-cyan-300">ExecutiveDash</span></p>
                <p className="pt-2 text-slate-400">
                  <span className="text-emerald-400">df</span> = bq.query(<span className="text-amber-300">&quot;SELECT cohort, churn_rate FROM bank_records&quot;</span>)
                </p>
                <div className="p-2.5 bg-slate-800/90 rounded-lg border border-slate-700/80 my-2 space-y-1 text-[11px]">
                  <p className="text-cyan-300 flex items-center justify-between">
                    <span>[EXEC] ETL Stream Output:</span>
                    <span className="text-emerald-400 font-bold">SUCCESS (200 OK)</span>
                  </p>
                  <p className="text-slate-300">▸ Total Sales Revenue: <span className="text-amber-300 font-bold">$2,297,201</span></p>
                  <p className="text-slate-300">▸ Germany Customer Churn: <span className="text-rose-400 font-bold">32.44%</span></p>
                  <p className="text-slate-300">▸ Tech Category Profit: <span className="text-emerald-400 font-bold">36% Share</span></p>
                </div>
              </div>

              {/* Micro KPI Badge Row */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="p-3 rounded-xl bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20 text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 block">
                    Core Method
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mt-0.5">
                    <Database className="w-3.5 h-3.5 text-cyan-500" />
                    SQL &amp; Pandas ETL
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 block">
                    BI Delivery
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mt-0.5">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
                    Tableau &amp; Power BI
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Hero Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {personal.quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-left hover:border-cyan-500/50 transition-all group"
            >
              <p className="font-mono text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                {stat.value}
              </p>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
