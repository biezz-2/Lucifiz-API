import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
    const url = req.nextUrl.searchParams.get('url');
    const filename = req.nextUrl.searchParams.get('filename') || 'download.mp4';

    if (!url) {
        return NextResponse.json({ error: 'Missing URL parameter' }, { status: 400 });
    }

    try {
        // Fetch the remote file as a stream
        const response = await axios.get(url, {
            responseType: 'stream',
            headers: {
                // Mimic a browser properly to avoid some blocks, though usually IP binding is the main check
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            },
            timeout: 30000 // 30s connection timeout
        });

        // Prepare headers for the client response
        const headers = new Headers();
        headers.set('Content-Disposition', `attachment; filename="${filename}"`);
        if (response.headers['content-type']) {
            headers.set('Content-Type', response.headers['content-type']);
        }
        if (response.headers['content-length']) {
            headers.set('Content-Length', response.headers['content-length']);
        }

        // Return the stream directly using NextResponse
        // @ts-ignore - axios stream is compatible with Web Streams in this context or readable
        return new NextResponse(response.data, {
            status: 200,
            headers,
        });

    } catch (error: any) {
        console.error('Proxy Error:', error.message);
        return NextResponse.json({ error: 'Failed to proxy download' }, { status: 502 });
    }
}
