# Li Yin static site

This is a lightweight static website ready for GitHub Pages or Cloudflare Pages.

## Structure

- `index.html` — homepage
- `direction-leverage/index.html`
- `business-money/index.html`
- `ai-as-a-tool/index.html`
- `article-*.html` — article pages
- `styles.css`
- `script.js`
- `assets/`

## Deploy with GitHub Pages

1. Create a new GitHub repository.
2. Upload all files and folders from this project to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Set source to **Deploy from a branch**.
5. Choose `main` and `/root`.
6. Save.

## Deploy with Cloudflare Pages

1. Push this project to GitHub.
2. In Cloudflare Pages, create a new project and connect that repository.
3. For a static site, build command can be left empty.
4. Publish directory should be `/`.
5. Deploy.

## Update later

- Edit the homepage cards in `index.html`
- Add notes to topic pages in the topic folder `index.html` files
- Duplicate an article page to create a new article
