import { ApolloServer } from 'apollo-server';

import { environment } from './environment';
import { application } from './application';

const schema = application.createSchemaForApollo();

const server = new ApolloServer({
    schema,
    introspection: environment.apollo.introspection,
    // playground: environment.apollo.playground
});

server.listen().then(({ url }) => console.log(`Server ready at ${url}.`));

//Hot Module Replacement
if (module.hot) {
    module.hot.accept();
    module.hot.addDisposeHandler(() => console.log('Module disposed.'));
}
