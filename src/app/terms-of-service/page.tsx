"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, ArrowLeft, FileText } from "lucide-react";

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Header */}
            <nav className="sticky top-0 z-50 glass-dark border-b border-white/10 px-6 py-4">
                <div className="container mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <motion.div
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.6 }}
                            className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-amber-500/20 border border-white/10"
                        >
                            <Zap className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
                        </motion.div>
                        <span className="font-bold text-xl text-white group-hover:text-gradient-premium transition-all">
                            LUCIFIZ
                        </span>
                    </Link>
                    <Link href="/" className="text-zinc-400 hover:text-white flex items-center gap-2 text-sm transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>
            </nav>

            <main className="flex-1 py-16 px-6">
                <div className="container mx-auto max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-violet-500/20">
                                <FileText className="w-8 h-8 text-violet-400" />
                            </div>
                            <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
                        </div>

                        <p className="text-zinc-400 mb-12 text-lg">
                            Last updated: October 24, 2024
                        </p>

                        <div className="prose prose-invert prose-lg max-w-none">
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    By accessing and using LUCIFIZ (the "Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
                                </p>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    LUCIFIZ provides a suite of API tools for developers, including but not limited to AI illumination, media processing, and utility services. We reserve the right to modify, suspend, or discontinue any part of the Service at any time.
                                </p>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                                </p>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-white mb-4">4. API Usage and Limits</h2>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    Your use of the API is subject to rate limits and quotas as determined by your subscription plan. Excessive use or abuse of the API may result in temporary or permanent suspension of your access.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                                    <li>You must not use the API for any illegal or unauthorized purpose.</li>
                                    <li>You must not attempt to reverse engineer or overly burden our infrastructure.</li>
                                </ul>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimer of Warranties</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to fitness for a particular purpose or non-infringement.
                                </p>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    In no event shall LUCIFIZ be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>

            <footer className="glass-dark border-t border-white/10 px-6 py-8 mt-auto">
                <div className="container mx-auto text-center text-zinc-500 text-sm">
                    © 2026 LUCIFIZ. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
