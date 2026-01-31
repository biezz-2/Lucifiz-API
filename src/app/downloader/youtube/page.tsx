"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, Loader2, Youtube, Film, Music, Signal, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface Format {
    resolution: string;
    quality: string;
    bitrate: string;
    format: string;
    size: string;
    url: string;
    hasAudio?: boolean;
    hasVideo?: boolean;
}

interface VideoData {
    title: string;
    thumbnail: string;
    duration: string;
    author: string;
    views: string;
    formats: Format[];
    audio: Format[];
    previewUrl?: string;
}

export default function YouTubePage() {
    const [url, setUrl] = useState("");
    const [videoData, setVideoData] = useState<VideoData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [selectedFormat, setSelectedFormat] = useState<string>("1080p");

    const fetchVideo = async () => {
        if (!url.trim()) return;

        setLoading(true);
        setError("");
        setVideoData(null);

        try {
            const res = await fetch(`/api/downloader/youtube?url=${encodeURIComponent(url)}`);
            const data = await res.json();

            if (data.success) {
                setVideoData(data.result);
            } else {
                setError(data.error || "Failed to fetch video");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container max-w-5xl py-20 mx-auto px-4">
            <div className="flex flex-col items-center gap-8 text-center mb-12">
                <div className="p-3 bg-red-500/10 rounded-full text-red-500 shadow-glow-red">
                    <Youtube size={48} />
                </div>
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
                        YouTube Downloader
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                        Convert and download YouTube videos in 8K, 4K, MP3, and more.
                        Premium quality with high bitrate support.
                    </p>
                </div>
            </div>

            <Card className="max-w-3xl mx-auto border-border/50 bg-background/50 backdrop-blur-xl overflow-hidden">
                <CardHeader>
                    <CardTitle>Download Video</CardTitle>
                    <CardDescription>Paste the YouTube video link below</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex gap-2 p-1 bg-background/40 rounded-xl border border-white/5">
                        <Input
                            placeholder="https://www.youtube.com/watch?v=..."
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="bg-transparent border-none focus-visible:ring-0 h-12"
                        />
                        <Button
                            onClick={fetchVideo}
                            disabled={loading || !url}
                            size="lg"
                            className="rounded-lg h-12 px-6 bg-red-600 hover:bg-red-700 text-white"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : <Download />}
                        </Button>
                    </div>

                    {error && (
                        <div className="p-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            {error}
                        </div>
                    )}

                    {videoData && (
                        <div className="mt-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                            {/* Video Preview Section */}
                            {/* Video Preview Section (Adaptive) */}
                            <div className="rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl mb-8 flex justify-center items-center backdrop-blur-sm relative group min-h-[300px]">
                                <img
                                    src={videoData.thumbnail}
                                    alt={videoData.title}
                                    className="max-w-full max-h-[75vh] w-auto h-auto object-contain mx-auto rounded-xl opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-20 h-20 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <Youtube className="w-10 h-10 text-white ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-md text-sm font-mono backdrop-blur-md">
                                    {videoData.duration}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold line-clamp-2 mb-2">{videoData.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1"><Monitor className="w-4 h-4" /> {videoData.views} views</span>
                                    <span className="flex items-center gap-1"><Youtube className="w-4 h-4" /> {videoData.author}</span>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Video Formats */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-semibold flex items-center gap-2"><Film className="w-4 h-4 text-blue-400" /> Video Formats</h4>
                                        <Badge variant="secondary" className="bg-blue-500/10 text-blue-400">MP4 / WEBM</Badge>
                                    </div>
                                    <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                        {videoData.formats.map((fmt, idx) => {
                                            const safeTitle = videoData.title.replace(/[^a-z0-9]/gi, '_').substring(0, 50);
                                            const proxyUrl = `/api/proxy?url=${encodeURIComponent(fmt.url)}&filename=${safeTitle}.${fmt.format}`;

                                            return (
                                                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/10 transition-colors group">
                                                    <div className="flex flex-col">
                                                        <span className="font-medium flex items-center gap-2">
                                                            {fmt.quality}
                                                            {fmt.quality === "4320p" && <Badge className="h-4 text-[10px] bg-amber-500/20 text-amber-400 border-amber-500/20">8K</Badge>}
                                                            {fmt.quality === "2160p" && <Badge className="h-4 text-[10px] bg-purple-500/20 text-purple-400 border-purple-500/20">4K</Badge>}
                                                        </span>
                                                        <span className="text-xs text-muted-foreground">{fmt.bitrate} • {fmt.size}</span>
                                                    </div>
                                                    <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity" asChild>
                                                        <a href={proxyUrl} target="_blank" rel="noopener noreferrer">
                                                            <Download className="w-4 h-4" />
                                                        </a>
                                                    </Button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Audio Formats */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-semibold flex items-center gap-2"><Music className="w-4 h-4 text-green-400" /> Audio Only</h4>
                                        <Badge variant="secondary" className="bg-green-500/10 text-green-400">MP3</Badge>
                                    </div>
                                    <div className="space-y-2">
                                        {videoData.audio.map((fmt, idx) => {
                                            const safeTitle = videoData.title.replace(/[^a-z0-9]/gi, '_').substring(0, 50);
                                            const proxyUrl = `/api/proxy?url=${encodeURIComponent(fmt.url)}&filename=${safeTitle}.${fmt.format}`;

                                            return (
                                                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-green-500/30 hover:bg-white/10 transition-colors group">
                                                    <div className="flex flex-col">
                                                        <span className="font-medium">{fmt.quality}</span>
                                                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                            <Signal className="w-3 h-3" /> {fmt.bitrate} • {fmt.size}
                                                        </span>
                                                    </div>
                                                    <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity" asChild>
                                                        <a href={proxyUrl} target="_blank" rel="noopener noreferrer">
                                                            <Download className="w-4 h-4" />
                                                        </a>
                                                    </Button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
