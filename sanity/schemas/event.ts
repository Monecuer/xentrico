export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Event Title' },
    { name: 'date', type: 'datetime', title: 'Date' },
    { name: 'venue', type: 'string', title: 'Venue' },
    { name: 'city', type: 'string', title: 'City' },
    { name: 'banner', type: 'image', title: 'Event Banner', options: { hotspot: true } },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'ticketLink', type: 'url', title: 'Ticket Link' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 } },
  ],
}
