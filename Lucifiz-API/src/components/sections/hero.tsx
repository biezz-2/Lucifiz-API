"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/effects/lamp";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { Check, Copy, Terminal } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    const [copied, setCopied] = React.useState(false);

    const copyCommand = () => {
        navigator.clipboard.writeText("curl https://zelapioffciall.koyeb.app/api/v1/github/user/biezz-2");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <LampContainer className="pt-32 sm:pt-40">
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="bg-gradient-to-b from-white to-neutral-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                Illuminate Your Development
            </motion.h1>

            <div className="mt-4 max-w-2xl text-center px-4">
                <TextGenerateEffect
                    words="Crystal clear APIs for modern development. Transparent, fast, and free."
                    className="text-base md:text-xl font-light text-neutral-300"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col md:flex-row items-center gap-4 mt-8"
            >
                <Link href="#endpoints">
                    <Button variant="gradient" size="lg" className="rounded-full">Start Free</Button>
                </Link>
                <Link href="/docs">
                    <Button variant="outline" size="lg" className="rounded-full border-lucifiz-cyan/40 hover:bg-lucifiz-cyan/10">View Documentation</Button>
                </Link>
            </motion.div>

            {/* Terminal Mockup */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-16 w-full max-w-3xl rounded-xl border border-white/10 bg-black/50 backdrop-blur-md shadow-2xl relative overflow-hidden group"
            >
                {/* Traffic lights */}
                <div className="absolute top-0 left-0 w-full h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80 text-center" />
                    <div className="ml-2 text-xs text-neutral-500 font-mono">bash — 80x24</div>
                </div>

                <div className="p-6 pt-14 font-mono text-sm md:text-base text-left">
                    <div className="flex items-center gap-2 text-neutral-400">
                        <span className="text-green-400">$</span>
                        <span className="typing-effect">curl https://zelapioffciall.koyeb.app/api/v1/github/user/biezz-2</span>
                    </div>

                    <div className="mt-4 text-neutral-300">
                        <span className="text-yellow-400">{`{`}</span>
                        <div className="pl-4">
                            <span className="text-purple-400">&quot;status&quot;</span>: <span className="text-blue-400">200</span>,<br />
                            <span className="text-purple-400">&quot;glow&quot;</span>: <span className="text-green-400">&quot;100%&quot;</span>,<br />
                            <span className="text-purple-400">&quot;data&quot;</span>: <span className="text-yellow-400">{`{`}</span>
                            <div className="pl-4">
                                <span className="text-purple-400">&quot;username&quot;</span>: <span className="text-green-400">&quot;biezz-2&quot;</span>,<br />
                                <span className="text-purple-400">&quot;followers&quot;</span>: <span className="text-green-400">&quot;1.2k&quot;</span>,<br />
                                <span className="text-purple-400">&quot;repos&quot;</span>: <span className="text-blue-400">45</span>
                            </div>
                            <span className="text-yellow-400">{`}`}</span>
                        </div>
                        <span className="text-yellow-400">{`}`}</span>
                    </div>
                </div>

                {/* Copy Button */}
                <button
                    onClick={copyCommand}
                    className="absolute top-12 right-4 p-2 rounded-md hover:bg-white/10 text-neutral-400 transition-colors"
                >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>

            </motion.div>

            {/* Trust Badges */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-neutral-500"
            >
                <div className="flex items-center gap-2 border border-white/5 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm">
                    <span className="text-yellow-400">⚡</span> 100 req/min Free
                </div>
                <div className="flex items-center gap-2 border border-white/5 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm">
                    <span className="text-blue-400">💎</span> No Auth Required
                </div>
                <div className="flex items-center gap-2 border border-white/5 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm">
                    <span className="text-red-400">🔥</span> CORS Enabled
                </div>
            </motion.div>
        </LampContainer>
    );
};
