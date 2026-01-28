import React from "react";
import Link from "next/link";
import { Zap, Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="w-full bg-black border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
            {/* Glow effect at bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-lucifiz-cyan/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Zap className="w-6 h-6 text-lucifiz-cyan fill-lucifiz-cyan" />
                            <span className="font-bold text-2xl text-white">LUCIFIZ</span>
                        </Link>
                        <p className="text-neutral-400 text-sm mb-6">
                            Crystal Clear APIs for Modern Development. Illuminate your next project with high-performance, transparent tools.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://github.com/biezz-2" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-neutral-400">
                            <li><Link href="#endpoints" className="hover:text-lucifiz-cyan transition-colors">Endpoints</Link></li>
                            <li><Link href="#pricing" className="hover:text-lucifiz-cyan transition-colors">Pricing</Link></li>
                            <li><Link href="/changelog" className="hover:text-lucifiz-cyan transition-colors">Changelog</Link></li>
                            <li><Link href="/status" className="hover:text-lucifiz-cyan transition-colors">Status</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Developers</h4>
                        <ul className="space-y-4 text-sm text-neutral-400">
                            <li><Link href="/docs" className="hover:text-lucifiz-cyan transition-colors">Documentation</Link></li>
                            <li><Link href="/api-reference" className="hover:text-lucifiz-cyan transition-colors">API Reference</Link></li>
                            <li><Link href="/playground" className="hover:text-lucifiz-cyan transition-colors">Playground</Link></li>
                            <li><Link href="https://github.com/biezz-2" className="hover:text-lucifiz-cyan transition-colors">Open Source</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Stay Illuminated</h4>
                        <p className="text-neutral-400 text-sm mb-4">Get the latest updates and api keys.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-lucifiz-cyan/50"
                            />
                            <button className="bg-lucifiz-cyan text-black font-semibold rounded-lg px-4 py-2 text-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-shadow">
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-500 text-sm">
                        © {new Date().getFullYear()} Lucifiz. Built by <a href="https://github.com/biezz-2" className="text-lucifiz-cyan hover:underline">@biezz-2</a>.
                    </p>
                    <div className="text-neutral-600 text-xs">
                        All lights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};
