const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [BookSchema]
  }

  type BookSchema {
    bookId: String!
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String, password: String): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookSchemaInput!): User
    deleteBook(bookId: String!): User
  }
  input BookSchemaInput {
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }
`;

module.exports = typeDefs;
