"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Zap,
  Globe,
  Terminal,
  Box,
  Sparkles,
  ImageIcon,
} from "lucide-react";

export const docsSections = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: <Zap className="w-5 h-5" />,
    subsections: [
      { id: "introduction", title: "Introduction" },
      { id: "quick-start", title: "Quick Start" },
      { id: "authentication", title: "Authentication" },
      { id: "errors", title: "Error Handling" },
    ],
  },
  {
    id: "ai-illumination",
    title: "AI Illumination",
    icon: <Sparkles className="w-5 h-5" />,
    subsections: [
      { id: "text-generation", title: "Text Generation" },
      { id: "image-analysis", title: "Image Analysis" },
      { id: "chat-completion", title: "Chat Completion" },
    ],
  },
  {
    id: "flash-downloads",
    title: "Flash Downloads",
    icon: <ImageIcon className="w-5 h-5" />,
    subsections: [
      { id: "tiktok-downloader", title: "TikTok Downloader" },
      { id: "youtube-downloader", title: "YouTube Downloader" },
      { id: "instagram-downloader", title: "Instagram Downloader" },
      { id: "twitter-downloader", title: "Twitter/X Downloader" },
    ],
  },
  {
    id: "crystal-utilities",
    title: "Crystal Utilities",
    icon: <Box className="w-5 h-5" />,
    subsections: [
      { id: "qr-generator", title: "QR Code Generator" },
      { id: "url-shortener", title: "URL Shortener" },
      { id: "temp-email", title: "Temporary Email" },
      { id: "password-generator", title: "Password Generator" },
    ],
  },
  {
    id: "light-media",
    title: "Light Media",
    icon: <ImageIcon className="w-5 h-5" />,
    subsections: [
      { id: "image-compression", title: "Image Compression" },
      { id: "video-converter", title: "Video Format Converter" },
    ],
  },
  {
    id: "dev-spark",
    title: "Dev Spark",
    icon: <Terminal className="w-5 h-5" />,
    subsections: [
      { id: "github-api", title: "GitHub API" },
      { id: "npm-api", title: "NPM Package Stats" },
      { id: "dns-lookup", title: "DNS Lookup" },
      { id: "ssl-checker", title: "SSL Certificate Checker" },
    ],
  },
  {
    id: "global-glow",
    title: "Global Glow",
    icon: <Globe className="w-5 h-5" />,
    subsections: [
      { id: "status", title: "API Status" },
      { id: "rate-limits", title: "Rate Limits" },
    ],
  },
];

interface DocsSidebarProps {
  activeSection: string;
  activeSubsection: string;
  onSectionChange: (id: string) => void;
  onSubsectionChange: (id: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const DocsSidebar: React.FC<DocsSidebarProps> = ({
  activeSection,
  activeSubsection,
  onSectionChange,
  onSubsectionChange,
  isOpen,
  onToggle,
}) => {
  return (
    <aside
      className={`
        fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-80
        glass-dark border-r border-white/10 overflow-y-auto
        transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      <div className="p-6">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1">
          {docsSections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => {
                  onSectionChange(section.id);
                  onSubsectionChange(section.subsections[0].id);
                }}
                className={`
                  w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm font-medium transition-all
                  ${activeSection === section.id
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                {section.icon}
                {section.title}
              </button>
              <AnimatePresence>
                {activeSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-4 mt-1 space-y-1"
                  >
                    {section.subsections.map((subsection) => (
                      <button
                        key={subsection.id}
                        onClick={() => onSubsectionChange(subsection.id)}
                        className={`
                          w-full text-left px-3 py-2 rounded-lg text-sm transition-all
                          ${activeSubsection === subsection.id
                            ? "bg-cyan-500/30 text-white font-medium"
                            : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300"
                          }
                        `}
                      >
                        {subsection.title}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
