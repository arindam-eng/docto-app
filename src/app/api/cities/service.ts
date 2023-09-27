import clientPromise from '@/lib/db';
import { getCitiesQuery } from './helper';

export const getCities = async (url: string) => {
	try {
		const query = getCitiesQuery(url);
		const db = (await clientPromise).db('docto');
		const cities = await db
			.collection('cities')
			.find({ ...query })
			.toArray();
		return cities;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
