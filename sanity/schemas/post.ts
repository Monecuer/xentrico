export default {
  name: 'post',
  title: 'News Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'mainImage', type: 'image', options: { hotspot: true } },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'body', type: 'array', of: [{ type: 'block' }] }
  ]
}
