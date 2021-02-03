import { User } from './type';
import { UserResolver } from './resolver';
import { createModule } from 'graphql-modules';

export const UserModule = createModule({
    id: 'user-module',
    dirname: __dirname,
    typeDefs: [User],
    resolvers: [UserResolver],
});
