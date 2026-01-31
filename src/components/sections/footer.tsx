"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Zap, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-amber-500/20 border border-white/10">
                <Zap className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
              </div>
              <span className="font-bold text-xl text-white">LUCIFIZ</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Crystal clear APIs for modern development. Illuminate your path to success.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {[
                { name: "Features", href: "/#features" },
                { name: "Pricing", href: "/#pricing" },
                { name: "Documentation", href: "/docs" },
                { name: "API Reference", href: "/endpoints" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-zinc-500 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { name: "About", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-zinc-500 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms-of-service" },
                { name: "Cookie Policy", href: "/cookie-policy" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-zinc-500 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
            {/* Copyright */}
            <p className="text-zinc-600 text-sm">
              © 2026 LUCIFIZ. All rights reserved. Built by{" "}
              <a
                href="https://github.com/biezz-2"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:underline"
              >
                biezz-2
              </a>
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: "https://github.com/biezz-2" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target={social.href.includes("github") ? "_blank" : undefined}
                  rel={social.href.includes("github") ? "noreferrer" : undefined}
                  className="p-2 rounded-lg glass-dark border border-white/10 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              className="p-3 rounded-full glass-dark border border-white/10 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
