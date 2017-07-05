# GraphQL Backend POC

Exemple GraphQL server based on [Koa](https://github.com/koajs/koa), [Mongoose](https://github.com/Automattic/mongoose) and [Apollo](https://github.com/apollographql/apollo).

## How to use

Clone the repo:

```bash
git clone https://github.com/lilfaf/graphql-backend-poc.git
```

Install it:

```bash
cd graphql-backend-poc
yarn install
```

Setup mongo databse:

```bash
mongo

> use graphql-backend-poc
> db.users.insert({ firstName: 'foo', lastName: 'bar' })
> db.users.find()
> exit
```

Run it:

```bash
yarn run dev
```

Visit **graphiql** at `http://localhost:3000/graphiql` and try out the following queries

## GraphQL queries

Users list:

```graphql
{
  Users {
    _id
    firstName
    lastName
  }
}
```

Single user:

```graphql
{
  User(id: "your-id-here") {
    firstName
    lastName
  }
}
```
