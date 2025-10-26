export default {
  name: 'subscriber',
  title: 'Subscriber (Newsletter)',
  type: 'document',
  fields: [
    { name: 'email', type: 'string', title: 'Email' },
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'subscribedAt', type: 'datetime', title: 'Subscribed At', initialValue: new Date().toISOString() },
  ],
}
