"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardSpotlight } from "@/components/effects/card-spotlight";
import {
    Sparkles,
    Zap,
    Box,
    Image as ImageIcon, // Alias to avoid conflict
    Terminal,
    Globe
} from "lucide-react";

export const Features = () => {
    const features = [
        {
            title: "AI Illumination",
            description: "Text generation, image analysis, and chat completions powered by advanced models.",
            icon: <Sparkles className="h-6 w-6 text-lucifiz-cyan" />,
            className: "md:col-span-2",
        },
        {
            title: "Flash Downloads",
            description: "High-speed downloader for TikTok, YouTube, Instagram, and Twitter/X.",
            icon: <Zap className="h-6 w-6 text-yellow-400" />,
            className: "md:col-span-1",
        },
        {
            title: "Crystal Utilities",
            description: "QR Code generator, URL shortener, Temp mail, and Password generator tools.",
            icon: <Box className="h-6 w-6 text-purple-400" />,
            className: "md:col-span-1",
        },
        {
            title: "Light Media",
            description: "Instant image compression and video format converters.",
            icon: <ImageIcon className="h-6 w-6 text-pink-400" />,
            className: "md:col-span-1",
        },
        {
            title: "Dev Spark",
            description: "GitHub user info, NPM package stats, DNS lookup, and SSL checker.",
            icon: <Terminal className="h-6 w-6 text-green-400" />,
            className: "md:col-span-1",
        },
        {
            title: "Global Glow",
            description: "99.9% Uptime SLA with Global CDN distribution for lowest latency.",
            icon: <Globe className="h-6 w-6 text-blue-400" />,
            className: "md:col-span-3",
        }
    ];

    return (
        <div className="py-20 w-full relative">
            {/* Background noise or effect can go here */}
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
                    Features that Spark
                </h2>
                <p className="mt-4 text-neutral-400 max-w-lg mx-auto">
                    Everything you need to build faster, all in one illuminated gateway.
                </p>
            </div>

            <BentoGrid className="max-w-6xl mx-auto px-6">
                {features.map((item, i) => (
                    <CardSpotlight
                        key={i}
                        className={item.className + " border-white/10 bg-black/40 backdrop-blur-sm"}
                        radius={400} // Custom spotlight/halo size
                        color="#06b6d4" // Cyan spotlight
                    >
                        <div className="relative z-20 h-full p-6 flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/5">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-xl text-white tracking-tight mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Decorative element */}
                            <div className="mt-6 h-1 w-full bg-gradient-to-r from-lucifiz-cyan/50 to-transparent rounded-full opacity-20" />
                        </div>
                    </CardSpotlight>
                ))}
            </BentoGrid>
        </div>
    );
};
