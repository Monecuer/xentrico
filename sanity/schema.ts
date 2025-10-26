import { type SchemaTypeDefinition } from 'sanity'
import song from './schemas/song'
import event from './schemas/event'
import video from './schemas/video'
import gallery from './schemas/gallery'
import post from './schemas/post'
import product from './schemas/product'
import subscriber from './schemas/subscriber'
import settings from './schemas/settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [song, event, video, gallery, post, product, subscriber, settings],
}
