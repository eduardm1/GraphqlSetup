import { DateTimeResolver, EmailAddressResolver, UnsignedIntResolver } from 'graphql-scalars';

export const UserResolver = {
    Query: {
        user(root: any, id: string) {
            return {
                id: '123',
                firstName: 'usernameFirst',
                lastName: 'lastName',
                followers: ['user1', 'user2'],
                email: 'plmplm.plm',
            };
        },
    },

    User: {
        id: (user: any) => user.id,
        firstName: (user: any) => user.firstName,
        lastName: (user: any) => user.lastName,
        followers: (user: any) => user.following,
        email: (user: any) => user.email,
    },
};

export const resolvers = {
    DateTime: DateTimeResolver,
    EmailAddress: EmailAddressResolver,
    UnsignedInt: UnsignedIntResolver,
};
