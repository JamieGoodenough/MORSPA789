# MOR SPA 789 — Design System

## Palette

| Token              | Value                    | Usage                            |
|--------------------|--------------------------|----------------------------------|
| `--bg-base`        | `#0c0a09`                | Main page background             |
| `--bg-elevated`    | `#17181d`                | Navbar, footer, dark bands       |
| `--bg-card`        | `#1c1918`                | Service cards and info panels    |
| `--text-primary`   | `#f5f0e8`                | Headings and primary body text   |
| `--text-secondary` | `#9a8f85`                | Supportive body text             |
| `--accent-gold`    | `#d7b09a`                | Sunset-peach CTA accent          |
| `--accent-sage`    | `#425d67`                | Deep water / blue-grey contrast  |
| `--border`         | `rgba(215,176,154,0.15)` | Default border tone              |
| `--border-hover`   | `rgba(215,176,154,0.40)` | Hover border tone                |

## Typography

- **Headings**: Cormorant Garamond — weights 300, 400, 600
- **Body**: DM Sans — weights 300, 400, 500
- **Brand mark**: real MOR SPA 789 square logo with fine dark linework over a pale ground / dusk-water variant from Gumtree

| Scale  | Size                         | Weight | Tracking |
|--------|------------------------------|--------|----------|
| h1     | `clamp(3.5rem, 9vw, 6.5rem)` | 300    | `-0.02em` |
| h2     | `clamp(2rem, 4vw, 3.2rem)`   | 300    | `-0.01em` |
| h3     | `1.2–1.9rem`                 | 300    | normal   |
| Label  | `0.68–0.75rem`               | 500    | `+0.18–0.25em` uppercase |
| Body   | `1rem`                       | 300    | normal   |

## Imagery Rules

- Prefer real MOR SPA 789 / Gumtree images over stock.
- Hero image: `room-hero.jpg`
- Signature ritual image: `thai-decor.jpg`
- Treatment/studio support images: `massage-bed.jpg`, `studio-products.jpg`, `angkor-art.jpg`, `treatment-room.jpg`
- Avoid competitor / unrelated storefront imagery.

## Spacing

8px base unit. Sections use `py-24` (6rem) minimum. Large story blocks use `py-28`.

## Borders / Radius

- Cards: `2px` radius for a crisp premium feel.
- Borders use accent-peach at low opacity.

## Motion

- `300ms ease` on hover colour/border transitions
- `700ms` on image hover scaling
- Navbar scroll transition uses IntersectionObserver + subtle blur

## Password Gate

- Route: `/login`
- Cookie: `site_auth` (httpOnly, 7-day expiry)
- Password stored in `.env` as `SITE_PASSWORD`
- Current preview password: `annie2026`
