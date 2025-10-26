export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'siteName', type: 'string', initialValue: 'Xentrico Official' },
    { name: 'logo', type: 'image' },
    { name: 'socialLinks', type: 'object', fields: [
      { name: 'instagram', type: 'url' },
      { name: 'facebook', type: 'url' },
      { name: 'youtube', type: 'url' },
      { name: 'tiktok', type: 'url' },
      { name: 'spotify', type: 'url' }
    ]}
  ]
}
