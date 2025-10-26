# Xentrico Official — Next.js + Sanity + Stripe + Push + SEO

A professional artist site with:
- Music, videos, events, gallery, news (Sanity CMS)
- Store with Stripe Checkout
- Newsletter (Sanity subscribers)
- Push notifications (FCM-ready)
- SEO (OpenGraph, sitemap, robots)

## 1) Prerequisites
- Node 18+
- Sanity project (https://sanity.io) with projectId + dataset
- Stripe account (keys)
- Optional: Firebase project for FCM

## 2) Setup
```bash
cp .env.example .env
# Fill env values
npm install
```

### Init Sanity Content
- In your Sanity project, add the schemas in `sanity/` (this repo already includes them).
- You can run Studio at `/studio` (Next.js) or with `npm run sanity:dev`.

## 3) Run
```bash
npm run dev
# Open http://localhost:3000
# Studio at http://localhost:3000/studio
```

## 4) Stripe
- Set `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`.
- (Optional) Create a webhook endpoint to `/api/stripe/webhook` and set `STRIPE_WEBHOOK_SECRET`.

## 5) Newsletter
- Set `SANITY_API_WRITE_TOKEN` for `POST /api/newsletter` to create `subscriber` docs.

## 6) Push Notifications (Optional)
- Create a Firebase Web app and fill the FCM env vars.
- Serve `public/firebase-messaging-sw.js` and open `/push` to request permission.

## 7) Deploy
- Deploy on Vercel.
- Add environment variables in Vercel project settings.
- Map your custom domain.

## 8) Future: AI Voice Sample
- Add a page `/ai-voice` and an API route that calls your TTS provider (OpenAI, ElevenLabs).
- Gate with Stripe purchase or free preview.
