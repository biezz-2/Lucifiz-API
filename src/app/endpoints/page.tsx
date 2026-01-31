"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Zap,
  ArrowRight,
  Copy,
  Check,
  Play,
  Download,
  Image as ImageIcon,
  Terminal,
  Code,
  Globe,
  Users,
  Clock,
  Menu,
  X,
  Search,
} from "lucide-react";

const endpoints = [
  {
    id: "ai-illumination",
    category: "AI Illumination",
    icon: <Terminal className="w-6 h-6" />,
    color: "from-cyan-500/30",
    endpoints: [
      {
        name: "Text Generation",
        method: "POST",
        path: "/api/v1/ai/text/generate",
        description: "Generate human-like text using advanced AI models with customizable parameters",
        params: ["prompt", "model", "max_tokens", "temperature", "top_p"],
      },
      {
        name: "Image Analysis",
        method: "POST",
        path: "/api/v1/ai/image/analyze",
        description: "Analyze images for objects, text, faces, colors, and content moderation",
        params: ["image", "analysis_type", "detail"],
      },
      {
        name: "Chat Completions",
        method: "POST",
        path: "/api/v1/ai/chat/completions",
        description: "Build conversational AI interfaces with multi-turn chat support and streaming",
        params: ["messages", "model", "temperature", "max_tokens", "stream"],
      },
    ],
  },
  {
    id: "flash-downloads",
    category: "Flash Downloads",
    icon: <Download className="w-6 h-6" />,
    color: "from-violet-500/30",
    endpoints: [
      {
        name: "TikTok Downloader",
        method: "GET",
        path: "/api/downloader/tiktok",
        demoLink: "/downloader/tiktok",
        description: "Download TikTok videos without watermarks in various formats",
        params: ["url", "format", "quality"],
      },
      {
        name: "YouTube Downloader",
        method: "GET",
        path: "/api/downloader/youtube",
        demoLink: "/downloader/youtube",
        description: "Download YouTube videos in multiple formats and quality options",
        params: ["url", "format", "quality"],
      },
      {
        name: "Instagram Downloader",
        method: "GET",
        path: "/api/v1/download/instagram",
        description: "Download Instagram posts, reels, and stories",
        params: ["url", "format"],
      },
      {
        name: "Twitter/X Downloader",
        method: "GET",
        path: "/api/v1/download/twitter",
        description: "Download tweets, images, and videos from Twitter/X",
        params: ["url", "include_media"],
      },
    ],
  },
  {
    id: "crystal-utilities",
    category: "Crystal Utilities",
    icon: <Code className="w-6 h-6" />,
    color: "from-amber-500/30",
    endpoints: [
      {
        name: "QR Code Generator",
        method: "GET",
        path: "/api/tools/qr",
        demoLink: "/tools/qr",
        description: "Generate QR codes for URLs, text, contact info with customization",
        params: ["url", "size", "color"],
      },
      {
        name: "URL Shortener",
        method: "POST",
        path: "/api/v1/utils/shorten",
        description: "Create short, memorable URLs with comprehensive analytics",
        params: ["url", "custom_alias", "expire_in", "password"],
      },
      {
        name: "Temporary Email",
        method: "POST",
        path: "/api/v1/utils/temp-email/create",
        description: "Generate temporary email addresses for testing and privacy",
        params: ["domain", "expire_in"],
      },
      {
        name: "Password Generator",
        method: "POST",
        path: "/api/v1/utils/password/generate",
        description: "Generate secure, random passwords with strength indicators",
        params: ["length", "uppercase", "lowercase", "numbers", "symbols", "exclude_similar"],
      },
    ],
  },
  {
    id: "light-media",
    category: "Light Media",
    icon: <ImageIcon className="w-6 h-6" />,
    color: "from-pink-500/30",
    endpoints: [
      {
        name: "Image Compression",
        method: "POST",
        path: "/api/v1/media/image/compress",
        description: "Compress images without significant quality loss",
        params: ["image", "quality", "format"],
      },
      {
        name: "Video Format Converter",
        method: "POST",
        path: "/api/v1/media/video/convert",
        description: "Convert videos between different formats with quality options",
        params: ["video", "output_format", "quality"],
      },
    ],
  },
  {
    id: "dev-spark",
    category: "Dev Spark",
    icon: <Code className="w-6 h-6" />,
    color: "from-green-500/30",
    endpoints: [
      {
        name: "GitHub API",
        method: "GET",
        path: "/api/v1/github/user/:username",
        description: "Get GitHub user and repository information",
        params: ["username"],
      },
      {
        name: "NPM Package Stats",
        method: "GET",
        path: "/api/v1/npm/package/:name",
        description: "Get NPM package information and download statistics",
        params: ["name"],
      },
      {
        name: "DNS Lookup",
        method: "GET",
        path: "/api/v1/dns/lookup",
        description: "Query DNS records for any domain",
        params: ["domain", "type"],
      },
      {
        name: "SSL Certificate Checker",
        method: "GET",
        path: "/api/v1/ssl/check",
        description: "Check SSL certificate information for any domain",
        params: ["domain"],
      },
    ],
  },
  {
    id: "global-glow",
    category: "Global Glow",
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-500/30",
    endpoints: [
      {
        name: "API Status",
        method: "GET",
        path: "/api/v1/status",
        description: "Check current status of all LUCIFIZ services",
        params: [],
      },
      {
        name: "Rate Limits",
        method: "GET",
        path: "/api/v1/rate-limits",
        description: "View rate limits for your current plan",
        params: [],
      },
    ],
  },
];

