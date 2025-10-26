import { client } from '@/lib/sanity'

export async function getHomeData() {
  const [latestSong, posts, events] = await Promise.all([
    client.fetch(`*[_type=="song"] | order(releaseDate desc)[0]{title,cover,slug}`),
    client.fetch(`*[_type=="news"] | order(publishedAt desc)[0..2]{title,slug,mainImage}`),
    client.fetch(`*[_type=="event" && dateTime(date) >= now()] | order(date asc)[0..3]{title,date,location}`)
  ])
  return { latestSong, posts, events }
}
