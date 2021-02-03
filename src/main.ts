import { ApolloServer } from 'apollo-server';
import { DateTimeMock, EmailAddressMock, UnsignedIntMock } from 'graphql-scalars';

import { addMockUsersAsync, mongoDbProvider } from './mongodb.provider';
import { environment } from './environment';
import { application } from './application';

(async function bootstrapAsync(): Promise<void> {
    await mongoDbProvider.connectAsync(environment.mongoDb.databaseName);
    await addMockUsersAsync();

    const schema = application.createSchemaForApollo();

    const server = new ApolloServer({
        schema,
        introspection: environment.apollo.introspection,
        mocks: {
            DateTime: DateTimeMock,
            EmailAddress: EmailAddressMock,
            UnsignedInt: UnsignedIntMock,
        }, //
        // playground: environment.apollo.playground
    });

    server.listen().then(({ url }) => console.log(`Server ready at ${url}.`));

    //Hot Module Replacement
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(async () => {
            server.stop();
            await mongoDbProvider.closeAsync();
        });
    }
})();
