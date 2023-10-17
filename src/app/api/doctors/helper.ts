import { DoctorQueryRequest } from './interface';

export const getDoctorsFetchQuery = (requestQuery: DoctorQueryRequest) => {
    return [
        {
            $geoNear: {
                near: {
                    type: 'Point',
                    coordinates: [
                        Number(requestQuery.lon),
                        Number(requestQuery.lat),
                    ],
                },
                distanceField: 'distance',
                maxDistance: 10000,
                spherical: true,
            },
        },
        {
            $match: {
                'specialization.id': Number(requestQuery.specializationId),
            },
        },
        {
            $skip: Number(requestQuery.skip) || 0,
        },
        {
            $limit: 15,
        },
    ];
};
