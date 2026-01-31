"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy, Download, Loader2, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function QrCodePage() {
    const [text, setText] = useState("");
    const [qrData, setQrData] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const generateQR = async () => {
        if (!text.trim()) return;

        setLoading(true);
        setError("");
        setQrData(null);

        try {
            const res = await fetch(`/api/tools/qr?text=${encodeURIComponent(text)}`);
            const data = await res.json();

            if (data.success) {
                setQrData(data.result.data_url);
            } else {
                setError(data.error || "Failed to generate QR Code");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        if (!qrData) return;
        const link = document.createElement("a");
        link.href = qrData;
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="container max-w-4xl py-20 mx-auto px-4">
            <div className="flex flex-col items-center gap-8 text-center mb-12">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <QrCode size={48} />
                </div>
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
                        QR Code Generator
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                        Create instant QR codes for your links, text, or Wi-Fi.
                        Free, fast, and simple to use via our API.
                    </p>
                </div>
            </div>

            <Card className="max-w-md mx-auto border-border/50 bg-background/50 backdrop-blur-xl">
                <CardHeader>
                    <CardTitle>Generate QR Code</CardTitle>
                    <CardDescription>Enter your text or URL below</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="text">Content</Label>
                        <Input
                            id="text"
                            placeholder="https://example.com"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="bg-background/50"
                        />
                    </div>

                    <Button
                        className="w-full"
                        size="lg"
                        onClick={generateQR}
                        disabled={loading || !text}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Generating...
                            </>
                        ) : (
                            "Generate QR Code"
                        )}
                    </Button>

                    {error && (
                        <div className="p-3 text-sm text-red-500 bg-red-500/10 rounded-md">
                            {error}
                        </div>
                    )}

                    {qrData && (
                        <div className="mt-8 space-y-4 animate-in fade-in zoom-in duration-300">
                            <div className="bg-white p-4 rounded-xl mx-auto w-fit shadow-lg">
                                <Image
                                    src={qrData}
                                    alt="QR Code"
                                    width={250}
                                    height={250}
                                />
                            </div>
                            <div className="flex justify-center gap-2">
                                <Button variant="outline" onClick={handleDownload}>
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                </Button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* API Usage Section */}
            <div className="mt-16 max-w-2xl mx-auto text-left space-y-4 opacity-70 hover:opacity-100 transition-opacity">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Dev API Usage</h3>
                <div className="bg-muted/50 p-4 rounded-lg font-mono text-xs md:text-sm overflow-x-auto">
                    <span className="text-green-500">GET</span> https://lucifiz.api/api/tools/qr?text=Hello
                </div>
            </div>
        </div>
    );
}
