#!/usr/bin/env bash
set -euo pipefail

MSG="${1:-"update portfolio"}"

echo "==> Building..."
npm run build

echo "==> Committing and pushing to main..."
git add -A
git commit -m "$MSG" || echo "(nothing new to commit)"
git push origin main

echo ""
echo "Done. GitHub Actions will publish to:"
echo "  https://veduboy.github.io/resume"
echo ""
echo "Watch the deploy: https://github.com/veduboy/resume/actions"
