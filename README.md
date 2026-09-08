# Fahad Textiles website

A single-page business website. No build step: open `index.html` in any browser, or upload the whole folder to any web host (Hostinger, Netlify, Vercel, cPanel, GitHub Pages).

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The whole site (all sections and text) |
| `css/styles.css` | Styling, colours, responsive layout |
| `js/main.js` | Business details, WhatsApp / email form, menu, animations |
| `assets/logo.svg` | The FT logo recreated as a crisp vector |
| `assets/logo-original.jpeg` | Your original logo image, kept for reference |

## Before going live: things to replace

1. **Phone, WhatsApp, email, address** — edit the `BUSINESS` block at the top of `js/main.js`. Every place on the page updates automatically.
2. **Social links** — in `index.html`, search for `Replace # with your social links` and put in your Facebook, Instagram and TikTok URLs.
3. **Work photos** — in the `Our Work` section, each tile has a comment showing how to drop in a real photo. Put photos in `assets/work/` and use them there.
4. **Testimonials** — the three quotes are sample text. Replace them with real client feedback or remove the section.
5. **Opening hours** — in the Contact section, update if different from Monday to Saturday, 9 am to 7 pm.

## How the quote form works

There is no server. When a customer presses **Send on WhatsApp**, the form details open in WhatsApp as a pre-written message to your number. **Send by email** does the same with their email app. Nothing is stored on the site.
