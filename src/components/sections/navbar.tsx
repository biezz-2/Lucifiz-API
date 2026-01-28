"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const navLinks = [
        { name: "Endpoints", href: "#endpoints" },
        { name: "Documentation", href: "/docs" },
        { name: "Pricing", href: "#pricing" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-lucifiz-bg/70 backdrop-blur-xl border-b border-white/5"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative flex items-center justify-center p-2 rounded-lg bg-lucifiz-cyan/10 group-hover:bg-lucifiz-cyan/20 transition-colors">
                        <Zap className="w-5 h-5 text-lucifiz-cyan fill-lucifiz-cyan animate-pulse group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-xl tracking-tight text-white group-hover:text-lucifiz-cyan transition-colors">LUCIFIZ</span>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest leading-none">Gateway</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-lucifiz-cyan transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <a
                        href="https://github.com/biezz-2"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                        GitHub
                    </a>
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="outline" className="border-lucifiz-cyan/20 hover:border-lucifiz-cyan/50">Login</Button>
                    <Button variant="gradient">Get API Key</Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-zinc-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-20 left-0 right-0 bg-lucifiz-bg/95 backdrop-blur-xl border-b border-white/5 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-zinc-300 hover:text-lucifiz-cyan"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="https://github.com/biezz-2"
                        className="text-lg font-medium text-zinc-300 hover:text-lucifiz-cyan"
                    >
                        GitHub @biezz-2
                    </Link>
                    <div className="mt-4 flex flex-col gap-3">
                        <Button className="w-full" variant="outline">Login</Button>
                        <Button className="w-full" variant="gradient">Get API Key</Button>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
};
