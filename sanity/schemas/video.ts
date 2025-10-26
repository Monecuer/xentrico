export default {
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'thumbnail', type: 'image', title: 'Thumbnail', options: { hotspot: true } },
    { name: 'url', type: 'url', title: 'Video URL (YouTube/Vimeo)' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'publishedAt', type: 'datetime', title: 'Published At' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 } },
  ],
}
