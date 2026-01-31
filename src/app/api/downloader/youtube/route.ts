import { NextRequest, NextResponse } from "next/server";
import youtubedl from "youtube-dl-exec";
import path from "path";

// Define simplified format interface for frontend
interface FrontendFormat {
    resolution: string;
    quality: string;
    bitrate: string;
    format: string;
    size: string;
    url: string;
    hasAudio?: boolean;
    hasVideo?: boolean;
}

function formatBytes(bytes: number, decimals = 2) {
    if (!bytes) return 'N/A';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const url = searchParams.get("url");

    if (!url) {
        return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    try {
        console.log(`Fetching metadata for: ${url}`);

        // Ensure python path is set for the current process
        const binPath = path.join(process.cwd(), 'bin');
        if (process.env.PATH && !process.env.PATH.includes(binPath)) {
            process.env.PATH = `${binPath}:${process.env.PATH}`;
        }

        // Detect yt-dlp binary path manually with fallback for different environments (Bun/Node/Vercel)
        let binaryPath = path.join(process.cwd(), 'node_modules', 'youtube-dl-exec', 'bin', 'yt-dlp');

        // Fallback for specific local environment where process.cwd() might be virtualized
        const fs = require('fs');
        if (!fs.existsSync(binaryPath)) {
            const localFallback = '/home/biezz/Documents/project/website/Lucifiz-API/ke-2/node_modules/youtube-dl-exec/bin/yt-dlp';
            if (fs.existsSync(localFallback)) {
                binaryPath = localFallback;
            }
        }

        // Execute yt-dlp to get video metadata
        // Flags optimized for fetching JSON info
        const output = await youtubedl(url, {
            dumpSingleJson: true,
            noWarnings: true,
            preferFreeFormats: true,
            defaultSearch: 'ytsearch',
        }, {
            execPath: binaryPath
        } as any) as any;

        const formats: FrontendFormat[] = [];
        const audioFormats: FrontendFormat[] = [];
        const seenFormats = new Set();
        const rawFormats = (output.formats || []).reverse();

        for (const f of rawFormats) {
            // Audio Only
            if (f.acodec !== 'none' && (f.vcodec === 'none' || f.resolution === 'audio only')) {
                audioFormats.push({
                    resolution: "Audio Only",
                    quality: f.audio_ext || 'mp3',
                    bitrate: f.abr ? `${Math.round(f.abr)} kbps` : 'N/A',
                    format: f.ext,
                    size: formatBytes(f.filesize || f.filesize_approx),
                    url: f.url,
                    hasAudio: true,
                    hasVideo: false
                });
                continue;
            }

            // Video (prefer formats with both, or high quality video-only)
            if (f.vcodec !== 'none') {
                const res = f.format_note || (f.height ? `${f.height}p` : '') || 'Unknown';
                const uniqueKey = `${res}-${f.ext}`;

                if (seenFormats.has(uniqueKey)) continue;
                seenFormats.add(uniqueKey);

                formats.push({
                    resolution: res.includes('p') ? res : `${res}p`,
                    quality: res,
                    bitrate: f.tbr ? `${Math.round(f.tbr)} kbps` : 'N/A',
                    format: f.ext,
                    size: formatBytes(f.filesize || f.filesize_approx),
                    url: f.url,
                    hasAudio: f.acodec !== 'none',
                    hasVideo: true
                });
            }
        }

        // Determine best preview
        const bestPreview = output.formats.find((f: any) => f.acodec !== 'none' && f.vcodec !== 'none' && f.ext === 'mp4')
            || output.formats.find((f: any) => f.ext === 'mp4');

        return NextResponse.json({
            success: true,
            result: {
                title: output.title,
                thumbnail: output.thumbnail,
                duration: new Date(output.duration * 1000).toISOString().substr(11, 8),
                author: output.uploader,
                views: output.view_count?.toLocaleString() || '0',
                formats: formats,
                audio: audioFormats,
                previewUrl: bestPreview ? bestPreview.url : null,
                description: output.description
            }
        });

    } catch (error: any) {
        console.error("Youtube-DL Error:", error);
        return NextResponse.json({
            error: error.message || "Failed to fetch video information."
        }, { status: 500 });
    }
}
