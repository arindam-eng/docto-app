import GoogleProvider from 'next-auth/providers/google';
import { getServerSession } from 'next-auth';
import clientPromise from '@/lib/db';
import { MongoDBAdapter } from '@auth/mongodb-adapter';

export const authOptions = {
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		}),
	],
};

export const getAuthSession = () => getServerSession(authOptions);
