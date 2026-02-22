#!/bin/bash
# Deploy Image Gallery to GitHub Pages
# 
# 1. Create a new repo at https://github.com/new
#    - Name: image-gallery (or any name)
#    - Public, no README (we have one)
#
# 2. Run this script with your repo URL:
#    ./deploy.sh https://github.com/YOUR_USERNAME/image-gallery.git

REPO_URL="${1:-}"

if [ -z "$REPO_URL" ]; then
  echo "Usage: ./deploy.sh https://github.com/YOUR_USERNAME/image-gallery.git"
  echo ""
  echo "Steps:"
  echo "1. Go to https://github.com/new"
  echo "2. Create repo 'image-gallery' (or any name)"
  echo "3. Do NOT add README or .gitignore"
  echo "4. Run: ./deploy.sh https://github.com/YOUR_USERNAME/image-gallery.git"
  exit 1
fi

set -e
cd "$(dirname "$0")"

git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"
git push -u origin main

echo ""
echo "✓ Pushed! Now enable GitHub Pages:"
echo "  → Settings → Pages → Source: Deploy from branch"
echo "  → Branch: main, folder: / (root)"
echo "  → Your site: https://YOUR_USERNAME.github.io/image-gallery/"
