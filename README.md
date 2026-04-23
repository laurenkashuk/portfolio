# Lauren Kashuk Portfolio

Static two-page portfolio for GitHub Pages.

Pages:
- `/` -> `index.html` for Brand Building
- `/music-events.html` for Music + Event Marketing

Custom domain:
- `laurenkashuk.com` via `CNAME`

GitHub Pages setup:
1. Create a GitHub repository.
2. Upload all files in this folder to the repo root.
3. In GitHub, open `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the default branch and `/ (root)`.
6. Save, then wait for the site to publish.
7. In your domain DNS provider, point:
   - `A` records for `@` to GitHub Pages IPs
   - `CNAME` for `www` to `<your-github-username>.github.io`

Suggested public URLs:
- `https://laurenkashuk.com/`
- `https://laurenkashuk.com/music-events.html`
