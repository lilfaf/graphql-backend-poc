import mongoose from 'mongoose'

// Fix mongoose depreciation warning
// See issue : https://github.com/Automattic/mongoose/issues/4951
mongoose.Promise = global.Promise

//
// mongoose.connection.on('openUri', function (ref) {
//   console.log('Connected to mongo server.')
// });
//
// mongoose.connection.on('error', function (err) {
//   console.log('Could not connect to mongo server!')
//   console.log(err);
// })
//
// mongoose.connect('mongodb://localhost:27017/graphql-backend-poc')


const databaseUri = 'mongodb://localhost:27017/graphql-backend-poc'

mongoose.connect(databaseUri, { useMongoClient: true })
  .then(() => console.log(`Database connected at ${databaseUri}`))
  .catch(err => console.log(`Database connection error: ${err.message}`))
