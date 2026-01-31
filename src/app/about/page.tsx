"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Zap,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Users,
  Code,
  Globe,
  Shield,
  Sparkles,
  Target,
  Heart,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-dark border-b border-white/10 px-6 py-4 sticky top-0 z-50"
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-amber-500/20 border border-white/10"
            >
              <Zap className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white group-hover:text-gradient-premium transition-all">
                LUCIFIZ
              </span>
              <span className="text-[9px] text-cyan-400/70 uppercase tracking-[0.3em]">
                About
              </span>
            </div>
          </Link>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden py-24 px-6"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />

          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-block p-6 rounded-2xl glass-dark border border-white/10 mb-8"
              >
                <Zap className="w-16 h-16 text-gradient-premium" />
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                About <span className="text-gradient-premium">LUCIFIZ</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Illuminate Your Development with Crystal Clear APIs
              </p>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            >
              {[
                { icon: <Users className="w-6 h-6" />, label: "Users", value: "10K+" },
                { icon: <Code className="w-6 h-6" />, label: "Requests", value: "1M+" },
                { icon: <Globe className="w-6 h-6" />, label: "Countries", value: "150+" },
                { icon: <Shield className="w-6 h-6" />, label: "Uptime", value: "99.9%" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                  className="glass-dark border border-white/10 rounded-xl p-6 text-center hover:border-cyan-500/30 transition-all hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/20 mb-4 mx-auto">
                    {React.cloneElement(stat.icon as React.ReactElement, { className: "w-6 h-6 text-cyan-400" })}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 px-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="glass-dark border border-white/10 rounded-2xl p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-zinc-300 leading-relaxed mb-8"
              >
                LUCIFIZ was founded with a simple yet powerful mission: to democratize access to
                premium APIs and tools that developers need to build amazing applications.
                We believe that great technology should be accessible to everyone, regardless of
                their budget or company size.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg text-zinc-300 leading-relaxed"
              >
                Our platform provides a unified gateway to cutting-edge capabilities including
                AI-powered features, media processing utilities, developer tools, and more.
                Every API endpoint is designed with performance, reliability, and ease of use
                as our top priorities.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 px-6"
        >
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl font-bold text-white text-center mb-16"
            >
              Our <span className="text-gradient-premium">Values</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "Innovation",
                  description: "Constantly pushing boundaries with cutting-edge technology and creative solutions.",
                  color: "from-cyan-500/20",
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Reliability",
                  description: "99.9% uptime guaranteed with robust infrastructure and monitoring.",
                  color: "from-violet-500/20",
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Community",
                  description: "Built by developers, for developers with open communication and support.",
                  color: "from-amber-500/20",
                },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                  className="glass-dark border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all hover:scale-105 group"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1, type: "spring", stiffness: 200 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} to-${value.color.split('/')[1]}/30 mb-6`}
                  >
                    {React.cloneElement(value.icon as React.ReactElement, { className: "w-8 h-8 text-cyan-400" })}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient-cyan transition-all">
                    {value.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 px-6"
        >
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Team</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="glass-dark border border-white/10 rounded-2xl p-8 lg:p-12"
            >
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                LUCIFIZ is built by a passionate team of developers and engineers who are
                dedicated to creating the best developer tools and APIs. Our team brings
                together expertise from various domains including cloud infrastructure, AI/ML,
                backend development, and frontend technologies.
              </p>

              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Founder & Lead Developer</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500" />
                    <div>
                      <div className="text-white font-semibold">biezz-2</div>
                      <div className="text-sm text-zinc-400">Full Stack Developer</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  {[
                    { icon: <Github className="w-5 h-5" />, href: "https://github.com/biezz-2", label: "GitHub" },
                    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
                    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-lg glass-dark border border-white/10 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all hover:scale-110"
                      aria-label={social.label}
                    >
                      {React.cloneElement(social.icon as React.ReactElement, { className: "w-5 h-5" })}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 px-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl glass-dark border border-white/10 p-12 lg:p-16">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-amber-500/10" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                      Ready to Build Something <span className="text-gradient-premium">Amazing</span>?
                    </h2>
                    <p className="text-lg text-zinc-400 mb-8">
                      Join thousands of developers who are already using LUCIFIZ to
                      power their applications. Get started for free today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/docs">
                        <Button variant="gradient" className="group">
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="border-white/20">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact Us
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="hidden md:block"
                  >
                    <Zap className="w-32 h-32 text-gradient-premium opacity-50" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="glass-dark border-t border-white/10 px-6 py-8">
        <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-cyan-400" />
            <span className="text-sm text-zinc-500">
              © 2026 LUCIFIZ. Built by biezz-2
            </span>
          </div>
          <div className="flex gap-4">
            {[
              { icon: <Github className="w-5 h-5" />, href: "https://github.com/biezz-2" },
              { icon: <Twitter className="w-5 h-5" />, href: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-cyan-400 transition-colors"
              >
                {React.cloneElement(social.icon as React.ReactElement, { className: "w-5 h-5" })}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
