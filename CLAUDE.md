# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run develop    # Start dev server at http://localhost:8000
npm run build      # Production build
npm run serve      # Serve the production build locally
npm run clean      # Clear Gatsby cache and public folder (run this when builds behave unexpectedly)
npm run format     # Format all JS/JSX/TS/TSX/JSON/MD files with Prettier
```

No test suite is configured (`npm test` exits with an error).

## Architecture

This is a **Gatsby 2 static site** — Aurélie Mlynarz's personal portfolio, deployed on Netlify at `aureliemlynarz.com`.

### Page structure

The site is a **single-page application** (`src/pages/index.js`) with four anchor sections: `#welcome`, `#parcours`, `#projets`, `#contact`. Navigation within the page uses `react-scroll`; cross-page navigation uses Gatsby's `<Link>`.

Project detail pages are **dynamically generated** from Markdown/MDX files. The flow is:

1. `gatsby-source-filesystem` reads `src/content/` and `src/images/`.
2. `gatsby-plugin-mdx` + `gatsby-transformer-remark` parse `.md`/`.mdx` files.
3. `gatsby-node.js` creates a page at `/projets/<slug>/` for each content file, using `src/template/posts.js` as the template.

### Adding or removing a project

- **Content file**: Add/remove a `.md` file in `src/content/`. Frontmatter fields: `title`, `date`, `img` (relative path to header image in `src/content/articles/`).
- **Project card**: Manually add/remove the corresponding card in `src/components/ProjectsCards.jsx` — this component is hardcoded, not queried from GraphQL.
- **Header image component**: Each project card uses a dedicated Gatsby image component in `src/components/GatsbyImages/`. Add or remove the matching file there.

### Styling

Styles live in `src/scss/index.scss` (compiled to `src/css/index.css`). Utilities are split into:
- `_variable.scss` — color/spacing variables
- `_mixins.scss` — reusable mixins
- `_responsive.scss` — breakpoints
- `_fonts.scss` — Comfortaa font face declarations

The layout wrapper (`src/components/layout.js`) imports `layout.css` globally.

### Icons

Two icon systems coexist:
- **FontAwesome** (`@fortawesome/react-fontawesome`) — brands and solid icons registered in `gatsby-browser.js` via `library.add(...)`. Add new icons there before using them.
- **Iconify** (`@iconify/react`) — used for tech logos not available in FontAwesome (Gatsby, GraphQL, MongoDB, etc.).

### Timeline

`src/components/TimeLine.jsx` is hardcoded — it does not pull from a data source. Update it directly to add/modify career entries.

### Analytics & SEO

Google Analytics (gtag `G-X9K4ZGPXV9`) is loaded via `gatsby-plugin-google-gtag` and gated behind GDPR consent with `gatsby-plugin-gdpr-cookies` (cookie name: `ga-cookie-secure`). The `src/components/seo.js` component uses `react-helmet` for per-page metadata.
