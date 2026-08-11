"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/data";
import {
  FileText,
  Mail,
  Terminal,
  Database,
  TrendingUp,
  Code2,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Play
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

interface HeroProps {
  onOpenResumeModal: () => void;
}

export function Hero({ onOpenResumeModal }: HeroProps) {
  const { personal } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<"pipeline" | "sql" | "kpis">("pipeline");

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Beacon Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 dark:bg-slate-900/90 border border-slate-800 text-cyan-400 text-xs font-mono font-medium shadow-xl mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>SYSTEM_READY :: AVAILABLE FOR DATA ANALYST ROLES • REMOTE &amp; HYBRID</span>
        </motion.div>

        {/* Hero Title & Headline */}
        <div className="max-w-4xl text-left space-y-4 mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tighter leading-[1.05]"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center gap-3 text-lg sm:text-xl font-mono font-semibold text-cyan-600 dark:text-cyan-400"
          >
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span>{personal.title}</span>
            <span className="text-slate-500 text-xs">// Quantitative Reasoning &amp; BI Engineering</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl"
          >
            {personal.heroSummary}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 pt-3"
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

            <div className="flex items-center gap-2 pl-2">
              <a
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-105 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-105 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Visual Centerpiece: Realistic Code Terminal with Floating Breakout Stat Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Terminal Window Frame */}
          <div className="terminal-window rounded-2xl overflow-hidden border border-slate-800 shadow-2xl text-left relative z-10">
            
            {/* Editor Chrome Top Bar */}
            <div className="terminal-header px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>

              {/* Tab Selector */}
              <div className="flex items-center gap-1 font-mono text-xs text-slate-400">
                <button
                  onClick={() => setActiveTab("pipeline")}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activeTab === "pipeline" ? "bg-slate-800 text-cyan-400 font-bold" : "hover:text-slate-200"
                  }`}
                >
                  pipeline_stream.py
                </button>
                <button
                  onClick={() => setActiveTab("sql")}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activeTab === "sql" ? "bg-slate-800 text-cyan-400 font-bold" : "hover:text-slate-200"
                  }`}
                >
                  cohort_churn.sql
                </button>
                <button
                  onClick={() => setActiveTab("kpis")}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activeTab === "kpis" ? "bg-slate-800 text-cyan-400 font-bold" : "hover:text-slate-200"
                  }`}
                >
                  metrics_summary.json
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-500">
                <Play className="w-3 h-3 text-emerald-400" />
                <span>EXEC_TIME: 142ms</span>
              </div>
            </div>

            {/* Code Body with Line Numbers */}
            <div className="p-6 font-mono text-xs sm:text-sm bg-[#07090e] text-slate-200 overflow-x-auto space-y-2">
              {activeTab === "pipeline" && (
                <>
                  <div className="flex items-center gap-4 text-slate-600 select-none">
                    <span className="w-6 text-right text-slate-600">01</span>
                    <span className="text-slate-500"># End-to-End Analytics Pipeline Architecture</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-6 text-right text-slate-600 select-none">02</span>
                    <span className="text-purple-400">import <span className="text-cyan-300">pandas</span> as <span className="text-cyan-300">pd</span></span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-6 text-right text-slate-600 select-none">03</span>
                    <span className="text-purple-400">import <span className="text-cyan-300">google.cloud.bigquery</span> as <span className="text-cyan-300">bq</span></span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-6 text-right text-slate-600 select-none">04</span>
                    <span className="text-slate-400">df = pd.read_csv(<span className="text-amber-300">&quot;superstore_9994_records.csv&quot;</span>)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-6 text-right text-slate-600 select-none">05</span>
                    <span className="text-slate-400">df.clean_nulls().extract_margin_kpis()</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-6 text-right text-slate-600 select-none">06</span>
                    <span className="text-emerald-400">$ python run_analytics_etl.py --target=tableau_public</span>
                  </div>
                  <div className="flex items-center gap-4 text-cyan-300 pt-2 border-t border-slate-800/80">
                    <span className="w-6 text-right text-slate-600 select-none">07</span>
                    <span>[OUT] Pipeline Executed: 9,994 retail rows processed successfully.</span>
                    <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 cursor-blink" />
                  </div>
                </>
              )}

              {activeTab === "sql" && (
                <>
                  <div className="flex items-center gap-4 text-slate-600 select-none">
                    <span className="w-6 text-right text-slate-600">01</span>
                    <span className="text-slate-500">-- BigQuery Commercial Banking Cohort Analysis</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-6 text-right text-slate-600 select-none">02</span>
                    <span className="text-blue-400">WITH <span className="text-amber-300">churn_cohorts</span> AS (</span>
                  </div>
                  <div className="flex items-center gap-4 pl-6">
                    <span className="w-6 text-right text-slate-600 select-none">03</span>
                    <span className="text-blue-400">SELECT <span className="text-slate-200">geography, age, balance, products_num,</span></span>
                  </div>
                  <div className="flex items-center gap-4 pl-10">
                    <span className="w-6 text-right text-slate-600 select-none">04</span>
                    <span className="text-purple-400">CASE WHEN <span className="text-slate-200">age BETWEEN 46 AND 60</span> THEN <span className="text-amber-300">&apos;High-Risk&apos;</span> END <span className="text-purple-400">AS</span> risk_tier</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-6 text-right text-slate-600 select-none">05</span>
                    <span className="text-blue-400">) SELECT <span className="text-slate-200">geography, AVG(exited) * 100 AS churn_rate FROM churn_cohorts GROUP BY 1</span></span>
                  </div>
                  <div className="flex items-center gap-4 text-cyan-300 pt-2 border-t border-slate-800/80">
                    <span className="w-6 text-right text-slate-600 select-none">06</span>
                    <span>[RESULT] Germany Churn: 32.44% | Age 46-60: 51.12% | Balances: $91K vs $73K</span>
                    <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 cursor-blink" />
                  </div>
                </>
              )}

              {activeTab === "kpis" && (
                <>
                  <div className="flex items-center gap-4 text-slate-600 select-none">
                    <span className="w-6 text-right text-slate-600">01</span>
                    <span className="text-slate-500">&#123;</span>
                  </div>
                  <div className="flex items-center gap-4 pl-6">
                    <span className="w-6 text-right text-slate-600 select-none">02</span>
                    <span><span className="text-cyan-300">&quot;total_revenue_analyzed&quot;</span>: <span className="text-amber-300">&quot;$2.29M&quot;</span>,</span>
                  </div>
                  <div className="flex items-center gap-4 pl-6">
                    <span className="w-6 text-right text-slate-600 select-none">03</span>
                    <span><span className="text-cyan-300">&quot;overall_profit_margin&quot;</span>: <span className="text-emerald-400">&quot;12.47%&quot;</span>,</span>
                  </div>
                  <div className="flex items-center gap-4 pl-6">
                    <span className="w-6 text-right text-slate-600 select-none">04</span>
                    <span><span className="text-cyan-300">&quot;germany_churn_disparity&quot;</span>: <span className="text-rose-400">&quot;32.44% vs 16.15% France&quot;</span>,</span>
                  </div>
                  <div className="flex items-center gap-4 pl-6">
                    <span className="w-6 text-right text-slate-600 select-none">05</span>
                    <span><span className="text-cyan-300">&quot;certifications_count&quot;</span>: <span className="text-indigo-300">&quot;11 Verified Badges&quot;</span></span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600 select-none">
                    <span className="w-6 text-right text-slate-600">06</span>
                    <span className="text-slate-500">&#125;</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Floating Breakout Stat Card 1 (Top Right Overlay) */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -top-6 -right-4 sm:-right-8 z-20 linear-card p-4 rounded-2xl border border-cyan-500/40 shadow-2xl max-w-xs text-left hidden sm:block glow-border"
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 font-bold">
                Superstore ETL
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold">
                +36% Tech Share
              </span>
            </div>
            <p className="font-mono text-2xl font-extrabold text-white">$2.29M</p>
            <p className="text-[11px] text-slate-300">Total Sales at 12.47% Profit Margin</p>
          </motion.div>

          {/* Floating Breakout Stat Card 2 (Bottom Left Overlay) */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-6 -left-4 sm:-left-8 z-20 linear-card p-4 rounded-2xl border border-rose-500/40 shadow-2xl max-w-xs text-left hidden sm:block"
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[10px] uppercase font-mono tracking-wider text-rose-400 font-bold">
                Banking Churn SQL
              </span>
              <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 text-[10px] font-mono font-bold">
                High Risk
              </span>
            </div>
            <p className="font-mono text-2xl font-extrabold text-rose-400">32.44%</p>
            <p className="text-[11px] text-slate-300">Germany Churn (51.12% Age 46-60 Segment)</p>
          </motion.div>

        </motion.div>

        {/* Hero Bottom Bar Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {personal.quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="linear-card linear-card-hover p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-left group"
            >
              <p className="font-mono text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
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
