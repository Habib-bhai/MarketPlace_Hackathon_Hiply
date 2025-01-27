import { type SchemaTypeDefinition } from 'sanity'
import products from "./product"
import { User } from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, User],
}
