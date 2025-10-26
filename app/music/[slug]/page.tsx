import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'

export default async function SongPage({ params }: { params: { slug: string }}) {
  const data = await client.fetch(`*[_type=="song" && slug.current==$slug][0]`, { slug: params.slug })
  if(!data) return <div>Not found</div>
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <Image alt={data.title} src={urlFor(data.cover).width(800).url()} width={600} height={600} className="rounded-2xl border border-white/10"/>
      </div>
      <div>
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <p className="text-white/60">by {data.artist}</p>
        <div className="mt-4">
          {data.audioUrl && (
            <audio controls className="w-full">
              <source src={data.audioUrl} />
            </audio>
          )}
        </div>
        <div className="mt-6 flex gap-3">
          {data.platformLinks?.spotify && <a href={data.platformLinks.spotify} target="_blank" className="px-3 py-2 rounded bg-brand text-black font-semibold">Spotify</a>}
          {data.platformLinks?.apple && <a href={data.platformLinks.apple} target="_blank" className="px-3 py-2 rounded bg-brand text-black font-semibold">Apple Music</a>}
          {data.platformLinks?.youtube && <a href={data.platformLinks.youtube} target="_blank" className="px-3 py-2 rounded bg-brand text-black font-semibold">YouTube</a>}
        </div>
      </div>
    </div>
  )
}
