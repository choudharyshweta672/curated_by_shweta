# Curated by Shweta 🤍 — Premium Pinterest Fashion Affiliate Website

A luxury, minimal feminine fashion affiliate website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**, inspired by Pinterest, Zara, and Rhode aesthetics.

Designed for girls aged 16–30 seeking curated Clean Girl capsules, Coquette everyday outfits, and verified Amazon & Flipkart fashion finds under ₹999.

---

## 🎨 Aesthetic & Brand Identity

- **Theme**: Minimal Feminine Luxury
- **Mood**: Pinterest Girl • Coquette • Clean Girl • Everyday Fashion
- **Color Palette**:
  - `Warm Ivory`: `#FFFDF8` (Primary backdrop)
  - `Cream Beige`: `#F8F1E9` (Section contrasts)
  - `Blush Pink`: `#FADCE6` (Aesthetic highlights & badges)
  - `Dusty Rose`: `#E8A5B8` (Primary interactive accents & buttons)
  - `Soft Brown`: `#5C4B43` (Headings & text)
  - `Pure White`: `#FFFFFF` (Cards with soft shadows)
- **Typography**:
  - **Headings**: *Playfair Display*
  - **Body**: *Poppins*
  - **Brand Logo**: *Cormorant Garamond*
- **UI Language**: Soft `rounded-[28px]` cards, floating glassmorphism navigation, gentle hover zooms, micro-confetti wishlist celebrations, and clean white space.

---

## 🛍️ Product Management System (Zero Component Editing)

All products are decoupled and stored in [`src/data/products.json`](./src/data/products.json).

Adding any new item to `products.json` automatically propagates to:
- **Home**: Appears in New Arrivals, Best Sellers, Trending Finds, and Budget Edits.
- **Shop**: Appears with live search, price slider filtering, category tags, and sort orders.
- **Pinterest Finds**: Appears under Viral Finds, Amazon Finds, Coquette, Clean Girl, or College Wardrobe.
- **Budget Pages**: Appears under `/under-299`, `/under-499`, `/under-699`, or `/under-999`.
- **Collections**: If its `id` is listed in [`src/data/collections.json`](./src/data/collections.json), it automatically bundles into the outfit look and dynamically recalculates the total outfit price and savings.
- **Search Modal**: Instantly queryable via the `/` shortcut or Search button.
- **Wishlist**: Saved by product ID into `localStorage`.

### Product Schema
```json
{
  "id": "prod-21",
  "name": "Vintage Pearl Ribbon Choker Necklace",
  "category": "Jewelry",
  "price": 249,
  "oldPrice": 599,
  "image": "https://images.unsplash.com/...",
  "gallery": ["https://images.unsplash.com/..."],
  "amazonLink": "https://www.amazon.in/dp/...?tag=shwetafashion-21",
  "flipkartLink": "https://www.flipkart.com/item/...?affid=shwetafashion",
  "description": "Dainty faux pearl choker with adjustable silk ribbon ties.",
  "rating": 4.9,
  "reviewsCount": 120,
  "featured": true,
  "new": true,
  "bestSeller": false,
  "aesthetic": "Coquette",
  "colors": ["Pearl Cream", "Champagne"],
  "sizes": ["Adjustable"],
  "stylingTips": "Pair with a square-neck linen dress and soft wavy hair."
}
```

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Local development URL: `http://localhost:3000`

### 2. Build for Production
```bash
npm run build
```
Generates an optimized static bundle in `dist/`.

### 3. Deploy to Vercel
The project includes [`vercel.json`](./vercel.json) with client-side SPA routing rewrites:
```bash
# Using Vercel CLI
npx vercel
```
Or simply connect your GitHub repository to Vercel and it will auto-detect Vite.

---

## 📑 Pages Included

1. **Home (`/`)**: Hero collage, Trending Pinterest Finds, Shop by Category, New Arrivals, Best Sellers, Outfit Collections preview, Budget Fashion tabs, Pinterest Moodboard, Reviews, Newsletter.
2. **Shop (`/shop`)**: Live search, price slider, category checkboxes, aesthetic pills, color filter, sort dropdown, grid.
3. **Pinterest Finds (`/pinterest-finds`)**: Viral Finds, Amazon Finds, Essentials, Coquette, Clean Girl, College Wardrobe.
4. **Outfit Collections (`/collections`)**: "Shop Entire Look" bundle cards, total outfit price calculation vs MRP, individual affiliate item links.
5. **Budget Pages (`/under-299`, `/under-499`, `/under-699`, `/under-999`)**: Dedicated budget discovery.
6. **Categories (`/categories`)**: Visual catalog across all apparel and accessory styles.
7. **Product Details (`/product/:id`)**: Gallery zoom, size/color picker, styling guide, social sharing (Pinterest Pin, WhatsApp, copy link), verified affiliate links, related products carousel.
8. **Wishlist (`/wishlist`)**: Saved items view with local storage persistence, empty state with recommendation CTA, and share wish list feature.
9. **Style Guide Blog (`/blog` & `/blog/:slug`)**: Pinterest editorial articles with reading times, tags, and embedded affiliate links.
10. **About (`/about`)**: Story behind *Curated by Shweta 🤍*, aesthetic philosophy, and personal favorites.
11. **Collaborate (`/collaborate`)**: Brand inquiry form, audience metrics, Pinterest profile button, and FAQ accordion.
12. **Affiliate Disclosure (`/affiliate-disclosure`)**: Full Amazon Associates & FTC compliance disclosure.
13. **Privacy Policy (`/privacy`)** & **Terms (`/terms`)**: Legal compliance.
14. **404 Not Found (`*`)**: Aesthetic page.

---

## ⚖️ Affiliate Disclosure
*"Some links are affiliate links. As an Amazon Associate I earn from qualifying purchases."*
All product affiliate links open securely with `target="_blank" rel="noopener noreferrer sponsored"`.
