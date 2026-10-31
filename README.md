# Estate Centric — landing page

Marketing site for Estate Centric, the real estate CRM. React 19 + Vite, single page, no backend.

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
- `src/home/AppShot.jsx` — real product screenshot in a browser frame, used by the hero and product tour.
- `src/home/copy.js` — voice, WhatsApp contact, pricing plans and getting-started steps.
- `src/data.js` — the nine modules and footer links.
- `src/home.css` — every page style, scoped under `.hp`; brand tokens at the top.

All colours come from the `--hp-o*` and `--hp-grad-*` tokens at the top of `src/home.css`. Contact links use `WHATSAPP_NUMBER` in `src/home/copy.js`.

Logo assets in `public/`: `estate-centric-logo.png` (nav), `estate-centric-logo-light.png` (white wordmark), plus `favicon.png` and `apple-touch-icon.png`. Swap all four together if the brand changes.

Pricing lives in `PLANS` (`src/home/copy.js`): monthly figures in PKR, annual billing shown at 20% off. Card limits and add-on prices are commercial packaging — the CRM does not enforce plan caps yet, so change them here when sales terms change.

The product screens are real captures from the CRM: `app-dashboard.png`, `app-leads.png`, `app-lead.png` and `app-reports.png`, saved at 1800 px wide. Re-shoot them after UI changes and update `TOUR` in `src/home/HomeTour.jsx` if a screen is added or renamed.
