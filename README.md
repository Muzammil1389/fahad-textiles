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
| `assets/img/` | Section photos (free stock from Pexels, licensed for commercial use, no credit required) |

## Before going live: things to replace

1. **Phone, WhatsApp, email, address** — currently set to +92 300 1234567, fahadtextile@gmail.com and 123 Textile Market, Chauburji, Lahore. To change them, edit the `BUSINESS` block at the top of `js/main.js`; every place on the page updates automatically.
2. **Social links** — in `index.html`, search for `Replace # with your social links` and put in your Facebook, Instagram and TikTok URLs.
3. **Photos** — the site uses stock photos from `assets/img/`. To show your own work, replace any file there with a photo of the same name, or change the `src` in `index.html`.
4. **Testimonials** — the three quotes are sample text. Replace them with real client feedback or remove the section.
5. **Opening hours** — in the Contact section, update if different from Monday to Saturday, 9 am to 7 pm.

## How the quote form works

There is no server. When a customer presses **Send on WhatsApp**, the form details open in WhatsApp as a pre-written message to your number. **Send by email** does the same with their email app. Nothing is stored on the site.
