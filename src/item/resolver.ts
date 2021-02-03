export const ItemResolver = {
    Query: {
        item(root: any, id: string) {
            return {
                id: 'Id-1',
                name: 'something',
            };
        },
    },

    Item: {
        id: (item: any) => item._id,
        name: (item: any) => item.name,
    },
};
