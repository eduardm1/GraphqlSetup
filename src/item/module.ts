import { Item } from './type-defs';
import { ItemResolver } from './resolver';
import { createModule } from 'graphql-modules';

export const ItemModule = createModule({
    id: 'item-module',
    dirname: __dirname,
    typeDefs: [Item],
    resolvers: [ItemResolver],
});
