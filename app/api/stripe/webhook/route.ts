import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: Request) {
  const sig = req.headers.get('stripe-signature') || ''
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' })
  let event
  try {
    const buf = await req.arrayBuffer()
    const payload = Buffer.from(buf)
    event = stripe.webhooks.constructEvent(payload, sig, secret!)
  } catch (err:any) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  if(event.type === 'checkout.session.completed') {
    // You can email the download link (metadata.downloadUrl) to the customer here.
    // Or store purchase record in Sanity.
    console.log('Payment success:', event.data.object.id)
  }
  return NextResponse.json({ ok: true })
}
