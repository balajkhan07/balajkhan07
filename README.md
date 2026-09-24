# Balaj Khan — Personal Portfolio

Senior Full Stack Engineer portfolio. Live at **https://balajkhan.github.io**

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion
- Lucide Icons

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to https://balajkhan.github.io

GitHub only serves the root `username.github.io` URL from a repo named **`balajkhan.github.io`**.

### 1. Create the repository

On GitHub (logged in as `balajkhan`):

1. Click **New repository**
2. Repository name: **`balajkhan.github.io`** (must match exactly)
3. Keep it **Public**
4. Do **not** add a README / license (this project already has files)
5. Create the repository

### 2. Push this project

From this folder:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/balajkhan/balajkhan.github.io.git
git push -u origin main
```

If the remote already exists, use:

```bash
git remote set-url origin https://github.com/balajkhan/balajkhan.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages (Actions)

1. Open the repo on GitHub
2. Go to **Settings → Pages**
3. Under **Build and deployment → Source**, choose **GitHub Actions**
4. Open the **Actions** tab and confirm the **Deploy to GitHub Pages** workflow runs (it also runs on every push to `main`)

### 4. Visit the site

After the workflow finishes (usually 1–2 minutes):

**https://balajkhan.github.io**

If the page is blank or assets 404, wait a minute and hard-refresh. The first deploy can take a short while to propagate.

### Notes

- Vite `base` is set to `/` for this user site (see `vite.config.ts` and `.github/workflows/deploy.yml`).
- Content edits live in **`src/config/site.ts`**.
- Theme preference is stored in `localStorage` and falls back to the system theme.
