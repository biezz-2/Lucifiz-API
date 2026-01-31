"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Zap,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  Search,
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Introducing LUCIFIZ API v2.0",
    excerpt: "We're excited to announce the release of LUCIFIZ API v2.0 with new AI features, improved performance, and enhanced documentation.",
    author: "biezz-2",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Announcements",
    image: "bg-gradient-to-br from-cyan-500/30 to-violet-500/30",
  },
  {
    id: 2,
    title: "Building Scalable APIs: Lessons Learned",
    excerpt: "Share insights from building a high-performance API gateway that serves millions of requests daily.",
    author: "biezz-2",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Engineering",
    image: "bg-gradient-to-br from-violet-500/30 to-pink-500/30",
  },
  {
    id: 3,
    title: "Getting Started with AI Integration",
    excerpt: "A comprehensive guide to integrating AI-powered text generation into your applications using LUCIFIZ API.",
    author: "biezz-2",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Tutorial",
    image: "bg-gradient-to-br from-amber-500/30 to-orange-500/30",
  },
  {
    id: 4,
    title: "Understanding Rate Limits and Best Practices",
    excerpt: "Learn how to effectively manage API rate limits and implement retry strategies for your applications.",
    author: "biezz-2",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "Guide",
    image: "bg-gradient-to-br from-green-500/30 to-cyan-500/30",
  },
  {
    id: 5,
    title: "Security Best Practices for API Integration",
    excerpt: "Essential security guidelines to follow when integrating LUCIFIZ API into your production applications.",
    author: "biezz-2",
    date: "2023-12-20",
    readTime: "7 min read",
    category: "Security",
    image: "bg-gradient-to-br from-blue-500/30 to-indigo-500/30",
  },
  {
    id: 6,
    title: "Optimizing Image Compression Workflows",
    excerpt: "Tips and techniques for getting the best results from our image compression API.",
    author: "biezz-2",
    date: "2023-12-15",
    readTime: "5 min read",
    category: "Tutorial",
    image: "bg-gradient-to-br from-rose-500/30 to-red-500/30",
  },
];

export default function BlogPage() {
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
                Blog
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
            <div className="text-center mb-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-6"
              >
                Latest <span className="text-gradient-premium">Updates</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8"
              >
                News, tutorials, and insights from the LUCIFIZ team
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="max-w-2xl mx-auto relative"
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-3 glass-dark border border-white/10 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </motion.div>
            </div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {["All", "Announcements", "Engineering", "Tutorial", "Guide", "Security"].map(
                (category, idx) => (
                  <Button
                    key={idx}
                    variant={category === "All" ? "gradient" : "outline"}
                    className={`rounded-full ${category === "All" ? "" : "border-white/10 hover:bg-white/5"}`}
                  >
                    {category}
                  </Button>
                ),
              )}
            </motion.div>
          </div>
        </motion.section>

        {/* Blog Posts Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="py-12 px-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link href={`/blog/${post.id}`} className="block">
                    <div className="glass-dark border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all h-full">
                      {/* Image */}
                      <div className={`relative h-48 ${post.image}`}>
                        <motion.div
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 opacity-30"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Zap className="w-12 h-12 text-white/50" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Category */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-medium">
                            {post.category}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient-cyan transition-all line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-sm text-zinc-500 pt-4 border-t border-white/5">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 px-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl glass-dark border border-white/10 p-12">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-amber-500/10" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Stay <span className="text-gradient-premium">Updated</span>
                  </h2>
                  <p className="text-lg text-zinc-400 mb-8">
                    Subscribe to our newsletter for the latest updates, tutorials, and insights
                    delivered straight to your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 glass-dark border border-white/10 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                    <Button variant="gradient" className="group whitespace-nowrap">
                      Subscribe
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="hidden md:block"
                >
                  <Tag className="w-24 h-24 text-gradient-premium opacity-50" />
                </motion.div>
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
              { icon: <Zap />, href: "https://github.com/biezz-2" },
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
