"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Zap,
  ArrowRight,
  Mail,
  Github,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real app, this would be an API call
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setError("Please fill in all required fields.");
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "support@lucifiz.com",
      href: "mailto:support@lucifiz.com",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "@biezz-2",
      href: "https://github.com/biezz-2",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      value: "@lucifiz",
      href: "https://twitter.com/lucifiz",
    },
  ];

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
                Contact
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
                <Mail className="w-16 h-16 text-gradient-premium" />
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Get in <span className="text-gradient-premium">Touch</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>

            {/* Contact Form and Info */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="glass-dark border border-white/10 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4 mx-auto">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-zinc-400">Thank you for reaching out. We'll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">
                          Name *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-cyan-500/50"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-cyan-500/50"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">
                          Subject
                        </label>
                        <Input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="How can we help?"
                          className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-cyan-500/50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">
                          Message *
                        </label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Your message..."
                          rows={6}
                          className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-cyan-500/50 resize-none"
                          required
                        />
                      </div>

                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 text-red-400 text-sm"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {error}
                        </motion.div>
                      )}

                      <Button
                        type="submit"
                        variant="gradient"
                        disabled={isSubmitting}
                        className="w-full group"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-6"
              >
                {contactInfo.map((info, idx) => (
                  <motion.a
                    key={idx}
                    href={info.href}
                    target={info.href.includes('http') ? '_blank' : undefined}
                    rel={info.href.includes('http') ? 'noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                    className="glass-dark border border-white/10 rounded-xl p-6 block hover:border-cyan-500/30 transition-all hover:scale-105 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-cyan-500/20">
                        {React.cloneElement(info.icon as React.ReactElement, { className: "w-5 h-5 text-cyan-400" })}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-zinc-400 mb-1">{info.label}</div>
                        <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                          {info.value}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 px-6"
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Frequently Asked <span className="text-gradient-premium">Questions</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "Is LUCIFIZ free to use?",
                  a: "Yes! Our free tier offers generous rate limits and access to all endpoints without requiring an API key.",
                },
                {
                  q: "How do I get an API key?",
                  a: "You can sign up for a Pro account on our dashboard to get your API key with increased rate limits.",
                },
                {
                  q: "What's the uptime guarantee?",
                  a: "Pro and Enterprise tiers come with a 99.9% uptime SLA. Free tier is best-effort.",
                },
                {
                  q: "Can I use LUCIFIZ commercially?",
                  a: "Yes! All tiers, including free, can be used for commercial purposes.",
                },
                {
                  q: "How do I handle rate limits?",
                  a: "Check the X-RateLimit headers in responses. Implement exponential backoff when you receive 429 errors.",
                },
                {
                  q: "Do you offer SDKs?",
                  a: "Yes! We provide SDKs for JavaScript, Python, and more. Check our GitHub repository.",
                },
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.05, duration: 0.5 }}
                  className="glass-dark border border-white/10 rounded-xl p-6 hover:border-cyan-500/20 transition-all"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                  <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
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
