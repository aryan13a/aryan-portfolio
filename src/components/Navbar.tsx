"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, FileText, Terminal, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/data";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certs" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" }
];

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export function Navbar({ onOpenResumeModal }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = NAV_ITEMS.map((item) =>
        document.getElementById(item.id)
      );

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -85;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 lg:px-8">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? "linear-card shadow-2xl py-2.5 px-4 border border-slate-300 dark:border-slate-800"
            : "bg-transparent py-3 px-2"
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-slate-900 dark:text-slate-100 text-sm tracking-tight group-hover:text-cyan-500 transition-colors">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                {PORTFOLIO_DATA.personal.title}
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-slate-200/50 dark:bg-slate-900/60 p-1 rounded-xl border border-slate-300/50 dark:border-slate-800/80 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors ${
                    isActive
                      ? "text-slate-900 dark:text-white font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white dark:bg-slate-800/90 rounded-lg shadow-sm border border-slate-200/80 dark:border-slate-700/80"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right CTA Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />

            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="sm:hidden mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 overflow-hidden text-left"
            >
              <div className="space-y-1.5 pb-3">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                      activeSection === item.id
                        ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    )}
                  </button>
                ))}

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResumeModal();
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download Resume PDF</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
