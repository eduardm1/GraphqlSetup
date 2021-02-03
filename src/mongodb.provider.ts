import { MongoClient } from 'mongodb';

import { Collection, Db, ObjectID } from 'mongodb';

import { environment } from './environment';

export class MongoDbProvider {
    private database?: Db;
    private mongoClient: MongoClient;

    constructor(url: string) {
        this.mongoClient = new MongoClient(url, { useUnifiedTopology: true });
    }

    get postsCollection(): Collection {
        const postsCollection = this.getCollection('posts');

        if (!postsCollection) {
            throw new Error('Posts collection is undefined');
        }

        return postsCollection;
    }

    get userCollection(): Collection {
        const userCollection = this.getCollection('users');

        if (!userCollection) {
            throw new Error('User collection is undefined');
        }

        return userCollection;
    }

    /**
     * Connect to MongoDB.
     * @async
     * @param databaseName - Database name.
     */
    async connectAsync(databaseName: string): Promise<void> {
        await this.mongoClient.connect();
        this.database = this.mongoClient.db(databaseName);
    }

    /**
     * Close the database and its underlying connections.
     */
    async closeAsync(): Promise<void> {
        await this.mongoClient.close();
    }

    /**
     * Fetch a specific collection.
     * @private
     * @param collectionName - Collection name.
     * @returns The collection instance.
     */
    private getCollection(collectionName: string): Collection {
        if (!this.database) {
            throw new Error('Database is undefined.');
        }

        return this.database.collection(collectionName);
    }
}

export const mongoDbProvider = new MongoDbProvider(environment.mongoDb.url);

/**
 * Add mock users if `users` collection is empty.
 * TODO: Remove in Production.
 */
export async function addMockUsersAsync(): Promise<void> {
    const usersCount = await mongoDbProvider.userCollection.countDocuments();

    if (usersCount === 0) {
        await mongoDbProvider.userCollection.insertMany([
            {
                _id: new ObjectID('0123456789abcdef01234567'),
                firstName: 'Test',
                lastName: 'User 1',
                email: 'test.user1@test.com',
            },
            {
                _id: new ObjectID('fedcba987654321098765432'),
                firstName: 'Test',
                lastName: 'User 2',
                email: 'test.user2@test.com',
                following: [new ObjectID('0123456789abcdef01234567')],
            },
        ]);
    }
}
