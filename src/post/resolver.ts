export const PostResolver = {
    Query: {
        post(root: any, id: string) {
            return {
                id: '1234',
                title: 'something',
                author: 'some dude',
                likedBy: ['iooo', 'iooo1'],
                content: 'Contentando',
                publishedAt: '3.01.2020',
            };
        },
    },

    Post: {
        id: (post: any) => post.id,
        title: (post: any) => post.title,
        author: (post: any) => post.author,
        likedBy: (post: any) => post.likedBy,
        content: (post: any) => post.content,
        publishedAt: (post: any) => post.publishedAt,
    },
};
