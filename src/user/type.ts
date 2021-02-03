import { gql } from 'graphql-modules';

export const User = gql`
    type Query {
        user(id: ID!): User
    }

    type User {
        id: String!
        username: String!
        password: String!
    }
`;
