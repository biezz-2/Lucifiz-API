import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";

// Primary Strategy: SSSTik.io Scraper
async function downloadFromSSSTik(url: string) {
    try {
        console.log("Attempting SSSTik download...");
        const mainPageResponse = await axios.get("https://ssstik.io/en", {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            },
            timeout: 5000
        });

        const html = mainPageResponse.data;
        const tokenMatch = html.match(/s_tt\s*=\s*["']([^"']+)["']/);
        if (!tokenMatch) throw new Error("Token not found");
        const token = tokenMatch[1];

        const params = new URLSearchParams();
        params.append("id", url);
        params.append("locale", "en");
        params.append("tt", token);

        const postResponse = await axios.post("https://ssstik.io/abc?url=dl", params, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "HX-Request": "true",
                "HX-Target": "target",
                "HX-Current-URL": "https://ssstik.io/en",
                "Origin": "https://ssstik.io",
                "Referer": "https://ssstik.io/en",
                "Cookie": mainPageResponse.headers["set-cookie"]?.join("; ") || "",
            },
            responseType: 'text',
            timeout: 10000
        });

        const $ = cheerio.load(postResponse.data);
        const downloadLink = $("a.download_link, a.pure-button").first().attr("href");
        const mp3Link = $("a[href*='mp3']").attr("href") || $("a:contains('MP3')").attr("href");

        if (!downloadLink) throw new Error("No download link in SSSTik response");

        const cover = $("img.result_author").attr("src") || $("img").first().attr("src");
        const authorName = $("h2").text().trim() || "TikTok User";
        const title = $("p.maintext").text().trim() || "";

        return {
            title,
            cover: cover || "",
            play: downloadLink,
            music: mp3Link || "#",
            author: { nickname: authorName, avatar: cover || "" },
            stats: { plays: 0, likes: 0 },
            source: "ssstik"
        };
    } catch (error) {
        console.warn("SSSTik Strategy Failed:", error instanceof Error ? error.message : error);
        return null;
    }
}

// Fallback Strategy: TikWM API
async function downloadFromTikWM(url: string) {
    try {
        console.log("Attempting TikWM fallback...");
        const res = await axios.post("https://www.tikwm.com/api/", { url: url }, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            },
            timeout: 10000
        });

        const data = res.data.data;
        if (!data) throw new Error("TikWM returned no data");

        return {
            title: data.title,
            cover: data.cover,
            play: data.play,
            music: data.music,
            author: {
                nickname: data.author.nickname,
                avatar: data.author.avatar
            },
            stats: {
                plays: data.play_count,
                likes: data.digg_count
            },
            source: "tikwm"
        };
    } catch (error) {
        console.error("TikWM Strategy Failed:", error instanceof Error ? error.message : error);
        return null;
    }
}

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const url = searchParams.get("url");

    if (!url) {
        return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Try SSSTik first (Requested by user)
    let result = await downloadFromSSSTik(url);

    // If SSSTik fails, use TikWM
    if (!result) {
        result = await downloadFromTikWM(url);
    }

    if (!result) {
        return NextResponse.json(
            { error: "Failed to download video. Server is busy, please try again later." },
            { status: 500 }
        );
    }

    return NextResponse.json({
        success: true,
        result: result
    });
}
