"use client";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
    {
        quote:
            "Lucifiz transformed our development workflow. The API latency is basically non-existent and the documentation is crystal clear.",
        name: "Alex Rivera",
        title: "Senior Engineer at TechFlow",
    },
    {
        quote:
            "I was skeptical about a free gateway, but the 99.9% uptime is real. The AI endpoints are a game changer for my side projects.",
        name: "Sarah Chen",
        title: "Indie Hacker",
    },
    {
        quote: "The best developer experience I've had in years. No auth required for testing is such a relief.",
        name: "Marcus Johnson",
        title: "Frontend Lead",
    },
    {
        quote:
            "Finally, an API service that doesn't hide behind a sales call. Lucifiz is transparent, fast, and exactly what we needed.",
        name: "Emily Davis",
        title: "CTO at StartStream",
    },
    {
        quote:
            "The Downloader APIs are incredibly robust. We use them for our content aggregation platform and they never fail.",
        name: "David Kim",
        title: "Backend Dev",
    },
];

export const Testimonials = () => {
    return (
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <div className="mb-8 text-center px-4">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
                    Trusted by Illuminators
                </h2>
            </div>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
};
