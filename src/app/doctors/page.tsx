'use client';
import DoctorListItem from '@/components/doctors/DoctorListItem';
import Pagination from '@/components/common/Pagination';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const DoctorList = () => {
    const serachParams = useSearchParams();
    const [doctors, setDoctors] = useState([]);
    const selectedCityLocationLat = serachParams.get('lat');
    const selectedCityLocationLon = serachParams.get('lon');
    const specializationId = serachParams.get('specializationId');
    const fetchDoctors = async (
        lat: number,
        lon: number,
        specializationId: number,
        skip: number = 0
    ) => {
        try {
            const response = await fetch(
                `http://localhost:3000/api/doctors?lat=${lat}&lon=${lon}&specializationId=${specializationId}&skip=${skip}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('====================================');
            console.log(data.data);
            console.log('====================================');
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };

    useEffect(() => {
        if (selectedCityLocationLon && specializationId) {
            fetchDoctors(
                Number(selectedCityLocationLat),
                Number(selectedCityLocationLon),
                Number(specializationId),
                0
            );
        }
    }, [selectedCityLocationLon, specializationId]);

    return (
        <div>
            <h2 className='text-xl font-semibold mb-4 text-green-400 mt-4'>
                Doctors Near You
            </h2>
            <ul>
                {doctors.map((doctor) => (
                    <DoctorListItem doctor={doctor} key={doctor.id} />
                ))}
            </ul>
            <Pagination />
        </div>
    );
};

export default DoctorList;
