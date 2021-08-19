const express = require('express')
const { typeDefs } = require("./schema/TypeDefs")
const { resolvers } = require("./schema/Resolver")
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')

const app = express()

let apolloServer = null

async function startApolloServer() {
  apolloServer = new ApolloServer({ typeDefs, resolvers })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })

  await mongoose.connect("mongodb+srv://Hashim:hashim123@cluster0.ild9a.mongodb.net/apollo-express-server?retryWrites=true&w=majority", {
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