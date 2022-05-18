import { SchemaDefinition as def } from '@contember/schema-definition'

export class Post {
    title = def.stringColumn().notNull()
    content = def.stringColumn().notNull()
}


