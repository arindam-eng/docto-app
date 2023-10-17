import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { getDoctors } from './service';
import { DoctorQueryRequest } from './interface';

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const doctorsUrl = new URL(req.url as string);
        const searchParams: any = new URLSearchParams(doctorsUrl.search);
        console.log(searchParams.lon);

        const doctors = await getDoctors({
            lon: searchParams.get('lon'),
            lat: searchParams.get('lat'),
            skip: searchParams.get('skip'),
            specializationId: searchParams.get('specializationId'),
        });
        return NextResponse.json({ data: doctors });
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: 'Something went wrong!', status: 500 })
        );
    }
};
