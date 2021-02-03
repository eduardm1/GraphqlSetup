import { createApplication } from 'graphql-modules';
import { UserModule } from './user/module';
import { ItemModule } from './item/module';

export const application = createApplication({
    modules: [UserModule, ItemModule],
});
