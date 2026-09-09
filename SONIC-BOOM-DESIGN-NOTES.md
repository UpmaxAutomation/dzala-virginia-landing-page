# ⚡💥 Sonic Boom — Design Notes

**Client:** Dzala General Contractor · Tysons, Northern Virginia
**Applied to:** `index.html` (full landing) and `index2.html` (short, single-CTA)
**Shared assets:** `styles.css`, `main.js`, real project photos in `assets/img/`, favicons, official logo.

## What Sonic Boom added

Both pages now follow the 6-section scroll-telling skeleton:

| # | Section | index.html | index2.html |
|---|---------|-----------|-------------|
| 1 | **Hook** | Full-bleed hero photo, H1, trust row (5.0/47 · licensed · 24/7), primary + secondary CTA | Same hero, **outcome H1** ("done right the first time"), **single** primary CTA + trust row |
| 2 | **Problem** | "Sound Familiar?" — 4 pain cards + "We do it differently" turn | Compact 4-pain block + turn |
| 3 | **Proof** | Why-Choose (4, real copy) → Testimonial → Gold stats band | Gold stats band + testimonial |
| 4 | **Solution** | **The Dzala Standard** — named 4-step process | Same, compact |
| 5 | **Evidence** | 6 real project photos (Our Work) | 3 real project photos |
| 6 | **Action** | Consultation + multi-field form + **trust closer** + trust badges | Single-CTA form + trust closer |

## Conversion mechanics applied (home-services niche)
- Emergency **phone number** prominent in header, hero, form and sticky mobile bar (click-to-call `tel:`).
- **Named process** ("The Dzala Standard") turns commodity service into branded methodology.
- **Trust signals placed before each CTA** (badges under hero, closer above/around the form).
- **Real before/finished project photography** — no stock, no AI art.
- **Sticky mobile CTA bar** (call + free quote) — most local remodeling searches are mobile.
- **Written-quote guarantee** as the trust closer ("no mystery pricing", "no commitment").
- Specific button copy ("Get My Free Quote", not "Submit").

## Single-CTA discipline (index2.html)
One dominant action everywhere: **Get A Free Quote → #quote**. The phone is the only secondary path (utility). No competing "Explore Our Work" CTA. ~half the length of the full page — built for paid ad traffic.

## Anti-generic-AI checklist — passed
- ✅ Hero is a real project photo, not a gradient with floating shapes
- ✅ Real photography throughout (client's own work)
- ✅ Brand-tinted icons (gold), not default gray
- ✅ Intentional type pairing (Playfair Display + Montserrat, per the live brand)
- ✅ Distinctive element: roofline (∧) marker lifted from the logo, repeated at every section head
- ✅ Purposeful microinteractions only (reveal-on-scroll, hover-lift/zoom on cards, sticky CTA)

## Not fabricated
All copy is from the live site or verifiable facts (services, "why choose" text, commercial scope, 47 reviews, address, hours). Project photos are Dzala's real work. No invented financing, warranty, awards, or project cities.

## Before launch (open TODOs in code)
1. **Wire the form** to a real CRM/webhook — currently a demo submit (`main.js`, marked `TODO`).
2. Optional: GA4 / Google Ads conversion events for form submit + click-to-call.
3. Confirm business hours (site homepage vs. footer differ slightly) with the client.
