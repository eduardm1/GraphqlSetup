import { Post } from './type-defs';
import { PostResolver } from './resolver';
import { createModule } from 'graphql-modules';

export const PostModule = createModule({
    id: 'item-module',
    dirname: __dirname,
    typeDefs: [Post],
    resolvers: [PostResolver],
});
