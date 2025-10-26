import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

export async function POST(req: Request) {
  const form = await req.formData()
  const email = String(form.get('email') || '').trim().toLowerCase()
  if(!email) return NextResponse.redirect('/?sub=invalid', { status: 302 })
  try {
    const token = process.env.SANITY_API_WRITE_TOKEN
    if(!token) throw new Error('Missing SANITY_API_WRITE_TOKEN')
    const writeClient = client.withConfig({ token })
    await writeClient.create({ _type: 'subscriber', email, createdAt: new Date().toISOString() })
    return NextResponse.redirect('/?sub=ok', { status: 302 })
  } catch (e) {
    console.error(e)
    return NextResponse.redirect('/?sub=error', { status: 302 })
  }
}
