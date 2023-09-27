import clientPromise from '@/lib/db';

export const getSpecializations = async () => {
    try {
        const db = (await clientPromise).db('docto');
        const specializations = await db
            .collection('specializations')
            .find({})
            .toArray();
        return specializations;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
