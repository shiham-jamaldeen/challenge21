const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks:[BookSchema]
}

type BookSchema {
    bookId: ID
    authors: [String]
    description: String
    image: String
    link: String
    title:String
}

type Auth {
    token: ID!
    user: User
}

type Query{
getSingleUser:User
}

input BookSchemaInput{
    bookId: ID
    authors: [String]
    description: String
    image: String
    link: String
    title:String
}

type Mutation {
login(email: String, password): Auth
createUser(username: String!, email: String!, password: String!): Auth
saveBook(BookSchema: BookSchemaInput!): User
deleteBood(booID:ID!): User
}

`;
module.export = typeDefs;
