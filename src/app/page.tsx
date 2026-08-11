"use client";

import React, { useState } from "react";
import { BackgroundGrid } from "../components/BackgroundGrid";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { Certifications } from "../components/Certifications";
import { Achievements } from "../components/Achievements";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { ResumeModal } from "../components/ResumeModal";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Data Pattern Background */}
      <BackgroundGrid />

      {/* Sticky Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Single Page Sections */}
      <main className="flex-grow relative z-10">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent" />
          <About />
          
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent" />
          <Skills />
          
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent" />
          <Projects />
          
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent" />
          <Experience />

          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent" />
          <Education />

          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent" />
          <Certifications />

          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent" />
          <Achievements />

          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent" />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
