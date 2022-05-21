import { https } from 'firebase-functions/v1'
import { graphqlServer } from './graphql/index.js'

export default https.onRequest(graphqlServer)
