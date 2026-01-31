import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LUCIFIZ - Illuminate Your Development",
  description: "Crystal clear APIs for modern development. Transparent, fast, and free. Build faster with our comprehensive API gateway.",
  keywords: ["LUCIFIZ", "API", "Gateway", "Development", "REST API", "AI", "Next.js", "TypeScript"],
  authors: [{ name: "biezz-2" }],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "LUCIFIZ - Illuminate Your Development",
    description: "Crystal clear APIs for modern development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUCIFIZ - Illuminate Your Development",
    description: "Crystal clear APIs for modern development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
