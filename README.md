# Prop Central — landing page

Marketing site for Prop Central, the real estate CRM. React 19 + Vite, single page, no backend.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static build in dist/
npm run preview
```

Requires Node 20+ (Vite 7). If your default `node` is older:

```bash
PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH" npm run build
```

## Structure

- `src/home/` — nav, hero, feature strip, modules, product tour, band, pricing, getting-started, footer.
- `src/home/HomeMockups.jsx` — CSS-built dashboard, leads, inventory and collections previews. No screenshots.
- `src/home/copy.js` — voice, WhatsApp contact, pricing plans and getting-started steps.
- `src/data.js` — the nine modules and footer links.
- `src/home.css` — every page style, scoped under `.hp`; brand tokens at the top.

All colours come from the `--hp-o*` and `--hp-grad-*` tokens at the top of `src/home.css`. Contact links use `WHATSAPP_NUMBER` in `src/home/copy.js`.

Pricing lives in `PLANS` (`src/home/copy.js`): monthly figures in PKR, annual billing shown at 20% off. Card limits and add-on prices are commercial packaging — the CRM does not enforce plan caps yet, so change them here when sales terms change.

The product previews are illustrative, built from HTML and CSS. Replace them with real captures once a demo account is seeded.
