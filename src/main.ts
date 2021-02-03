import {ApolloServer} from 'apollo-server';

import resolvers from './resolver';
import typeDefs from './type-defs';
import {environment} from './environment';

const server = new ApolloServer({
    resolvers, 
    typeDefs,
    introspection: environment.apollo.introspection,
    // playground: environment.apollo.playground
});

server.listen()
    .then(({url}) => console.log(`Server ready at ${url}.`))

//Hot Module Replacement
if (module.hot) {
    module.hot.accept();
    module.hot.addDisposeHandler(() => console.log("Module disposed."));
}

