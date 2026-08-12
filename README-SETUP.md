# Quartz + Render overlay for Quantum Mechanics Notes

This package is designed for **no local installation**. It is an overlay for the official Quartz v5 GitHub template.

## Browser-only setup

1. Open the official Quartz repository on GitHub: `jackyzha0/quartz` and make sure branch **v5** is selected.
2. Click **Use this template → Create a new repository**.
3. In your new repository, delete the starter files inside `content/` if you do not want them.
4. Upload the files/folders from this overlay **into the repository root**, preserving paths:
   - `content/...`
   - `quartz.config.yaml`
   - `render.yaml`
5. Commit the upload.
6. Open Render → **New → Blueprint** → connect this GitHub repository. Render reads `render.yaml`.
7. Deploy. The build command installs dependencies, installs Quartz plugins from the config, and runs `npx quartz build`. Quartz outputs to `public/`, which Render publishes.
8. After Render gives you a URL such as `my-notes.onrender.com`, edit `quartz.config.yaml` on GitHub and replace:
   `baseUrl: YOUR-SITE.onrender.com`
   with your real hostname **without `https://`**. Commit again.

## Daily use

Edit or add Markdown files under `content/` directly on GitHub. Every commit triggers Render to rebuild and redeploy automatically.

## Important

- Quartz v5 currently requires Node.js 22+, but you do **not** need Node locally; Render performs the build.
- Math is enabled through Quartz's LaTeX/KaTeX plugin in the included config.
- The site includes Explorer, search, backlinks, graph view, dark mode, and table of contents from the Quartz default configuration.
