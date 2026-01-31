import { NextRequest, NextResponse } from 'next/server';
import QRCode from 'qrcode';

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const text = searchParams.get('url') || searchParams.get('text');

    if (!text) {
        return NextResponse.json({ error: 'Text or URL is required' }, { status: 400 });
    }

    try {
        const dataUrl = await QRCode.toDataURL(text, {
            width: 400,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#ffffff',
            },
        });

        return NextResponse.json({
            success: true,
            result: {
                data_url: dataUrl,
                original_text: text
            }
        });
    } catch (error) {
        console.error('QR Generation Error:', error);
        return NextResponse.json({ error: 'Failed to generate QR code' }, { status: 500 });
    }
}
