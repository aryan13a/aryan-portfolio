"use client";

import React from "react";
import { PORTFOLIO_DATA } from "../data/data";
import { ArrowUp, BarChart2, Heart, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-950/50 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md">
              <BarChart2 className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="font-bold text-slate-900 dark:text-white text-sm">
                {personal.name}
              </p>
              <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                {personal.title} Portfolio
              </p>
            </div>
          </div>

          {/* Socials & Quick Links */}
          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 text-xs font-mono">
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500 transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500 transition-colors flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span>•</span>
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-cyan-500 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          {/* Copyright & Back to top */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Aryan Kumawat. Built with Next.js &amp; Tailwind CSS.
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
