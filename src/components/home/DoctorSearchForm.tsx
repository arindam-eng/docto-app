'use client';
// import { getCurrentLocation } from '@/helper/util.helper';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import Autocomplete from './Autocomplete';
import { useRouter, useSearchParams } from 'next/navigation';

const DoctorSearchForm = () => {
    const router = useRouter();
    const serachParams = useSearchParams();
    const cityId = serachParams.get('cityId');
    const specializationId = serachParams.get('specializationId');
    const [citySuggestions, setCitySuggestions] = useState<any>([]);
    const [specializationSuggestions, setSpecializationSuggestions] =
        useState<any>([]);
    const [selectedCityLocation, setSelectedCityLocation] = useState<any>({});
    const [selectedSpecialization, setSelectedSpecialization] = useState<any>(
        {}
    );

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/api/cities`,
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
                if (data?.data?.length > 0) {
                    setCitySuggestions([...data.data]);
                    if (cityId) {
                        const city = data.data.find(
                            (city: { _id: string }) => city._id === cityId
                        );
                        setSelectedCityLocation(city);
                    }
                }
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };

        const fetchSpecializations = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/api/specializations`,
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
                if (data?.data?.length > 0) {
                    if (specializationId) {
                        setSelectedSpecialization(
                            data.data.find(
                                (spec: { id: string }) =>
                                    Number(spec.id) === Number(specializationId)
                            )
                        );
                    }
                    setSpecializationSuggestions([...data.data]);
                }
            } catch (error) {
                console.error('Error fetching specs:', error);
            }
        };

        fetchCities();
        fetchSpecializations();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCitySelect = (city: any) => {
        setSelectedCityLocation(city);
    };

    const handleSpecializationsSelect = (specialization: any) => {
        setSelectedSpecialization(specialization);
    };

    const searchHanlder = async () => {
        if (
            !Object.keys(selectedCityLocation).length &&
            !Object.keys(selectedSpecialization).length
        ) {
            alert('Please select');
            return;
        }
        const queryStringData = queryString.stringify({
            ...selectedCityLocation,
            ...selectedSpecialization,
            specializationId: selectedSpecialization.id,
            cityId: selectedCityLocation._id,
        });
        router.push(`/doctors?${queryStringData}`);
    };

    return (
        <div className='flex flex-col md:flex-row md:items-center mb-4'>
            {/* Area Dropdown */}
            <div className='w-full md:w-1/3 mb-4 md:mb-0 md:mr-2'>
                <label
                    htmlFor='area'
                    className='block text-gray-700 font-semibold mb-2'
                >
                    Select Area:
                </label>
                <Autocomplete
                    suggestions={citySuggestions}
                    onSelect={handleCitySelect}
                    myLocation={true}
                    input={selectedCityLocation.name}
                />
            </div>

            {/* Specialization Dropdown */}
            <div className='w-full md:w-1/2 mb-4 md:mb-0 md:mr-2'>
                <label
                    htmlFor='specialization'
                    className='block text-gray-700 font-semibold mb-2'
                >
                    Select Specialization:
                </label>
                <Autocomplete
                    suggestions={specializationSuggestions}
                    onSelect={handleSpecializationsSelect}
                    myLocation={false}
                    input={selectedSpecialization.name}
                />
            </div>

            {/* Search Button */}
            <div className='w-full md:w-1/5 mt-8'>
                <button
                    className='bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 w-full'
                    onClick={() => searchHanlder()}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default DoctorSearchForm;
