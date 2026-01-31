"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const Sparkle = ({ style }: { style?: React.CSSProperties }) => {
    return (
        <motion.span
            style={style}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: Math.random() * 2 }}
            className="absolute pointer-events-none"
        >
            <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-lucifiz-cyan fill-lucifiz-cyan"
            >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
        </motion.span>
    );
};
