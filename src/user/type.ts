import { gql } from 'graphql-modules';
import { EmailAddress, UnsignedInt } from 'graphql-scalars/typeDefs';

export const User = gql`
    scalar DateTime
    scalar EmailAddress
    scalar UnsignedInt

    type Query {
        user(id: ID!): User
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        followers: [User]
        email: EmailAddress!
    }

    input PublishPostInput {
        title: String!
        content: String!
    }

    type Mutation {
        publishPost(input: PublishPostInput!): Post!
        followUser(userId: ID!): UnsignedInt!
        unfollowUser(userId: ID!): UnsignedInt!
        likePost(postId: ID!): UnsignedInt!
    }
`;
