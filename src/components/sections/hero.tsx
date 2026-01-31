"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Copy, Check, Terminal, Sparkles, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyCommand = () => {
    navigator.clipboard.writeText("curl https://zelapioffciall.koyeb.app/api/v1/github/user/biezz-2");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const words = ["Illuminate", "Accelerate", "Transform", "Empower"];
  const [currentWord, setCurrentWord] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      style={{ y: y1, opacity, scale }}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aurora" />
      </div>

      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none opacity-30" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0,
            }}
            animate={{
              y: [Math.random() * 100, Math.random() * 100 + 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-[128px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/30 rounded-full blur-[128px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-[150px] pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-8 border border-white/10"
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </motion.span>
          <span className="text-sm text-zinc-300">
            Now with AI-Powered Capabilities
          </span>
          <ArrowRight className="w-4 h-4 text-zinc-500" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block text-white mb-2">
            {words[currentWord]}
          </span>
          <span className="block text-gradient-premium">
            Your Development
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crystal clear APIs for modern development. Transparent, fast, and free.
          Build faster with our comprehensive gateway.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link href="#api" className="w-full sm:w-auto">
            <Button
              variant="gradient"
              size="lg"
              className="w-full sm:w-auto text-base px-8 h-12 rounded-full relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
          <Link href="/docs" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base px-8 h-12 rounded-full border-white/20 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
            >
              View Documentation
            </Button>
          </Link>
        </motion.div>

        {/* Terminal Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-amber-500/20 rounded-xl blur-xl opacity-50" />
          
          {/* Terminal */}
          <div className="relative rounded-xl glass-dark border border-white/10 overflow-hidden shadow-premium-lg">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-black/40">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs text-zinc-500 font-mono">lucifiz-api</div>
              <div className="w-16" />
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm md:text-base">
              <div className="flex items-center gap-2 text-zinc-400 mb-4">
                <span className="text-green-400">$</span>
                <span className="text-white">
                  curl https://zelapioffciall.koyeb.app/api/v1/github/user/biezz-2
                </span>
              </div>

              {/* Response */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-zinc-300 space-y-1"
              >
                <span className="text-amber-400">{"{"}</span>
                <div className="pl-4">
                  <div>
                    <span className="text-cyan-400">"status"</span>: <span className="text-green-400">200</span>,
                  </div>
                  <div>
                    <span className="text-cyan-400">"glow"</span>: <span className="text-green-400">"100%"</span>,
                  </div>
                  <div>
                    <span className="text-cyan-400">"data"</span>: <span className="text-amber-400">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <div>
                      <span className="text-cyan-400">"username"</span>: <span className="text-green-400">"biezz-2"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-400">"followers"</span>: <span className="text-green-400">"1.2k"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-400">"repos"</span>: <span className="text-green-400">45</span>
                    </div>
                  </div>
                  <span className="text-amber-400">{"}"}</span>
                </div>
                <span className="text-amber-400">{"}"}</span>
              </motion.div>
            </div>

            {/* Copy Button */}
            <button
              onClick={copyCommand}
              className="absolute top-14 right-4 p-2 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-all group"
              aria-label="Copy command"
            >
              {copied ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Check className="w-4 h-4 text-green-400" />
                </motion.div>
              ) : (
                <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {[
            { icon: <Zap className="w-4 h-4" />, text: "100 req/min Free", color: "text-yellow-400" },
            { icon: <Sparkles className="w-4 h-4" />, text: "No Auth Required", color: "text-cyan-400" },
            { icon: <Terminal className="w-4 h-4" />, text: "99.9% Uptime", color: "text-green-400" },
            { icon: <ArrowRight className="w-4 h-4" />, text: "CORS Enabled", color: "text-violet-400" },
          ].map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + idx * 0.1, duration: 0.5 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 hover:border-white/20 transition-all hover:scale-105"
            >
              <span className={badge.color}>{badge.icon}</span>
              <span className="text-sm text-zinc-300">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
