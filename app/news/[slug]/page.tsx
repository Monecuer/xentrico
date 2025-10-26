import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

export default async function PostPage({ params }: { params: { slug: string }}) {
  const data = await client.fetch(`*[_type=="post" && slug.current==$slug][0]`, { slug: params.slug })
  if(!data) return <div>Not found</div>
  return (
    <article className="prose prose-invert max-w-none">
      {data.mainImage && <Image alt={data.title} src={urlFor(data.mainImage).width(1200).url()} width={1200} height={600} className="rounded-xl border border-white/10"/>}
      <h1>{data.title}</h1>
      <PortableText value={data.body} />
    </article>
  )
}
