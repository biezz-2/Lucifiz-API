"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Zap,
  Box,
  Image as ImageIcon,
  Terminal,
  Globe,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export const Features = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const features = [
    {
      title: "AI Illumination",
      description: "Text generation, image analysis, and chat completions powered by advanced models.",
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      className: "md:col-span-2",
      gradient: "from-cyan-500/20 to-blue-500/20",
      color: "cyan",
    },
    {
      title: "Flash Downloads",
      description: "High-speed downloader for TikTok, YouTube, Instagram, and Twitter/X.",
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      className: "md:col-span-1",
      gradient: "from-amber-500/20 to-orange-500/20",
      color: "amber",
    },
    {
      title: "Crystal Utilities",
      description: "QR Code generator, URL shortener, Temp mail, and Password generator tools.",
      icon: <Box className="w-6 h-6 text-violet-400" />,
      className: "md:col-span-1",
      gradient: "from-violet-500/20 to-purple-500/20",
      color: "violet",
    },
    {
      title: "Light Media",
      description: "Instant image compression and video format converters.",
      icon: <ImageIcon className="w-6 h-6 text-pink-400" />,
      className: "md:col-span-1",
      gradient: "from-pink-500/20 to-rose-500/20",
      color: "pink",
    },
    {
      title: "Dev Spark",
      description: "GitHub user info, NPM package stats, DNS lookup, and SSL checker.",
      icon: <Terminal className="w-6 h-6 text-green-400" />,
      className: "md:col-span-1",
      gradient: "from-green-500/20 to-emerald-500/20",
      color: "green",
    },
    {
      title: "Global Glow",
      description: "99.9% Uptime SLA with Global CDN distribution for lowest latency.",
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      className: "md:col-span-3",
      gradient: "from-blue-500/20 to-cyan-500/20",
      color: "blue",
    }
  ];

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[128px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 text-sm text-cyan-400 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Powerful Features
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">Everything you need</span>
            <br />
            <span className="text-gradient-premium">to build faster</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Comprehensive toolkit for modern development. From AI-powered features to developer utilities, all in one gateway.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              className={feature.className}
            >
              <div
                className={`
                  relative h-full p-8 rounded-2xl glass-dark border border-white/10
                  overflow-hidden group hover:border-white/20
                  transition-all duration-500
                  ${feature.className === 'md:col-span-3' ? 'bg-gradient-to-r ' + feature.gradient : ''}
                `}
                onMouseMove={handleMouseMove}
              >
                {/* Spotlight Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.1), transparent 40%)`,
                  }}
                />

                {/* Gradient Border Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-amber-500/20 opacity-0 transition-opacity duration-500"
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.05, type: "spring", stiffness: 200 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient-cyan transition-all">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed flex-1">
                    {feature.description}
                  </p>

                  {/* Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.05, duration: 0.5 }}
                    className="flex items-center gap-2 text-cyan-400 mt-6 font-medium group-hover:gap-3 transition-all"
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Hover Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-violet-500/30 to-amber-500/30 blur-xl opacity-0 transition-opacity duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-20"
        >
          <Link href="/docs">
            <Button
              variant="outline"
              size="lg"
              className="group border-white/20 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
            >
              Explore All Features
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
