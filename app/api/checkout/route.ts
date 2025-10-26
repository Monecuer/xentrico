import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: Request) {
  try {
    const form = await req.formData()
    const title = String(form.get('title'))
    const priceUsd = Number(form.get('priceUsd'))
    const downloadUrl = String(form.get('downloadUrl') || '')

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' })

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: title },
          unit_amount: Math.round(priceUsd * 100)
        },
        quantity: 1,
      }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/store?success=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/store?canceled=1`,
      metadata: { downloadUrl }
    })
    return NextResponse.redirect(session.url!, { status: 303 })
  } catch (e:any) {
    console.error(e)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
