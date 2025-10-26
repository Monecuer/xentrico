export default {
  name: 'gallery',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
    { name: 'caption', type: 'string', title: 'Caption' },
    { name: 'date', type: 'datetime', title: 'Date' },
  ],
}
