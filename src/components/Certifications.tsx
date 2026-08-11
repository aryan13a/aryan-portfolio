"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/data";
import { Award, ExternalLink, CheckCircle, Sparkles, ShieldCheck, Terminal } from "lucide-react";

export function Certifications() {
  const { certifications } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "AI & Cloud", "Data Analytics", "BI & Viz", "Foundations"];

  const filteredCerts =
    activeCategory === "All"
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="py-20 relative">
      
      {/* Section Axis Divider */}
      <div className="axis-divider max-w-7xl mx-auto px-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono font-medium"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>06 // VERIFIED_CREDENTIALS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tighter"
          >
            Industry Certifications &amp; Badges
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Continuous professional verification across Anthropic, Google, IBM, Oracle, Deloitte, Microsoft, and Hugging Face.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  isActive
                    ? "text-slate-900 dark:text-white font-bold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCertCategoryTab"
                    className="absolute inset-0 bg-cyan-500/20 border border-cyan-500/40 rounded-xl"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Variable Size/Weight Grid (Featured Google & Anthropic Certs are larger spotlight cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <AnimatePresence mode="wait">
            {filteredCerts.map((cert) => {
              const isFeatured =
                cert.id === "google-data-analytics" ||
                cert.id === "claude-101" ||
                cert.id === "oracle-oci";

              return (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`linear-card linear-card-hover rounded-2xl border p-6 flex flex-col justify-between group shadow-md ${
                    isFeatured
                      ? "border-cyan-500/40 bg-slate-900/90 lg:col-span-1"
                      : "border-slate-200 dark:border-slate-800"
                  }`}
                >
                  <div>
                    {/* Top Issuer Badge & Date */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-[11px] font-mono font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                        {cert.issuer}
                      </span>

                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold">
                        {cert.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors leading-snug tracking-tight">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Card Footer: Category Tag & Verify Action */}
                  <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                      {cert.category}
                    </span>

                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold transition-all hover:scale-105 border border-cyan-500/30"
                        title="Verify Credential"
                      >
                        <span>Verify</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500 font-semibold">
                        Verified
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
