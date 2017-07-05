import koa from 'koa'
import koaRouter from 'koa-router'
import koaBody from 'koa-bodyparser'
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa'

import schema from './graphql/schema'
import './db'

const PORT = 3000
const app = new koa()
const router = new koaRouter()

// koaBody is needed just for POST.
app.use(koaBody())

// Redirects GET and POST requests to GraphQL schema
router.get('/graphql', graphqlKoa({ schema: schema }))
router.post('/graphql', graphqlKoa({ schema: schema }))

// Redirects to graphiql server for testing
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))

// Setup Koa middlewares
app.use(router.routes())
app.use(router.allowedMethods())

// Start server
app.listen(PORT, () => {
    console.log('Server is running on', `localhost:${PORT}`)
    console.log('GraphiQL dashboard', `localhost:${PORT}/graphiql`)
});
