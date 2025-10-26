import type { StructureResolver } from 'sanity/structure'
import { StructureBuilder } from 'sanity/structure'

// 👉 Sanity v3+ Structure Builder
// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Auto-generated document lists
      ...S.documentTypeListItems(),

      // Example: custom sections you can add later
      // S.listItem()
      //   .title('Settings')
      //   .child(S.editor().schemaType('settings').documentId('siteSettings')),
    ])
