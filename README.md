# Asset Gallery

A simple asset gallery in Bloomberg style. Images and PDFs. Click to view full screen; zoom and pan images. Deploys to **Vercel** and **GitHub Pages**.

## Deploy on Vercel

1. Run `node build.js` before deploying
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Import `moh-dev-stack/image-gallery`
4. Click **Deploy**

## Deploy on GitHub Pages

1. Go to repo **Settings → Pages**
2. Under "Source", select **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)`
4. Save — your site: `https://moh-dev-stack.github.io/image-gallery/`

## How It Works

The gallery **reads whatever is in your asset folders**. No manual editing.

- **Images:** `assets/images/` — SVG, PNG, JPEG, WebP
- **PDFs:** `assets/documents/` — PDF files

**Workflow:** Add files to the folders → run `node build.js` → deploy. The build script scans the folders and generates `assets.json`; the gallery loads it and displays everything.

```bash
# After adding or removing files
node build.js
```

## Features

- **Asset Gallery** — images and PDFs
- **Images:** SVG, PNG, JPEG, WebP
- **Full-screen view:** Click any image to open it
- **Zoom in/out:** Use + and − buttons to zoom up to 5×
- **Pan:** Drag the image when zoomed to explore details
- **Reset:** Return to default view
- **Full screen:** Toggle browser fullscreen for maximum immersion
- Close with Escape key or clicking outside
- Dark theme, works on mobile
