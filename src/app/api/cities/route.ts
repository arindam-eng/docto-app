import clientPromise from '@/lib/db';
import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { getCities } from './service';

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const cities = await getCities(req.url as string);
		return NextResponse.json({ data: cities });
	} catch (err) {
		console.log(err);
		return new NextResponse(
			JSON.stringify({ message: 'Something went wrong!', status: 500 })
		);
	}
};
