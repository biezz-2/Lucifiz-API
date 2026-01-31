"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Loader2, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const ENDPOINTS = [
    {
        category: "Downloader",
        items: [
            { method: "GET", path: "/downloader/tiktok", params: [{ name: "url", placeholder: "https://vm.tiktok.com/..." }] },
            { method: "GET", path: "/downloader/instagram", params: [{ name: "url", placeholder: "https://instagram.com/p/..." }] },
        ]
    },
    {
        category: "AI",
        items: [
            { method: "GET", path: "/ai/chat", params: [{ name: "text", placeholder: "Hello world" }] },
        ]
    },
    {
        category: "Development",
        items: [
            { method: "GET", path: "/github/user", params: [{ name: "username", placeholder: "biezz-2" }] },
        ]
    }
];

export const Playground = () => {
    const [selectedEndpoint, setSelectedEndpoint] = useState(ENDPOINTS[0].items[0]);
    const [params, setParams] = useState<Record<string, string>>({ url: "" });
    const [response, setResponse] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<number | null>(null);

    const handleParamChange = (key: string, value: string) => {
        setParams(prev => ({ ...prev, [key]: value }));
    };

    const executeRequest = async () => {
        setLoading(true);
        setResponse(null);
        setStatus(null);

        // Simulation
        setTimeout(() => {
            setLoading(false);
            setStatus(200);
            setResponse({
                status: 200,
                creator: "Biezz",
                data: {
                    url: params[selectedEndpoint.params[0].name] || "sample",
                    processed: true,
                    meta: {
                        duration: "0.04s",
                        server: "Koyeb"
                    }
                }
            });
        }, 1500);
    };

    return (
        <section className="py-24 bg-lucifiz-bg relative" id="playground">
            <div className="container mx-auto px-6 text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Live API Playground</h2>
                <p className="text-neutral-400">Test the endpoints directly from your browser.</p>
            </div>

            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-0 border border-white/10 rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm shadow-2xl">

                    {/* Request Builder */}
                    <div className="p-8 border-b lg:border-b-0 lg:border-r border-white/10">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-white">Request</h3>
                            <div className="flex gap-2">
                                <select
                                    className="bg-white/5 border border-white/10 rounded-md px-2 py-1 text-sm text-neutral-300 focus:outline-none"
                                    onChange={(e) => {
                                        const ep = ENDPOINTS.flatMap(g => g.items).find(i => i.path === e.target.value);
                                        if (ep) {
                                            setSelectedEndpoint(ep);
                                            setParams({});
                                            setResponse(null);
                                        }
                                    }}
                                >
                                    {ENDPOINTS.map(group => (
                                        <optgroup key={group.category} label={group.category}>
                                            {group.items.map(item => (
                                                <option key={item.path} value={item.path}>{item.path}</option>
                                            ))}
                                        </optgroup>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 mb-6 bg-white/5 p-3 rounded-lg border border-white/10">
                            <span className={cn(
                                "font-bold text-xs px-2 py-1 rounded",
                                selectedEndpoint.method === "GET" ? "bg-green-500/20 text-green-400" : "bg-orange-500/20 text-orange-400"
                            )}>
                                {selectedEndpoint.method}
                            </span>
                            <span className="font-mono text-sm text-neutral-300 truncate">
                                https://zelapioffciall.koyeb.app/api/v1{selectedEndpoint.path}
                            </span>
                        </div>

                        <div className="space-y-4 mb-8">
                            {selectedEndpoint.params.map(param => (
                                <div key={param.name}>
                                    <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-2 font-bold">
                                        {param.name}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={param.placeholder}
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lucifiz-cyan/50 focus:ring-1 focus:ring-lucifiz-cyan/50 transition-all font-mono text-sm"
                                        onChange={(e) => handleParamChange(param.name, e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>

                        <Button
                            onClick={executeRequest}
                            disabled={loading}
                            className="w-full h-12 text-base font-bold bg-lucifiz-cyan text-black hover:bg-lucifiz-cyan/90 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Charging...
                                </>
                            ) : (
                                <>
                                    <Play className="w-5 h-5 mr-2 fill-black" />
                                    Send Request
                                </>
                            )}
                        </Button>
                    </div>

                    {/* Response Viewer */}
                    <div className="bg-[#0c0c12] p-8 flex flex-col min-h-[400px]">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-white">Response</h3>
                            {status && (
                                <div className="flex items-center gap-4">
                                    <span className="text-xs text-neutral-500">45ms</span>
                                    <span className={cn("text-xs px-2 py-1 rounded bg-green-500/20 text-green-400 border border-green-500/20")}>
                                        {status} OK
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="flex-1 rounded-lg bg-black border border-white/5 p-4 relative group overflow-hidden">
                            {response ? (
                                <pre className="font-mono text-sm text-neutral-300 overflow-auto h-full max-h-[350px]">
                                    {JSON.stringify(response, null, 2)}
                                </pre>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-neutral-600 space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                        <Play className="w-6 h-6 ml-1 opacity-20" />
                                    </div>
                                    <p className="text-sm">Run a request to see the illumination.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
