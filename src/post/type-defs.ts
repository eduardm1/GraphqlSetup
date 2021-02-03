import { gql } from 'graphql-modules';

export const Post = gql`
    extend type Query {
        post(id: ID!): Post
    }

    type Post {
        id: ID!
        title: String!
        author: User!
        likedBy: [User]
        content: String!
        publishedAt: DateTime
    }

    extend type User {
        posts: [Post!]
    }
`;
