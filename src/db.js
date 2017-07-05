import mongoose from 'mongoose'

// Fix mongoose depreciation warning
// See issue : https://github.com/Automattic/mongoose/issues/4951
mongoose.Promise = global.Promise

const databaseUri = 'mongodb://localhost:27017/graphql-backend-poc'

mongoose.connect(databaseUri, { useMongoClient: true })
  .then(() => console.log(`Database connected at ${databaseUri}`))
  .catch(err => console.log(`Database connection error: ${err.message}`))
