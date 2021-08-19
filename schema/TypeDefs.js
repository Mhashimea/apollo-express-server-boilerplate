const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Country {
    Country: String!
    Year: String!
    Area:Int!
    Population:Int!
  }

  #Queries
  type Query {
    getAllCountries: [Country!]!
    addCountry(Country:String,Year:String,Area: Int, Population:Int): Country!
    getCountryById(Country: String!): Country
  }
`

module.exports = { typeDefs }