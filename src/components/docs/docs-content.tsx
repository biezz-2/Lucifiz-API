export const docsContent: Record<string, string> = {
  introduction: `
# Introduction

LUCIFIZ API is a modern, high-performance API Gateway designed to streamline your development workflow. Built with the latest web technologies, it provides transparent, fast, and free access to powerful tools.

## What is LUCIFIZ?

LUCIFIZ is a comprehensive API gateway that provides:

- **AI-Powered Features**: Text generation, image analysis, and chat completions
- **Media Downloaders**: High-speed downloads from TikTok, YouTube, Instagram, and Twitter/X
- **Developer Utilities**: QR code generation, URL shortening, temporary email, and password generation
- **Media Processing**: Image compression and video format conversion
- **Dev Tools**: GitHub user info, NPM package stats, DNS lookup, and SSL checking
- **99.9% Uptime**: Global CDN distribution for lowest latency

## Why Choose LUCIFIZ?

✅ **Free to Use**: No credit card required for basic tier
✅ **No Authentication**: Get started immediately
✅ **CORS Enabled**: Build client-side applications
✅ **Fast Response**: Optimized for speed
✅ **Reliable**: 99.9% uptime SLA
✅ **Well Documented**: Comprehensive API reference

## Architecture

LUCIFIZ is built on a microservices architecture designed for:

- **Scalability**: Horizontal scaling based on demand
- **Reliability**: Multiple availability zones
- **Performance**: Edge caching and CDN distribution
- **Security**: Rate limiting and input validation

## Tech Stack

- **Backend**: Node.js with Express
- **Database**: PostgreSQL with Redis caching
- **Queue**: RabbitMQ for async processing
- **CDN**: Global edge caching
- **Monitoring**: Real-time metrics and alerting
  `,

  "quick-start": `
# Quick Start

Get started with LUCIFIZ API in just a few minutes.

## Base URL

All API requests use the following base URL:

\`\`\`bash
https://zelapioffciall.koyeb.app/api/v1
\`\`\`

## First Request

Here's a simple example to make your first API call:

### cURL

\`\`\`bash
curl https://zelapioffciall.koyeb.app/api/v1/github/user/biezz-2
\`\`\`

### JavaScript (Fetch)

\`\`\`javascript
fetch("https://zelapioffciall.koyeb.app/api/v1/github/user/biezz-2")
  .then(response => response.json())
  .then(data => console.log(data))
\`\`\`

### Python (requests)

\`\`\`python
import requests

response = requests.get("https://zelapioffciall.koyeb.app/api/v1/github/user/biezz-2")
print(response.json())
\`\`\`

## Response

\`\`\`json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "username": "biezz-2",
    "followers": "1.2k",
    "repos": 45
  }
}
\`\`\`

## Next Steps

1. Explore our API endpoints in the documentation
2. Sign up for a Pro account for higher limits
3. Join our Discord community for support
4. Check out the GitHub repository for SDKs
  `,

  authentication: `
# Authentication

LUCIFIZ API is designed to be developer-friendly with minimal barriers to entry.

## Free Tier

For the free tier, **no authentication is required**. Simply make requests to any endpoint within the rate limits.

### Rate Limits

- **Free Tier**: 100 requests per minute
- **Pro Tier**: 10,000 requests per minute
- **Enterprise**: Custom limits

### Rate Limit Headers

All responses include rate limit headers:

\`\`\`
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1234567890
\`\`\`

## Pro Tier

For higher rate limits and priority access, get an API key:

### Getting Your API Key

1. Sign up at [LUCIFIZ Dashboard](https://zelapioffciall.koyeb.app)
2. Navigate to API Keys section
3. Generate a new key

### Using Your API Key

Include your API key in the header:

\`\`\`bash
curl -H "X-API-Key: YOUR_API_KEY" https://zelapioffciall.koyeb.app/api/v1/github/user/biezz-2
\`\`\`

\`\`\`javascript
fetch("https://zelapioffciall.koyeb.app/api/v1/github/user/biezz-2", {
  headers: {
    "X-API-Key": "YOUR_API_KEY"
  }
})
\`\`\`

### API Key Security

🔒 **Important Security Guidelines**:

- Never share your API key publicly
- Don't commit API keys to version control
- Use environment variables to store API keys
- Rotate API keys regularly
- Use different keys for different environments
  `,

  errors: `
# Error Handling

Proper error handling is essential for a robust application.

## Error Response Format

All errors follow a consistent format:

\`\`\`json
{
  "status": 400,
  "error": "Bad Request",
  "message": "Invalid parameter provided",
  "details": {
    "field": "username",
    "reason": "Username cannot be empty"
  }
}
\`\`\`

## Common HTTP Status Codes

| Code | Status | Description |
|------|---------|-------------|
| 200 | OK | Request succeeded |
| 201 | Created | Resource created successfully |
| 400 | Bad Request | Invalid request parameters |
| 401 | Unauthorized | Invalid or missing API key |
| 403 | Forbidden | Access denied |
| 404 | Not Found | Resource not found |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |

## Handling 429 (Rate Limit)

When you exceed rate limits, implement exponential backoff:

\`\`\`javascript
async function makeRequestWithRetry(url, options = {}, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    const response = await fetch(url, options);
    
    if (response.status === 429) {
      const retryAfter = parseInt(response.headers.get('Retry-After') || '60');
      const waitTime = Math.pow(2, i) * 1000; // Exponential backoff
      
      console.log(\`Rate limited. Waiting \${waitTime}ms...\`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
      continue;
    }
    
    if (response.ok) {
      return await response.json();
    }
  }
  
  throw new Error('Max retries exceeded');
}
\`\`\`

## Best Practices

1. **Always Check Status Codes**: Handle different responses appropriately
2. **Log Errors**: Implement comprehensive error logging
3. **User Feedback**: Show meaningful error messages to users
4. **Retry Logic**: Implement smart retry mechanisms
5. **Monitor**: Track error rates and patterns
  `,

  "text-generation": `
# Text Generation

Generate human-like text using advanced AI models.

## Endpoint

\`\`\`http
POST /api/v1/ai/text/generate
\`\`\`

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|-------|----------|-------------|
| prompt | string | Yes | The text prompt for generation |
| model | string | No | AI model to use (default: gpt-3.5-turbo) |
| max_tokens | integer | No | Maximum tokens (default: 100, max: 2048) |
| temperature | number | No | Sampling temperature (default: 0.7, range: 0-2) |
| top_p | number | No | Nucleus sampling (default: 1.0, range: 0-1) |

## Request Example

\`\`\`bash
curl -X POST https://zelapioffciall.koyeb.app/api/v1/ai/text/generate \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Explain quantum computing in simple terms",
    "max_tokens": 150,
    "temperature": 0.7
  }'
\`\`\`

## Response

\`\`\`json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "id": "gen_abc123xyz",
    "model": "gpt-3.5-turbo",
    "text": "Quantum computing is like having a super-powered calculator that can explore many solutions simultaneously...",
    "usage": {
      "prompt_tokens": 25,
      "completion_tokens": 150,
      "total_tokens": 175
    },
    "finish_reason": "stop"
  }
}
\`\`\`

## Use Cases

- **Content Creation**: Blog posts, articles, social media content
- **Customer Support**: Auto-replies, FAQ generation
- **Summarization**: Document summarization, meeting notes
- **Translation**: Multi-language translation
- **Code Generation**: Code snippets, explanations
  `,

  "image-analysis": `
# Image Analysis

Analyze images using advanced computer vision models.

## Endpoint

\`\`\`http
POST /api/v1/ai/image/analyze
\`\`\`

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|-------|----------|-------------|
| image | string | Yes | Base64 encoded image or URL |
| analysis_type | string | No | Type of analysis (default: general) |
| detail | boolean | No | Include detailed analysis (default: false) |

## Analysis Types

- **general**: General image description
- **objects**: Detect and identify objects
- **text**: Extract text (OCR)
- **faces**: Detect and analyze faces
- **colors**: Extract dominant colors
- **moderation**: Check for inappropriate content

## Request Example

\`\`\`bash
curl -X POST https://zelapioffciall.koyeb.app/api/v1/ai/image/analyze \\
  -H "Content-Type: application/json" \\
  -d '{
    "image": "https://example.com/image.jpg",
    "analysis_type": "objects"
  }'
\`\`\`

## Response

\`\`\`json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "objects": [
      {
        "name": "person",
        "confidence": 0.98,
        "bounding_box": [10, 20, 100, 150]
      }
    ],
    "total_objects": 2
  }
}
\`\`\`
  `,

  "chat-completion": `
# Chat Completion

Build conversational AI interfaces with multi-turn chat support.

## Endpoint

\`\`\`http
POST /api/v1/ai/chat/completions
\`\`\`

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|-------|----------|-------------|
| messages | array | Yes | Array of message objects |
| model | string | No | AI model (default: gpt-3.5-turbo) |
| temperature | number | No | Sampling temperature (default: 0.7) |
| max_tokens | integer | No | Maximum tokens (default: 100) |
| stream | boolean | No | Enable streaming (default: false) |

## Message Format

\`\`\`json
{
  "role": "user|assistant|system",
  "content": "string"
}
\`\`\`

## Request Example

\`\`\`bash
curl -X POST https://zelapioffciall.koyeb.app/api/v1/ai/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Hello!"}
    ]
  }'
\`\`\`

## Use Cases

- **Chatbots**: Customer service, support, Q&A
- **Virtual Assistants**: Personal productivity assistants
- **Educational**: Tutoring and learning helpers
- **Creative Writing**: Collaborative storytelling
- **Code Assistant**: Programming help and code review
  `,

  "tiktok-downloader": `
# TikTok Downloader

Download TikTok videos without watermarks.

## Endpoint

\`\`\`http
GET /api/v1/download/tiktok
\`\`\`

## Query Parameters

| Parameter | Type | Required | Description |
|-----------|-------|----------|-------------|
| url | string | Yes | TikTok video URL |
| format | string | No | Output format (default: mp4, options: mp4, mp3) |
| quality | string | No | Video quality (default: high) |

## Request Example

\`\`\`bash
curl "https://zelapioffciall.koyeb.app/api/v1/download/tiktok?url=https://www.tiktok.com/@user/video/123456"
\`\`\`

## Response

\`\`\`json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "id": "123456789",
    "title": "Amazing TikTok Video",
    "video": {
      "url": "https://cdn.example.com/video.mp4",
      "thumbnail": "https://cdn.example.com/thumb.jpg",
      "duration": 15
    },
    "download_url": "https://zelapioffciall.koyeb.app/download/abc123.mp4",
    "expires_in": 3600
  }
}
\`\`\`
  `,

  "youtube-downloader": `
# YouTube Downloader

Download YouTube videos in various formats and qualities.

## Endpoint

\`\`\`http
GET /api/v1/download/youtube
\`\`\`

## Query Parameters

| Parameter | Type | Required | Description |
|-----------|-------|----------|-------------|
| url | string | Yes | YouTube video URL |
| format | string | No | Output format (default: mp4) |
| quality | string | No | Video quality (default: 1080p) |

## Request Example

\`\`\`bash
curl "https://zelapioffciall.koyeb.app/api/v1/download/youtube?url=https://www.youtube.com/watch?v=dQw4w9WgXcQ"
\`\`\`

## Response

\`\`\`json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "id": "dQw4w9WgXcQ",
    "title": "Video Title",
    "video": {
      "url": "https://cdn.example.com/video.mp4",
      "duration": 212
    },
    "download_url": "https://zelapioffciall.koyeb.app/download/abc123.mp4",
    "expires_in": 3600
  }
}
\`\`\`
  `,

  "instagram-downloader": `
# Instagram Downloader

Download Instagram posts, reels, and stories.

## Endpoint

\`\`\`http
GET /api/v1/download/instagram
\`\`\`

## Query Parameters

| Parameter | Type | Required | Description |
|-----------|-------|----------|-------------|
| url | string | Yes | Instagram post/reel/story URL |
| format | string | No | Output format (default: mp4) |

## Request Example

\`\`\`bash
curl "https://zelapioffciall.koyeb.app/api/v1/download/instagram?url=https://www.instagram.com/p/ABC123/"
\`\`\`

## Response

\`\`\`json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "id": "ABC123",
    "type": "post",
    "media": [
      {
        "type": "image",
        "url": "https://cdn.example.com/image.jpg"
      }
    ],
    "download_url": "https://zelapioffciall.koyeb.app/download/abc123.jpg",
    "expires_in": 3600
  }
}
\`\`\`
  `,

  "twitter-downloader": `
# Twitter/X Downloader

Download tweets, images, and videos from Twitter/X.

## Endpoint

\`\`\`http
GET /api/v1/download/twitter
\`\`\`

## Query Parameters

| Parameter | Type | Required | Description |
|-----------|-------|----------|-------------|
| url | string | Yes | Tweet URL |

## Request Example

\`\`\`bash
curl "https://zelapioffciall.koyeb.app/api/v1/download/twitter?url=https://twitter.com/user/status/123456789"
\`\`\`

## Response

\`\`\`json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "id": "123456789",
    "text": "This is an amazing tweet! #example",
    "media": [
      {
        "type": "image",
        "url": "https://cdn.example.com/image.jpg"
      }
    ],
    "download_url": "https://zelapioffciall.koyeb.app/download/abc123.jpg",
    "expires_in": 3600
  }
}
\`\`\`
  `,

  "qr-generator": `
# QR Code Generator

Generate QR codes for URLs, text, or contact information.

## Endpoint

\`\`\`http
POST /api/v1/utils/qr/generate
\`\`\`

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|-------|----------|-------------|
| content | string | Yes | Content to encode in QR |
| size | integer | No | QR code size (default: 300) |
| color | string | No | QR code color (default: #000000) |
| background | string | No | Background color (default: #FFFFFF) |

## Request Example

\`\`\`bash
curl -X POST https://zelapioffciall.koyeb.app/api/v1/utils/qr/generate \\
  -H "Content-Type: application/json" \\
  -d '{
    "content": "https://example.com",
    "size": 300
  }'
\`\`\`

## Response

\`\`\`json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "qr_code": "iVBORw0KGgoAAAANSUhEUgAA...",
    "size": 300,
    "content": "https://example.com",
    "download_url": "https://zelapioffciall.koyeb.app/qr/abc123.png",
    "expires_in": 3600
  }
}
\`\`\`
  `,

  "url-shortener": `
# URL Shortener

Create short, memorable URLs with analytics.

## Endpoint

\`\`\`http
POST /api/v1/utils/shorten
\`\`\`

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|-------|----------|-------------|
| url | string | Yes | Original URL to shorten |
| custom_alias | string | No | Custom short alias |
| expire_in | integer | No | Expiration time in seconds |

## Request Example

\`\`\`bash
curl -X POST https://zelapioffciall.koyeb.app/api/v1/utils/shorten \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com/very/long/url",
    "custom_alias": "mylink"
  }'
\`\`\`

## Response

\`\`\`json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "short_url": "https://zelapioffciall.koyeb.app/s/mylink",
    "original_url": "https://example.com/very/long/url",
    "alias": "mylink",
    "clicks": 0,
    "qr_code": "https://zelapioffciall.koyeb.app/qr/mylink"
  }
}
\`\`\`
  `,

  "temp-email": `
# Temporary Email

Generate temporary email addresses for testing and privacy.

## Endpoint

\`\`\`http
POST /api/v1/utils/temp-email/create
\`\`\`

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|-------|----------|-------------|
| domain | string | No | Preferred domain |
| expire_in | integer | No | Expiration time (default: 3600) |

## Request Example

\`\`\`bash
curl -X POST https://zelapioffciall.koyeb.app/api/v1/utils/temp-email/create \\
  -H "Content-Type: application/json" \\
  -d '{
    "expire_in": 3600
  }'
\`\`\`

## Response

\`\`\`json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "email": "abc123@temp.zelapioffciall.koyeb.app",
    "expires_at": "2024-01-01T01:00:00Z"
  }
}
\`\`\`
  `,

  "password-generator": `
# Password Generator

Generate secure, random passwords.

## Endpoint

\`\`\`http
POST /api/v1/utils/password/generate
\`\`\`

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|-------|----------|-------------|
| length | integer | No | Password length (default: 16, max: 128) |
| uppercase | boolean | No | Include uppercase (default: true) |
| lowercase | boolean | No | Include lowercase (default: true) |
| numbers | boolean | No | Include numbers (default: true) |
| symbols | boolean | No | Include symbols (default: true) |

## Request Example

\`\`\`bash
curl -X POST https://zelapioffciall.koyeb.app/api/v1/utils/password/generate \\
  -H "Content-Type: application/json" \\
  -d '{
    "length": 24,
    "uppercase": true,
    "numbers": true,
    "symbols": true
  }'
\`\`\`

## Response

\`\`\`json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "password": "Kx#9mP$vL2qR!7nW@tF",
    "length": 24,
    "strength": "very strong",
    "entropy": 156
  }
}
\`\`\`
  `,

  "image-compression": `
# Image Compression

Compress images without significant quality loss.

## Endpoint

\`\`\`http
POST /api/v1/media/image/compress
\`\`\`

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|-------|----------|-------------|
| image | string | Yes | Base64 encoded image or URL |
| quality | integer | No | Compression quality (default: 80, range: 1-100) |
| format | string | No | Output format (default: jpeg) |

## Request Example

\`\`\`bash
curl -X POST https://zelapioffciall.koyeb.app/api/v1/media/image/compress \\
  -H "Content-Type: application/json" \\
  -d '{
    "image": "data:image/jpeg;base64,/9j/4AAQ...",
    "quality": 75
  }'
\`\`\`

## Response

\`\`\`json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "compressed_image": "iVBORw0KGgoAAAANSUhEUgAA...",
    "original_size": 5242880,
    "compressed_size": 2097152,
    "compression_ratio": 0.6,
    "download_url": "https://zelapioffciall.koyeb.app/download/abc123.jpg",
    "expires_in": 3600
  }
}
\`\`\`
  `,

  "video-converter": `
# Video Format Converter

Convert videos between different formats.

## Endpoint

\`\`\`http
POST /api/v1/media/video/convert
\`\`\`

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|-------|----------|-------------|
| video | string | Yes | Base64 encoded video or URL |
| output_format | string | Yes | Output format (mp4, webm, mov) |
| quality | string | No | Output quality (default: high) |

## Request Example

\`\`\`bash
curl -X POST https://zelapioffciall.koyeb.app/api/v1/media/video/convert \\
  -H "Content-Type: application/json" \\
  -d '{
    "video": "https://example.com/video.mp4",
    "output_format": "webm",
    "quality": "high"
  }'
\`\`\`

## Response

\`\`\`json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "download_url": "https://zelapioffciall.koyeb.app/download/abc123.webm",
    "original_format": "mp4",
    "output_format": "webm",
    "duration": 300,
    "file_size": 52428800,
    "expires_in": 3600
  }
}
\`\`\`
  `,

  "github-api": `
# GitHub API

Get GitHub user and repository information.

## Endpoint

\`\`\`http
GET /api/v1/github/user/:username
\`\`\`

## Request Example

\`\`\`bash
curl "https://zelapioffciall.koyeb.app/api/v1/github/user/biezz-2"
\`\`\`

## Response

\`\`\`json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "username": "biezz-2",
    "name": "User Name",
    "bio": "Full-stack developer",
    "avatar": "https://github.com/user.png",
    "followers": 1200,
    "following": 200,
    "public_repos": 45,
    "total_stars": 500,
    "top_languages": ["TypeScript", "JavaScript", "Python"],
    "contribution_graph": {
      "total_contributions": 1500,
      "streak": 30
    }
  }
}
\`\`\`
  `,

  "npm-api": `
# NPM Package Stats

Get NPM package information and statistics.

## Endpoint

\`\`\`http
GET /api/v1/npm/package/:name
\`\`\`

## Request Example

\`\`\`bash
curl "https://zelapioffciall.koyeb.app/api/v1/npm/package/react"
\`\`\`

## Response

\`\`\`json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "name": "react",
    "version": "18.2.0",
    "description": "A JavaScript library for building user interfaces",
    "downloads": {
      "last_day": 5000000,
      "last_week": 30000000,
      "last_month": 120000000
    },
    "keywords": ["react", "ui", "framework"]
  }
}
\`\`\`
  `,

  "dns-lookup": `
# DNS Lookup

Query DNS records for any domain.

## Endpoint

\`\`\`http
GET /api/v1/dns/lookup
\`\`\`

## Query Parameters

| Parameter | Type | Required | Description |
|-----------|-------|----------|-------------|
| domain | string | Yes | Domain to query |
| type | string | No | Record type (default: A) |

## Record Types

- \`A\` - IPv4 address
- \`AAAA\` - IPv6 address
- \`CNAME\` - Canonical name
- \`MX\` - Mail exchange
- \`TXT\` - Text record

## Request Example

\`\`\`bash
curl "https://zelapioffciall.koyeb.app/api/v1/dns/lookup?domain=example.com&type=A"
\`\`\`

## Response

\`\`\`json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "domain": "example.com",
    "type": "A",
    "records": [
      {
        "value": "93.184.216.34",
        "ttl": 300
      }
    ],
    "query_time": "15ms"
  }
}
\`\`\`
  `,

  "ssl-checker": `
# SSL Certificate Checker

Check SSL certificate information for any domain.

## Endpoint

\`\`\`http
GET /api/v1/ssl/check
\`\`\`

## Query Parameters

| Parameter | Type | Required | Description |
|-----------|-------|----------|-------------|
| domain | string | Yes | Domain to check |

## Request Example

\`\`\`bash
curl "https://zelapioffciall.koyeb.app/api/v1/ssl/check?domain=example.com"
\`\`\`

## Response

\`\`\`json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "domain": "example.com",
    "valid": true,
    "issuer": "Let's Encrypt",
    "issued_at": "2024-01-01T00:00:00Z",
    "expires_at": "2024-04-01T00:00:00Z",
    "days_until_expiry": 90,
    "grade": "A+"
  }
}
\`\`\`
  `,

  status: `
# API Status

Check the current status of all LUCIFIZ services.

## Endpoint

\`\`\`http
GET /api/v1/status
\`\`\`

## Request Example

\`\`\`bash
curl "https://zelapioffciall.koyeb.app/api/v1/status"
\`\`\`

## Response

\`\`\`json
{
  "status": "200",
  "glow": "100%",
  "data": {
    "overall": "operational",
    "services": {
      "ai_illumination": "operational",
      "flash_downloads": "operational",
      "crystal_utilities": "operational",
      "light_media": "operational",
      "dev_spark": "operational",
      "cdn": "operational"
    },
    "uptime": {
      "last_24h": 99.95,
      "last_7d": 99.97,
      "last_30d": 99.98,
      "last_90d": 99.99
    },
    "response_time": {
      "average": 45,
      "p95": 80,
      "p99": 120
    }
  }
}
\`\`\`
  `,

  "rate-limits": `
# Rate Limits

Understand and manage API rate limits.

## Rate Limit Tiers

### Free Tier

| Service | Requests/Minute |
|----------|----------------|
| AI Illumination | 50 |
| Flash Downloads | 20 |
| Crystal Utilities | 100 |
| Light Media | 50 |
| Dev Spark | 100 |

### Pro Tier

| Service | Requests/Minute |
|----------|----------------|
| AI Illumination | 1,000 |
| Flash Downloads | 500 |
| Crystal Utilities | 5,000 |
| Light Media | 1,000 |
| Dev Spark | 2,000 |

### Enterprise

Custom rate limits available upon request.

## Rate Limit Headers

All responses include:

\`\`\`
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1704067200
\`\`\`

## Handling Rate Limits

When you receive a 429 status:

1. Wait for the \`Retry-After\` header value
2. Implement exponential backoff
3. Cache responses to reduce requests
4. Consider upgrading to Pro tier

## Best Practices

1. **Monitor Headers**: Check rate limit on every response
2. **Implement Backoff**: Exponential backoff for retries
3. **Cache Responses**: Reduce API calls with caching
4. **Batch Requests**: Combine operations when possible
5. **Upgrade Plan**: Higher tiers for more volume
  `,
};
