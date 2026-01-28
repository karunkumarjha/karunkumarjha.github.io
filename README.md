# Karun's Portfolio Website

A simple, elegant personal website built with [Astro](https://astro.build/).

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── public/
│   ├── images/          # Static images (add profile.jpg here)
│   └── styles/          # Global CSS
├── src/
│   ├── content/
│   │   ├── blogs/       # Blog posts (Markdown)
│   │   └── poems/       # Poems (Markdown)
│   ├── layouts/         # Page layouts
│   └── pages/           # Site pages
├── astro.config.mjs     # Astro configuration
└── package.json
```

## Adding New Content

### Adding a Blog Post

Create a new `.md` file in `src/content/blogs/`:

```markdown
---
title: "Your Blog Title"
date: 2026-01-29
description: "A brief description of your post."
draft: false
---

Your blog content here in Markdown...
```

### Adding a Poem

Create a new `.md` file in `src/content/poems/`:

```markdown
---
title: "Your Poem Title"
date: 2026-01-29
description: "Optional description"
draft: false
---

Your poem content here...
Each line will be preserved.
```

### Updating Your Profile

1. Replace `public/images/profile.jpg` with your photo
2. Edit `src/pages/index.astro` to update your bio
3. Edit `src/layouts/BaseLayout.astro` to update social links

## Customization

### Social Links

Edit the footer section in `src/layouts/BaseLayout.astro` to update your social media URLs:

```astro
<a href="https://linkedin.com/in/YOUR-USERNAME" ...>
<a href="https://github.com/YOUR-USERNAME" ...>
<a href="https://twitter.com/YOUR-USERNAME" ...>
<a href="mailto:your@email.com" ...>
```

### Colors & Styling

Edit CSS variables in `public/styles/global.css`:

```css
:root {
  --color-text: #2c2c2c;
  --color-background: #fafafa;
  --color-accent: #4a5568;
  /* ... more variables */
}
```

## Deployment to GitHub Pages

### Initial Setup

1. Create a new GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

3. In GitHub repository settings:
   - Go to **Settings > Pages**
   - Under "Build and deployment", select **GitHub Actions**
   - The workflow will run automatically on push to main

### Custom Domain (karun.me)

1. In repository **Settings > Pages > Custom domain**, enter your domain
2. Add DNS records at your domain provider:
   - For apex domain (karun.me):
     ```
     A     @     185.199.108.153
     A     @     185.199.109.153
     A     @     185.199.110.153
     A     @     185.199.111.153
     ```
   - For www subdomain (optional):
     ```
     CNAME   www   YOUR-USERNAME.github.io
     ```
3. Wait for DNS propagation (can take up to 48 hours)
4. Enable "Enforce HTTPS" in GitHub Pages settings

## License

MIT License
