export const UserResolver = {
    Query: {
        user(root: any, id: string) {
            return {
                id: '123',
                username: 'usernameTest',
                password: 'plainPassword',
            };
        },
    },

    User: {
        id: (user: any) => user._id,
        username: (user: any) => user.username,
    },
};
