import { createServer } from "graphql-yoga"
import { schema } from "./schema.js"

export const graphqlServer = createServer({ schema, cors: true })
