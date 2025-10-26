import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemas'

export default defineConfig({
  name: 'xentrico-studio',
  title: 'Xentrico Official Studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [
    deskTool(),     // ✅ Correct Desk Tool for Sanity v3+
    visionTool(),
  ],

  schema,
})
