# Changelog

All notable changes to the **Lucifiz API** project will be documented in this file.

## [1.0.0] - 2026-01-30

### 🚀 Added
- **YouTube Downloader V2**: 
  - Complete refactor of the underlying download engine using `yt-dlp`.
  - Added support for 4K and 2K video resolutions.
  - Implemented smart format merging (Video+Audio) for better compatibility.
  - Added dedicated Audio-only extraction mode.
  - robust error handling and localized binary path detection for Vercel/Local environments.
- **TikTok Downloader**:
  - New API endpoint for fetching TikTok videos without watermarks.
  - Frontend UI for TikTok downloader with video preview and quality selection.
- **UI/UX Improvements**:
  - **Aurora Background**: Added a dynamic, animated aurora effect to the main landing page and downloader pages.
  - **Footer**: Updated footer with copyright year (2026) and links to legal pages.
  - **Navigation**: Improved responsiveness and glassmorphism styling on cards and inputs.
- **Legal Pages**:
  - Added `Privacy Policy` page.
  - Added `Terms of Service` page.
  - Added `Cookie Policy` page.
  - Added `Careers` page foundation.

### 🐛 Fixed
- **YouTube 403 Forbidden Error**: Resolved issues where YouTube would block download requests by improving headers and using the latest `yt-dlp` binary handling.
- **Node.js Compatibility**: Adjusted project configuration to work seamlessly with Node.js 20+ and Bun.
- **Deployment**: Fixed binary path resolution issues when deploying to serverless environments.

### 🧹 Chore
- Initial project structure cleanup.
- Updated `README.md` with accurate project documentation.
- Configured Git repository and remote origin at `https://github.com/biezz-2/Lucifiz-API`.
