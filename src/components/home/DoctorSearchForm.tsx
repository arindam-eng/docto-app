'use client';
import { getCurrentLocation } from '@/helper/util.helper';
import React, { useEffect, useState } from 'react';
import AutoCompleteField from './Autocomplete';
import Autocomplete from './Autocomplete';

const DoctorSearchForm = () => {
	const areas = [
		'Select area',
		'📍 Use my location',
		'Area 2',
		'Area 3',
		'Area 4',
	];
	const specializations = [
		'Specialization 1',
		'Specialization 2',
		'Specialization 3',
	];

	const searchHanlder = async () => {
		const result = await getCurrentLocation();
		console.log('====================================');
		console.log(result);
		console.log('===================================='); //AIzaSyC0XNzMVw9cl_axksFzTg5qH0Tn7xLFS0Y
	};
	const [suggestions, setSuggestions] = useState<any>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`http://localhost:3000/api/cities`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				});

				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				const data = await response.json();
				setSuggestions([...data.data]);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	const handleAreaSelect = (selectedArea: any) => {
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
				{/* <select
					id='area'
					className='w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-500 text-black-400'
				>
					{areas.map((area, index) => (
						<option key={index} value={area}>
							{area}
						</option>
					))}
				</select>
				 */}
				<Autocomplete suggestions={suggestions} onSelect={handleAreaSelect} />
			</div>

			{/* Specialization Dropdown */}
			<div className='w-full md:w-1/2 mb-4 md:mb-0 md:mr-2'>
				<label
					htmlFor='specialization'
					className='block text-gray-700 font-semibold mb-2'
				>
					Select Specialization:
				</label>
				<select
					id='specialization'
					className='w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-500'
				>
					{specializations.map((spec, index) => (
						<option key={index} value={spec}>
							{spec}
						</option>
					))}
				</select>
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