export default function EndpointsPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("ai-illumination");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const filteredEndpoints = endpoints.filter((category) => {
    const matchesCategory = activeCategory === "all" || category.id === activeCategory;
    const matchesSearch = searchTerm === "" ||
      category.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.endpoints.some((ep) =>
        ep.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ep.path.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const totalEndpoints = filteredEndpoints.reduce((acc, cat) => acc + cat.endpoints.length, 0);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10 px-6 py-4">
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
                API Reference
              </span>
            </div>
          </Link>
          <Button
            variant="outline"
            className="lg:hidden border-white/10"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      <div className="flex pt-20">
        {/* Sidebar */}
        <aside
          className={`
            fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-80
            glass-dark border-r border-white/10 overflow-y-auto
            transform transition-transform duration-300 z-40
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          <div className="p-6">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search endpoints..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="mb-4">
              <button
                onClick={() => setActiveCategory("all")}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm font-medium transition-all ${activeCategory === "all"
                  ? "bg-cyan-500/20 text-cyan-400"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }`}
              >
                <Globe className="w-4 h-4" />
                All Endpoints
                <span className="ml-auto text-xs text-zinc-500">{totalEndpoints}</span>
              </button>
            </div>

            <div className="space-y-1">
              {endpoints.map((category) => (
                <div key={category.id}>
                  <button
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm font-medium transition-all ${activeCategory === category.id
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      }`}
                  >
                    {React.cloneElement(category.icon as React.ReactElement, { className: "w-4 h-4" })}
                    {category.category}
                    <span className="ml-auto text-xs text-zinc-500">{category.endpoints.length}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen lg:ml-80">
          <div className="p-8 lg:p-16">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredEndpoints.map((category, catIdx) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIdx * 0.05, duration: 0.5 }}
                  className="mb-12"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                      {React.cloneElement(category.icon as React.ReactElement, { className: "w-6 h-6 text-cyan-400" })}
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                      {category.category}
                    </h2>
                  </div>

                  {/* Endpoints Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.endpoints.map((endpoint, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05, duration: 0.4 }}
                        className="glass-dark border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all hover:scale-105"
                      >
                        {/* Method Badge */}
                        <div className="mb-4">
                          <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold ${endpoint.method === "GET" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"
                            }`}>
                            {endpoint.method}
                          </span>
                        </div>

                        {/* Endpoint Name */}
                        <h3 className="text-xl font-bold text-white mb-2">
                          {endpoint.name}
                        </h3>

                        {/* Description */}
                        <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                          {endpoint.description}
                        </p>

                        {/* Endpoint Path */}
                        <div className="mb-4">
                          <code className="text-cyan-400 text-sm font-mono bg-cyan-500/10 px-3 py-2 rounded-lg block overflow-x-auto">
                            {endpoint.path}
                          </code>
                        </div>

                        {/* Parameters */}
                        {endpoint.params.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-bold text-zinc-300 mb-2">Parameters</h4>
                            <div className="flex flex-wrap gap-2">
                              {endpoint.params.map((param, paramIdx) => (
                                <span
                                  key={paramIdx}
                                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-zinc-300"
                                >
                                  {param}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex gap-3">
                          <Button
                            variant="gradient"
                            className="flex-1 group"
                            onClick={() => {
                              // @ts-ignore
                              if (endpoint.demoLink) {
                                // @ts-ignore
                                window.location.href = endpoint.demoLink;
                              } else {
                                window.open(`https://zelapioffciall.koyeb.app${endpoint.path}`, '_blank');
                              }
                            }}
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Try It
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          <Button
                            variant="outline"
                            className="border-white/20"
                            onClick={() => handleCopy(`https://zelapioffciall.koyeb.app${endpoint.path}`, endpoint.name)}
                          >
                            {copied === endpoint.name ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { icon: <Zap className="w-6 h-6" />, label: "Total Endpoints", value: totalEndpoints },
                { icon: <Users className="w-6 h-6" />, label: "Categories", value: endpoints.length },
                { icon: <Clock className="w-6 h-6" />, label: "Average Response", value: "<50ms" },
                { icon: <Globe className="w-6 h-6" />, label: "Uptime", value: "99.9%" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + idx * 0.05, duration: 0.5 }}
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

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-16 text-center"
            >
              <Link href="/docs">
                <Button variant="gradient" className="group text-lg px-8 h-12">
                  View Full Documentation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
