import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-06-01',
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN
})

const builder = imageUrlBuilder(client)
export const urlFor = (src: any) => builder.image(src).auto('format').fit('max')
