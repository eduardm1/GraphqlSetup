import { createApplication } from 'graphql-modules';
import { UserModule } from './user/module';
import { PostModule } from './post/module';

export const application = createApplication({
    modules: [UserModule, PostModule],
});
