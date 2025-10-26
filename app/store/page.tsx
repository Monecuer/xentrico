import { client, urlFor } from '@/lib/sanity'

export const metadata = { title: 'Store — Xentrico' }

async function getProducts() {
  return await client.fetch(`*[_type=="product"] | order(_createdAt desc){title,slug,image,priceUsd,description,downloadUrl}`)
}

export default async function Store() {
  const products = await getProducts()
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Store</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {products?.map((p:any, i:number)=>(
          <form key={i} action="/api/checkout" method="POST" className="rounded-xl border border-white/10 p-4">
            {p.image && <img src={urlFor(p.image).width(800).url()} className="rounded-lg mb-3" alt={p.title}/>}
            <div className="font-semibold">{p.title}</div>
            <div className="text-white/60">${"{:.2f}".format(9.99)}</div>
            <p className="text-sm text-white/60 mt-2">{p.description}</p>
            <input type="hidden" name="title" value={p.title} />
            <input type="hidden" name="priceUsd" value={p.priceUsd} />
            <input type="hidden" name="downloadUrl" value={p.downloadUrl || ''} />
            <button className="mt-3 px-4 py-2 bg-brand text-black rounded-lg font-semibold">Buy with Stripe</button>
          </form>
        ))}
      </div>
    </div>
  )
}
