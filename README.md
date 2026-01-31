<<<<<<< HEAD
<div align="center">

  # ✦ LUCIFIZ ✦
  
  **Illuminate Your Development with Crystal Clear APIs**

  [![Next.js](https://img.shields.io/badge/Next.js-14.2.3-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18.0.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

  [Overview](#-overview) •
  [Features](#-features) •
  [Getting Started](#-getting-started) •
  [API Docs](#-api-documentation) •
  [Tech Stack](#-tech-stack)

</div>

---

## 🔮 Overview

**LUCIFIZ** is a modern, high-performance API Gateway designed to streamline your development workflow. Built with the latest web technologies, it provides a transparent, fast, and free solution for accessing powerful tools ranging from AI text generation to social media content analysis.

> "Everything you need to build faster, all in one illuminated gateway."

## ✨ Features

<table>
  <tr>
    <td width="50%">
      <h3>🤖 AI Illumination</h3>
      <p>Leverage the power of advanced models for text generation, image analysis, and smart chat completions. Integrate intelligence into your apps seamlessly.</p>
    </td>
    <td width="50%">
      <h3>⚡ Flash Downloads</h3>
      <p>High-speed media downloader supporting major platforms including TikTok, YouTube, Instagram, and Twitter/X. Retrieve content instantly without watermarks.</p>
    </td>
  </tr>
  <tr>
    <td>
      <h3>📦 Crystal Utilities</h3>
      <p>Essential developer tools at your fingertips: QR Code generator, URL shortener, Temp mail services, and secure Password generators.</p>
    </td>
    <td>
      <h3>🛡️ Developer First</h3>
      <p>CORS enabled, no rigorous authentication required for free tier, and 100 requests/min rate limit to get you started immediately.</p>
    </td>
  </tr>
</table>

## � Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/biezz-2/Lucifiz-API.git
    cd Lucifiz-API
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    bun install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    # or
    bun run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Architecture

```mermaid
graph TD
    A[Client Request] -->|REST API| B(LUCIFIZ Gateway)
    B -->|Route| C{Service Manager}
    
    subgraph Services
    C -->|AI Tasks| D[AI Models Engine]
    C -->|Media| E[Downloader Core]
    C -->|Utils| F[Utility Suite]
    end
    
    D --> G[(External AIs)]
    E --> H[(Social Platforms)]
    F --> I[(Local Processing)]
    
    style B fill:#0a0a0f,stroke:#06b6d4,stroke-width:2px
    style C fill:#0a0a0f,stroke:#8b5cf6,stroke-width:2px
```

## 🧰 Tech Stack

**Frontend & Core:**
-   **Framework:** Next.js 14+ (App Router)
-   **Styling:** Tailwind CSS, Framer Motion (Animations)
-   **Language:** TypeScript
-   **Icons:** Lucide React
-   **Tools:** yt-dlp (Media Extraction)

## 📚 API Documentation

Example usage of the LUCIFIZ API:

```bash
# Example Request to GitHub User Data Endpoint
curl https://lucifiz.api/api/v1/github/user/biezz-2
```

**Response Preview:**
```json
{
  "status": 200,
  "glow": "100%",
  "data": {
    "username": "biezz-2",
    "followers": "1.2k",
    "repos": 45
  }
}
```

## 📂 Project Structure

A detailed overview of the project's organization:

```bash
Lucifiz-API/
├── src/
│   ├── app/                 # Next.js App Router root
│   │   ├── api/             # API Routes (Downloaders, Tools)
│   │   ├── globals.css      # Global styles & Tailwind directives
│   │   └── layout.tsx       # Root layout with fonts & providers
│   ├── components/
│   │   ├── effects/         # Advanced visual effects (Planned)
│   │   │   ├── lamp.tsx            # Hero section lamp animation
│   │   │   ├── aurora.tsx          # Background aurora effect
│   │   │   └── sparkes.tsx         # Particle sparkle effects
│   │   ├── ui/              # Reusable UI components (Shadcn/UI)
│   │   │   ├── bento-grid.tsx      # Bento style layout grid
│   │   │   ├── infinite-cards.tsx  # Moving testimonials
│   │   │   └── text-generate.tsx   # Typing text effect
│   │   └── sections/        # Page sections (Hero, Features, etc.)
│   └── lib/                 # Utilities and helpers
├── public/                  # Static assets
└── tailwind.config.ts       # Tailwind & animation config
```

## 🧩 Key Components Details

### 💡 Lamp Effect (`components/effects/lamp.tsx`)
The signature visual element of the landing page. It uses `framer-motion` to create a dynamic, glowing "lamp" effect that illuminates the headline.
- **Tech**: Framer Motion, CSS Gradients
- **Usage**: Wraps the Hero section title.

### 🍱 Bento Grid (`components/ui/bento-grid.tsx`)
A modular grid layout system inspired by modern OS designs. Used to display features and services in a clean, organized, and responsive manner.
- **Tech**: CSS Grid, Tailwind Utility Classes
- **Features**: Responsive spans, hover effects.

### 📝 Text Generate Effect (`components/ui/text-generate-effect.tsx`)
An engaging text animation that progressively reveals words as if they are being typed or decoding.
- **Tech**: Framer Motion `stagger` effects.
- **Purpose**: Increases user engagement on landing.

## 🤝 Contribution

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## � License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/biezz-2">biezz-2</a></p>
  
  <a href="#top">
    <img src="https://img.shields.io/badge/Back%20to%20top-⬆️-0a0a0f?style=flat-square" alt="Back to top">
  </a>
</div>
=======
# Link in Bio boilerplate

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/biezz-2s-projects/edufest-infinity-link-in-bio-boilerplate)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/pLivEiCb5ID)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/biezz-2s-projects/edufest-infinity-link-in-bio-boilerplate](https://vercel.com/biezz-2s-projects/edufest-infinity-link-in-bio-boilerplate)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/pLivEiCb5ID](https://v0.app/chat/pLivEiCb5ID)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
>>>>>>> 5fbbb0b565f181c555ca9b2dd3e5161d22496582
