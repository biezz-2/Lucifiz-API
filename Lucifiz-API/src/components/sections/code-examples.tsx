"use client";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const CodeExamples = () => {
    const [activeTab, setActiveTab] = useState("curl");
    const [copied, setCopied] = useState(false);

    const steps = [
        {
            id: "curl",
            label: "cURL",
            code: `curl -X GET "https://zelapioffciall.koyeb.app/api/v1/downloader/tiktok?url=https://vm.tiktok.com/ZGe7..." \\
  -H "accept: application/json"`,
        },
        {
            id: "js",
            label: "Node.js",
            code: `const response = await fetch('https://zelapioffciall.koyeb.app/api/v1/downloader/tiktok?url=...', {
  method: 'GET',
  headers: {
    'accept': 'application/json'
  }
});
const data = await response.json();
console.log(data);`,
        },
        {
            id: "python",
            label: "Python",
            code: `import requests

url = "https://zelapioffciall.koyeb.app/api/v1/downloader/tiktok"
params = {"url": "https://vm.tiktok.com/ZGe7..."}
headers = {"accept": "application/json"}

response = requests.get(url, params=params, headers=headers)
print(response.json())`,
        },
        {
            id: "go",
            label: "Go",
            code: `package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {
	url := "https://zelapioffciall.koyeb.app/api/v1/downloader/tiktok?url=..."
	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Add("accept", "application/json")

	res, _ := http.DefaultClient.Do(req)
	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(string(body))
}`,
        },
    ];

    const activeCode = steps.find((s) => s.id === activeTab)?.code || "";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(activeCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-20 bg-black/50 border-y border-white/5 relative">
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Integration made <span className="text-lucifiz-cyan">simple</span>.
                    </h2>
                    <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                        Connect to Lucifiz in seconds using your favorite language.
                        Standard REST patterns make implementation a breeze, whether you're building a bot, a web app, or a mobile utility.
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-neutral-300">
                            <div className="w-6 h-6 rounded-full bg-lucifiz-cyan/20 flex items-center justify-center">
                                <Check className="w-3 h-3 text-lucifiz-cyan" />
                            </div>
                            Native JSON responses
                        </li>
                        <li className="flex items-center gap-3 text-neutral-300">
                            <div className="w-6 h-6 rounded-full bg-lucifiz-cyan/20 flex items-center justify-center">
                                <Check className="w-3 h-3 text-lucifiz-cyan" />
                            </div>
                            Comprehensive error handling
                        </li>
                        <li className="flex items-center gap-3 text-neutral-300">
                            <div className="w-6 h-6 rounded-full bg-lucifiz-cyan/20 flex items-center justify-center">
                                <Check className="w-3 h-3 text-lucifiz-cyan" />
                            </div>
                            Type-safe SDKs coming soon
                        </li>
                    </ul>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0a0a0f] overflow-hidden shadow-2xl shadow-lucifiz-cyan/5">
                    {/* Tabs */}
                    <div className="flex border-b border-white/10 bg-white/5">
                        {steps.map((step) => (
                            <button
                                key={step.id}
                                onClick={() => setActiveTab(step.id)}
                                className={cn(
                                    "px-6 py-3 text-sm font-medium transition-colors relative",
                                    activeTab === step.id ? "text-white" : "text-neutral-500 hover:text-neutral-300"
                                )}
                            >
                                {step.label}
                                {activeTab === step.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-lucifiz-cyan"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Code Block */}
                    <div className="relative group">
                        <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-neutral-300 bg-[#0a0a0f]">
                            <code dangerouslySetInnerHTML={{ __html: syntaxHighlight(activeCode) }} />
                        </pre>

                        <button
                            onClick={copyToClipboard}
                            className="absolute top-4 right-4 p-2 rounded-md bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
                        >
                            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Simple syntax highlighting helper
function syntaxHighlight(code: string) {
    // This is a naive implementation. For production, use Prism or Shiki.
    // Escaping HTML entities is important if using real content.
    let html = code
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/(".*?")/g, '<span class="text-green-400">$1</span>')
        .replace(/\b(await|const|var|let|function|return|import|from)\b/g, '<span class="text-purple-400">$1</span>')
        .replace(/\b(curl|GET|POST)\b/g, '<span class="text-yellow-400">$1</span>')
        .replace(/\b(true|false|null)\b/g, '<span class="text-blue-400">$1</span>');
    return html;
}
