"use client";
import React from 'react'
import { cn } from '@/lib/utils'

export const Glow = ({ className }: { className?: string }) => {
    return (
        <div className={cn("absolute bg-lucifiz-cyan/40 blur-[100px] rounded-full pointer-events-none", className)} />
    )
}
