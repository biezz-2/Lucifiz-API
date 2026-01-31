"use client";
import React, { useRef, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
    children,
    radius = 350,
    color = "#262626",
    className,
    ...props
}: {
    radius?: number;
    color?: string;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
    const mouseX = useRef(0);
    const mouseY = useRef(0);

    const [isHovering, setIsHovering] = useState(false);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.current = clientX - left;
        mouseY.current = clientY - top;
    }

    return (
        <div
            className={cn(
                "group/spotlight relative rounded-xl border border-neutral-800 bg-black dark:border-neutral-800",
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            {...props}
        >
            <div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
                style={{
                    backgroundColor: color,
                    maskImage: `radial-gradient(
            ${radius}px circle at ${mouseX.current}px ${mouseY.current}px,
            white,
            transparent
          )`,
                    WebkitMaskImage: `radial-gradient(
            ${radius}px circle at ${mouseX.current}px ${mouseY.current}px,
            white,
            transparent
          )`,
                }}
            ></div>
            {children}
        </div>
    );
};
