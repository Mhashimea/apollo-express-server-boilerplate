const express = require('express')
const { typeDefs } = require("./schema/TypeDefs")
const { resolvers } = require("./schema/Resolver")
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

let apolloServer = null

async function startApolloServer() {
  const username = process.env.USER
  const password = process.env.PASSWORD
  apolloServer = new ApolloServer({ typeDefs, resolvers })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })

  console.log(username, password)

  await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ild9a.mongodb.net/apollo-express-server?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }, (err) => {
    if (err) console.log("Error in connection", err)
    console.log("connected to mnogoose")
  })

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`));
}

startApolloServer()