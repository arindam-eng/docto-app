import clientPromise from '@/lib/db';
import { getDoctorsFetchQuery } from './helper';
import { DoctorQueryRequest } from './interface';

export const getDoctors = async (requestQuery: DoctorQueryRequest) => {
    try {
        const findquery = getDoctorsFetchQuery(requestQuery);
        const db = (await clientPromise).db('docto');
        const doctors = await db
            .collection('doctors')
            .aggregate(findquery)
            .toArray();
        return doctors;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
