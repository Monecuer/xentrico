export default {
  name: 'news',
  title: 'News / Blog Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'excerpt', type: 'text', title: 'Short Excerpt' },
    { name: 'mainImage', type: 'image', title: 'Main Image', options: { hotspot: true } },
    { name: 'body', type: 'array', title: 'Body', of: [{ type: 'block' }] },
    { name: 'publishedAt', type: 'datetime', title: 'Published At' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 } },
  ],
}
