"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Github, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Tools", href: "/tools/qr" },
    { name: "Downloader", href: "/downloader/tiktok" },
    { name: "API Reference", href: "/endpoints" },
    { name: "Docs", href: "/docs" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass-dark border-b border-white/5 py-3"
          : "bg-transparent border-transparent py-4"
      )}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            opacity: isScrolled ? 0.5 : 0,
            scale: isScrolled ? 1 : 1.5,
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-amber-500/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-amber-500/20 backdrop-blur-sm border border-white/10 group-hover:border-cyan-500/30 transition-colors"
              >
                <Zap className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
                {/* Glow effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/30 via-violet-500/30 to-amber-500/30 blur-md"
                />
              </motion.div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-gradient-premium transition-all">
                LUCIFIZ
              </span>
              <span className="text-[9px] text-cyan-400/70 uppercase tracking-[0.3em] leading-none">
                Gateway
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className="relative group text-sm font-medium text-zinc-400 hover:text-white transition-colors py-2"
                >
                  {link.name}
                  <motion.span
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 rounded-full"
                  />
                  {/* Hover glow */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute -inset-2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 rounded-lg"
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <Button
                variant="outline"
                className="border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
              >
                Login
              </Button>
              <Button
                variant="gradient"
                className="relative overflow-hidden group"
              >
                <span className="relative z-10">Get API Key</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600"
                  animate={{
                    backgroundPosition: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ backgroundSize: "200% 100%" }}
                />
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <a
                href="https://github.com/biezz-2"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"
              >
                <Github className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-zinc-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden lg:hidden"
      >
        <div className="border-t border-white/5 bg-black/40 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
                }}
                transition={{ delay: isOpen ? 0.1 * idx : 0, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  className="text-lg font-medium text-zinc-300 hover:text-cyan-400 transition-colors block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 10,
              }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="pt-4 border-t border-white/5 flex flex-col gap-3"
            >
              <Button
                variant="outline"
                className="w-full border-white/10 hover:border-cyan-500/30"
              >
                Login
              </Button>
              <Button variant="gradient" className="w-full">
                Get API Key
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};
