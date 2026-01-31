"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, Loader2, Video, Music, Settings, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface VideoData {
    title: string;
    cover: string;
    play: string;
    music: string;
    author: {
        nickname: string;
        avatar: string;
    };
    stats: {
        plays: number;
        likes: number;
    };
}

export default function TikTokPage() {
    const [url, setUrl] = useState("");
    const [videoData, setVideoData] = useState<VideoData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Modern state for quality/bitrate
    const [quality, setQuality] = useState("1080p");
    const [format, setFormat] = useState("mp4");

    const downloadVideo = async () => {
        if (!url.trim()) return;

        setLoading(true);
        setError("");
        setVideoData(null);

        try {
            const res = await fetch(`/api/downloader/tiktok?url=${encodeURIComponent(url)}`);
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

    // Determine download link based on format
    const downloadLink = videoData ? (format === 'mp3' ? videoData.music : videoData.play) : '';

    return (
        <div className="container max-w-5xl py-20 mx-auto px-4">
            <div className="flex flex-col items-center gap-8 text-center mb-12">
                <div className="p-3 bg-pink-500/10 rounded-full text-pink-500 shadow-glow-pink">
                    <Video size={48} />
                </div>
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
                        TikTok Downloader
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                        Download TikTok videos without watermark in HD quality.
                        Fast, free, and unlimited via our API.
                    </p>
                </div>
            </div>

            <Card className="max-w-2xl mx-auto border-border/50 bg-background/50 backdrop-blur-xl overflow-hidden">
                <CardHeader>
                    <CardTitle>Download Video</CardTitle>
                    <CardDescription>Paste the TikTok video link below</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex gap-2 p-1 bg-background/40 rounded-xl border border-white/5">
                        <Input
                            placeholder="https://www.tiktok.com/@user/video/..."
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="bg-transparent border-none focus-visible:ring-0 h-12"
                        />
                        <Button
                            onClick={downloadVideo}
                            disabled={loading || !url}
                            size="lg"
                            className="rounded-lg h-12 px-6"
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
                            <div className="rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl mb-8 flex justify-center items-center backdrop-blur-sm">
                                <video
                                    src={videoData.play}
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    referrerPolicy={"no-referrer" as any}
                                    crossOrigin="anonymous"
                                    poster={videoData.cover}
                                    className="max-w-full max-h-[75vh] w-auto h-auto object-contain mx-auto rounded-xl"
                                />
                            </div>

                            <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-xl mb-8 border border-white/5">
                                <Image
                                    src={videoData.author.avatar}
                                    alt={videoData.author.nickname}
                                    width={48}
                                    height={48}
                                    className="rounded-full border border-border"
                                />
                                <div className="text-left flex-1 min-w-0">
                                    <h4 className="font-semibold truncate text-lg">{videoData.author.nickname}</h4>
                                    <p className="text-xs text-muted-foreground line-clamp-1">{videoData.title}</p>
                                </div>
                                <div className="text-right text-xs text-muted-foreground">
                                    <div className="flex items-center gap-1 justify-end">
                                        <Check className="w-3 h-3 text-green-500" /> watermark removed
                                    </div>
                                    <div>{videoData.stats.likes} likes</div>
                                </div>
                            </div>

                            <div className="grid gap-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Resolution</label>
                                        <Select value={quality} onValueChange={setQuality}>
                                            <SelectTrigger className="w-full bg-background/50 border-white/10 h-11">
                                                <SelectValue placeholder="Select Quality" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1080p">Full HD (1080p)</SelectItem>
                                                <SelectItem value="720p">HD (720p)</SelectItem>
                                                <SelectItem value="480p">SD (480p)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Format</label>
                                        <Select value={format} onValueChange={setFormat}>
                                            <SelectTrigger className="w-full bg-background/50 border-white/10 h-11">
                                                <SelectValue placeholder="Format" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="mp4">MP4 Video</SelectItem>
                                                <SelectItem value="mp3">MP3 Audio</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <Button className="w-full h-14 text-lg font-medium shadow-lg shadow-primary/25 relative z-0" asChild>
                                    <a href={downloadLink} target="_blank" rel="noopener noreferrer" download>
                                        <Download className="mr-2 h-5 w-5" />
                                        Download {format === 'mp3' ? 'Audio (MP3)' : `${quality}`}
                                    </a>
                                </Button>

                                <div className="text-center text-xs text-muted-foreground">
                                    * File will be downloaded from the original high-speed CDN
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* API Usage Section */}
            <div className="mt-16 max-w-3xl mx-auto text-left space-y-4 opacity-50 hover:opacity-100 transition-opacity">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Developer API
                </h3>
                <div className="bg-black/50 p-6 rounded-xl border border-white/10 font-mono text-sm overflow-x-auto relative group">
                    <span className="text-purple-400">GET</span> <span className="text-zinc-400">https://lucifiz.api/api/downloader/tiktok</span>
                    <br />
                    <span className="text-zinc-500 pl-4">?url=https://tiktok.com/...</span>
                    <br />
                    <span className="text-zinc-500 pl-4">&info=true</span>
                </div>
            </div>
        </div>
    );
}
