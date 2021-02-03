import { gql } from 'graphql-modules';

export const Item = gql`
    extend type Query {
        item(id: ID!): Item
    }

    type Item {
        id: String!
        name: String!
    }

    extend type User {
        item: [Item]
    }
`;
