'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

// Optional: This ensures the route is statically rendered for performance
export const dynamic = 'force-static'

export default function StudioPage() {
  return <NextStudio config={config} />
}
