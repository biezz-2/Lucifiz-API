"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, ArrowLeft, Cookie } from "lucide-react";

export default function CookiePolicyPage() {
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
                            <div className="p-3 rounded-xl bg-amber-500/20">
                                <Cookie className="w-8 h-8 text-amber-400" />
                            </div>
                            <h1 className="text-4xl font-bold text-white">Cookie Policy</h1>
                        </div>

                        <p className="text-zinc-400 mb-12 text-lg">
                            Last updated: October 24, 2024
                        </p>

                        <div className="prose prose-invert prose-lg max-w-none">
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
                                </p>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-white mb-4">2. How LUCIFIZ Uses Cookies</h2>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                                    <li>To enable certain functions of the Service.</li>
                                    <li>To provide analytics.</li>
                                    <li>To store your preferences.</li>
                                    <li>To enable advertisements delivery, including behavioral advertising.</li>
                                </ul>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Cookies</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
                                </p>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-white mb-4">4. Your Choices Regarding Cookies</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
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
