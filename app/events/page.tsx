import { client, urlFor } from '@/lib/sanity'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'Events — Xentrico' }

export default async function Page() {
  const items = await client.fetch(`*[_type=="event"] | order(_createdAt desc)`)
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Events</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {items?.map((it:any, i:number)=>(
          <div key={i} className="rounded-xl border border-white/10 overflow-hidden">
            {it.image || it.cover || it.mainImage ? (
              <Image alt={it.title} src={urlFor(it.image || it.cover || it.mainImage).width(800).url()} width={800} height={500} />
            ) : null}
            <div className="p-4">
              <div className="font-semibold">{it.title}</div>
              {it.slug ? <Link href={`/event/$`} className="text-brand">Open</Link> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
