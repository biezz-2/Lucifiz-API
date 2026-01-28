"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Star, GitFork } from "lucide-react";
import { motion } from "framer-motion";

export const GithubCTA = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Aurora Background Simulation */}
            <div className="absolute inset-0 bg-lucifiz-bg">
                <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-lucifiz-cyan/20 via-lucifiz-violet/20 to-transparent blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 mb-6">
                        <Github className="w-4 h-4" />
                        <span>Open Source & Community Driven</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Join the <span className="text-lucifiz-cyan">Illumination</span>
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
                        Transparent to the core. Explore our code, contribute, and help us build the future of development.
                        Built with 💡 by <span className="text-white font-bold">@biezz-2</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://github.com/biezz-2"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button variant="default" size="lg" className="h-14 px-8 text-lg rounded-full">
                                <Star className="w-5 h-5 mr-2 fill-black/20" />
                                Star on GitHub
                            </Button>
                        </a>
                        <a
                            href="https://github.com/biezz-2"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-white/10 hover:bg-white/5">
                                <GitFork className="w-5 h-5 mr-2" />
                                Fork Repository
                            </Button>
                        </a>
                    </div>

                    {/* Simulated Git Stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-8">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">45+</div>
                            <div className="text-sm text-neutral-500">Repositories</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">1.2k</div>
                            <div className="text-sm text-neutral-500">Followers</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">99+</div>
                            <div className="text-sm text-neutral-500">Contributors</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">MIT</div>
                            <div className="text-sm text-neutral-500">License</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
