"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Zap,
    ArrowRight,
    Code,
    Globe,
    Heart,
    Users,
    Briefcase,
    MapPin,
    Clock,
    DollarSign,
} from "lucide-react";

const positions = [
    {
        id: 1,
        title: "Senior Full Stack Engineer",
        department: "Engineering",
        location: "Remote / San Francisco",
        type: "Full-time",
        salary: "$140k - $180k",
        tags: ["React", "Node.js", "TypeScript"],
    },
    {
        id: 2,
        title: "AI Research Scientist",
        department: "AI Research",
        location: "London, UK",
        type: "Full-time",
        salary: "$160k - $220k",
        tags: ["Python", "PyTorch", "LLMs"],
    },
    {
        id: 3,
        title: "Developer Advocate",
        department: "Marketing",
        location: "Remote",
        type: "Contract",
        salary: "$100k - $140k",
        tags: ["Content", "Community", "Speaking"],
    },
    {
        id: 4,
        title: "Platform Infrastructure Engineer",
        department: "DevOps",
        location: "New York, USA",
        type: "Full-time",
        salary: "$150k - $190k",
        tags: ["Kubernetes", "AWS", "Go"],
    },
];

const benefits = [
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Remote First",
        description: "Work from anywhere in the world. We believe in talent, not locations.",
    },
    {
        icon: <DollarSign className="w-6 h-6" />,
        title: "Competitive Salary",
        description: "We offer top-tier compensation packages with equity options.",
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: "Health & Wellness",
        description: "Comprehensive health insurance and wellness stipends for all employees.",
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Flexible Hours",
        description: "Set your own schedule. We care about output, not hours clocked.",
    },
    {
        icon: <Code className="w-6 h-6" />,
        title: "Latest Tech",
        description: "We provide the latest hardware and software to help you do your best work.",
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Team Retreats",
        description: "Quarterly team meetups in exciting locations around the globe.",
    },
];

export default function CareersPage() {
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
                                Careers
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

                    <div className="container mx-auto max-w-4xl relative z-10 text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-block p-6 rounded-2xl glass-dark border border-white/10 mb-8"
                        >
                            <Briefcase className="w-16 h-16 text-gradient-premium" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-5xl lg:text-7xl font-bold text-white mb-6"
                        >
                            Build the <span className="text-gradient-premium">Future</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
                        >
                            Join a team of visionaries, engineers, and creatives working to democratize access to powerful developer tools and AI technologies.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <Button variant="gradient" className="group h-12 px-8" onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}>
                                View Open Positions
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Benefits Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="py-20 px-6 bg-white/5" // Slight contrast
                >
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Join Us?</h2>
                            <p className="text-zinc-400 max-w-2xl mx-auto">We take care of our team so they can take care of building amazing things.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="glass-dark border border-white/10 p-6 rounded-2xl hover:border-cyan-500/30 transition-all hover:scale-105"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Open Positions */}
                <motion.section
                    id="openings"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="py-24 px-6"
                >
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Open Positions</h2>
                            <p className="text-zinc-400">Find your place at LUCIFIZ</p>
                        </div>

                        <div className="space-y-4">
                            {positions.map((job, idx) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="glass-dark border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-cyan-500/30 transition-all group"
                                >
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{job.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-zinc-400 mb-4 md:mb-0">
                                            <div className="flex items-center gap-1">
                                                <Briefcase className="w-4 h-4" /> {job.department}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" /> {job.location}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" /> {job.type}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="hidden md:flex gap-2">
                                            {job.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-zinc-300 border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <Button variant="outline" className="border-white/20 whitespace-nowrap">
                                            Apply Now
                                        </Button>
                                    </div>
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
                        {/* Simple footer for this page, or reuse the main footer component if it was a component import */}
                        <span className="text-zinc-500 text-sm">Join us and build the future.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
