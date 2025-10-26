export default {
  name: 'song',
  title: 'Song',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'artist', type: 'string', title: 'Artist', initialValue: 'Xentrico' },
    { name: 'cover', type: 'image', title: 'Cover Image', options: { hotspot: true } },
    { name: 'audioUrl', type: 'url', title: 'Audio URL (MP3/Stream)' },
    {
      name: 'platformLinks',
      title: 'Platform Links',
      type: 'platformLinks', // reference to new object type
    },
    { name: 'releaseDate', type: 'datetime', title: 'Release Date' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 } },
  ],
}
