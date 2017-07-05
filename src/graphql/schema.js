import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import UserQueries from './user/queries'
// import UserMutations from './user/mutations'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'UserQuery',
    fields: UserQueries
  }),
  // TODO
  // mutation: new GraphQLObjectType({
  //   name: 'UserMutation',
  //   fields: UserMutations
  // })
})
