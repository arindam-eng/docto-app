'use client';
import { getCurrentLocation } from '@/helper/util.helper';
import React, { useEffect, useState } from 'react';
import AutoCompleteField from './Autocomplete';
import Autocomplete from './Autocomplete';

const DoctorSearchForm = () => {
    const searchHanlder = async () => {
        // const result = await getCurrentLocation();
    };
    const [citySuggestions, setCitySuggestions] = useState<any>([]);
    const [specializationSuggestions, setSpecializationSuggestions] =
        useState<any>([]);

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
                setCitySuggestions([...data.data]);
            } catch (error) {
                console.error('Error fetching data:', error);
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
                setSpecializationSuggestions([...data.data]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCities();
        fetchSpecializations();
    }, []);

    const handleCitySelect = (selectedArea: any) => {
        // Handle the selected area
        console.log('Selected Area:', selectedArea);
    };

    const handleSpecializationsSelect = (selectedArea: any) => {
        // Handle the selected area
        console.log('Selected Area:', selectedArea);
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
