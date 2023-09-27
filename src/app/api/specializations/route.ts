import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSpecializations } from './service';

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const specializations = await getSpecializations();
        return NextResponse.json({ data: specializations });
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: 'Something went wrong!', status: 500 })
        );
    }
};
