# Image Gallery

A simple image gallery. Click any image to view it full screen, then zoom and pan to explore in detail. Deploys to **Vercel** and **GitHub Pages**.

## Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project**
3. Import `moh-dev-stack/image-gallery`
4. Click **Deploy** (no build config needed)
5. Your site: `https://image-gallery-xxx.vercel.app`

## Deploy on GitHub Pages

1. Go to repo **Settings → Pages**
2. Under "Source", select **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)`
4. Save — your site: `https://moh-dev-stack.github.io/image-gallery/`

## Supported Image Formats

All common formats work: **SVG**, **PNG**, **JPEG** (JPG), and **WebP**. Add your files to `assets/images/` and reference them in the gallery.

## Adding Your Own Images

1. Add image files to `assets/images/` (e.g. `photo.png`, `diagram.jpg`, `logo.svg`)
2. Edit `index.html` and add new gallery items:

```html
<article class="gallery-item" data-src="assets/images/your-image.png" data-alt="Your caption">
  <img src="assets/images/your-image.png" alt="Your caption">
  <span class="caption">Your caption</span>
</article>
```

Use `data-src` for the full-size image shown in the lightbox (can be higher resolution). Use `src` on the `<img>` for the grid thumbnail.

## Features

- **Image Gallery** title and responsive grid layout
- **All formats:** SVG, PNG, JPEG, WebP
- **Full-screen view:** Click any image to open it
- **Zoom in/out:** Use + and − buttons to zoom up to 5×
- **Pan:** Drag the image when zoomed to explore details
- **Reset:** Return to default view
- **Full screen:** Toggle browser fullscreen for maximum immersion
- Close with Escape key or clicking outside
- Dark theme, works on mobile
