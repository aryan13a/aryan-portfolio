"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/data";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Sparkles,
  MessageSquare,
  Terminal
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import confetti from "canvas-confetti";

export function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);

    // Open mailto link as fallback
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 relative">
      
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
            <span>08 // TRANSMIT_MESSAGE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tighter"
          >
            Let&apos;s Connect &amp; Collaborate
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Open for Data Analyst full-time roles, analytics projects, and technical discussions.
          </motion.p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          
          {/* Left Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <div className="linear-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Email Me</p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-cyan-400 transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personal.email, "email")}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-cyan-400 transition-colors border border-slate-200 dark:border-slate-800"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="linear-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Call / WhatsApp</p>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-cyan-400 transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personal.phone, "phone")}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-cyan-400 transition-colors border border-slate-200 dark:border-slate-800"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="linear-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Based In</p>
                <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {personal.location}
                </p>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="linear-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">
                Professional Networks
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personal.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 text-white font-medium text-xs hover:bg-slate-800 transition-colors border border-slate-800"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={personal.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-blue-600 text-white font-medium text-xs hover:bg-blue-500 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="linear-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 font-mono">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>$ send_message --recipient=aryan</span>
              </h3>

              {submitted ? (
                <div className="p-8 text-center space-y-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Dispatched!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. Your email client should open automatically, or I will respond directly to {formData.email}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-mono"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Data Analyst Opportunity / Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Aryan, I reviewed your portfolio projects and would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
