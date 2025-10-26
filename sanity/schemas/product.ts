export default {
  name: 'product',
  title: 'Product (Store)',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Product Name' },
    { name: 'image', type: 'image', title: 'Product Image', options: { hotspot: true } },
    { name: 'priceUsd', type: 'number', title: 'Price (USD)' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'inStock', type: 'boolean', title: 'In Stock', initialValue: true },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 } },
  ],
}
