"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
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
                            <div className="p-3 rounded-xl bg-cyan-500/20">
                                <Shield className="w-8 h-8 text-cyan-400" />
                            </div>
                            <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
                        </div>

                        <p className="text-zinc-400 mb-12 text-lg">
                            Last updated: October 24, 2024
                        </p>

                        <div className="prose prose-invert prose-lg max-w-none">
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    Welcome to LUCIFIZ ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                                </p>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-white mb-4">2. The Data We Collect</h2>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                                    <li><strong className="text-zinc-200">Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                                    <li><strong className="text-zinc-200">Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                                    <li><strong className="text-zinc-200">Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                                    <li><strong className="text-zinc-200">Usage Data</strong> includes information about how you use our website, products and services.</li>
                                </ul>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                    <li>Where we need to comply with a legal or regulatory obligation.</li>
                                </ul>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                                </p>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:support@lucifiz.com" className="text-cyan-400 hover:underline">support@lucifiz.com</a>.
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
