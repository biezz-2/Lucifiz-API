"use client";
import React, { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: "Starter",
            price: "Free",
            description: "Perfect for hobbyists and side projects.",
            features: [
                "100 requests / minute",
                "Basic Endpoints Access",
                "Community Support",
                "No Credit Card Required",
            ],
            missing: ["Priority Endpoints", "Webhooks", "Analytics Dashboard"],
            cta: "Get Started",
            variant: "outline" as const,
        },
        {
            name: "Pro",
            price: isAnnual ? "$39" : "$49",
            period: "/mo",
            description: "For serious developers and scaling apps.",
            features: [
                "10,000 requests / minute",
                "Priority Endpoints Access",
                "Email Support",
                "Webhooks",
                "Analytics Dashboard",
                "99.9% Uptime SLA",
            ],
            missing: [],
            cta: "Go Pro",
            popular: true,
            variant: "gradient" as const,
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Dedicated infrastructure for large teams.",
            features: [
                "Unlimited Requests",
                "Dedicated Support",
                "Custom Rate Limits",
                "Custom Domain",
                "SSO & Audit Logs",
            ],
            missing: [],
            cta: "Contact Sales",
            variant: "outline" as const,
        }
    ];

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lucifiz-violet/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lucifiz-cyan/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-neutral-400">Choose the plan that illuminates your path best.</p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <span className={cn("text-sm", !isAnnual ? "text-white font-medium" : "text-neutral-500")}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="w-12 h-6 rounded-full bg-white/10 p-1 relative transition-colors hover:bg-white/20"
                        >
                            <motion.div
                                animate={{ x: isAnnual ? 24 : 0 }}
                                className="w-4 h-4 rounded-full bg-lucifiz-cyan shadow-sm"
                            />
                        </button>
                        <span className={cn("text-sm", isAnnual ? "text-white font-medium" : "text-neutral-500")}>
                            Yearly <span className="text-lucifiz-cyan text-xs ml-1">(Save 20%)</span>
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={cn(
                                "relative rounded-2xl p-8 border backdrop-blur-sm flex flex-col",
                                plan.popular
                                    ? "border-lucifiz-cyan/50 bg-lucifiz-cyan/5 shadow-[0_0_50px_rgba(6,182,212,0.1)]"
                                    : "border-white/10 bg-black/40"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lucifiz-cyan text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-lg font-medium text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    {plan.period && <span className="text-neutral-500">{plan.period}</span>}
                                </div>
                                <p className="text-neutral-400 text-sm mt-4">{plan.description}</p>
                            </div>

                            <div className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="p-1 rounded-full bg-lucifiz-cyan/20">
                                            <Check className="w-3 h-3 text-lucifiz-cyan" />
                                        </div>
                                        <span className="text-sm text-neutral-300">{feature}</span>
                                    </div>
                                ))}
                                {plan.missing?.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 opacity-50">
                                        <div className="p-1 rounded-full bg-white/5">
                                            <X className="w-3 h-3 text-neutral-500" />
                                        </div>
                                        <span className="text-sm text-neutral-500">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button variant={plan.variant} className="w-full">
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
