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
      {/* Linear Data Grid Mesh Background */}
      <BackgroundGrid />

      {/* Floating Header Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Continuous Single Page Flow */}
      <main className="flex-grow relative z-10">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
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
