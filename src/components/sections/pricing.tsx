"use client";
import React, { useState } from "react";
import { Check, X, Zap, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

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
      color: "from-zinc-500/20 to-zinc-600/20",
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
      color: "from-cyan-500/20 via-violet-500/20 to-amber-500/20",
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
      color: "from-violet-500/20 to-purple-600/20",
    }
  ];

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-amber-500/20 rounded-full blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 text-sm text-amber-400 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Simple Pricing
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">Choose the plan that</span>
            <br />
            <span className="text-gradient-premium">illuminates your path</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Transparent pricing with no hidden fees. Start free and scale as you grow.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-4 mt-10"
          >
            <span className={`text-sm ${!isAnnual ? "text-white font-medium" : "text-zinc-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 rounded-full bg-white/10 p-1 transition-all hover:bg-white/15"
            >
              <motion.div
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 shadow-lg"
              />
            </button>
            <span className={`text-sm ${isAnnual ? "text-white font-medium" : "text-zinc-500"}`}>
              Yearly
              <span className="text-cyan-400 text-xs ml-1">(Save 20%)</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * idx, duration: 0.6 }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                >
                  <div className="bg-gradient-to-r from-cyan-500 via-violet-500 to-amber-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg shadow-cyan-500/20">
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div
                className={`
                  relative h-full p-8 rounded-2xl glass-dark border
                  flex flex-col transition-all duration-500 group
                  ${plan.popular 
                    ? "border-cyan-500/30 shadow-[0_0_60px_rgba(6,182,212,0.15)] scale-105" 
                    : "border-white/10 hover:border-white/20 hover:shadow-premium"
                  }
                `}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl`} />

                {/* Glow Effect */}
                {plan.popular && (
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-500/40 via-violet-500/40 to-amber-500/40 rounded-2xl blur-xl -z-10"
                  />
                )}

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Plan Name */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-zinc-500">{plan.period}</span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm mb-8">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <div className="flex-1 space-y-4 mb-8">
                    {plan.features.map((feature, featureIdx) => (
                      <motion.div
                        key={featureIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + featureIdx * 0.05, duration: 0.4 }}
                        className="flex items-center gap-3"
                      >
                        <div className="p-1 rounded-full bg-cyan-500/20 flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                        <span className="text-sm text-zinc-300">{feature}</span>
                      </motion.div>
                    ))}
                    {plan.missing?.map((feature, featureIdx) => (
                      <motion.div
                        key={featureIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + featureIdx * 0.05, duration: 0.4 }}
                        className="flex items-center gap-3 opacity-50"
                      >
                        <div className="p-1 rounded-full bg-white/5 flex-shrink-0">
                          <X className="w-3.5 h-3.5 text-zinc-500" />
                        </div>
                        <span className="text-sm text-zinc-500">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link href="#" className="w-full">
                    <Button
                      variant={plan.variant}
                      className={`
                        w-full h-12 text-base
                        ${plan.popular ? "shadow-lg shadow-cyan-500/20" : ""}
                      `}
                    >
                      {plan.cta}
                      {plan.popular && <ArrowRight className="w-4 h-4 ml-2" />}
                    </Button>
                  </Link>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-zinc-500 text-sm">
            All plans include 99.9% uptime SLA • 24/7 support • No hidden fees
          </p>
        </motion.div>
      </div>
    </section>
  );
};
