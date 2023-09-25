/* eslint-disable @next/next/no-img-element */
'use client'
import DoctorList from '@/components/home/DoctorList';
import DoctorSearchForm from '@/components/home/DoctorSearchForm';
import PlacesAutocomplete from '@/components/home/PlacesAutocomplete';
import React from 'react';

const HomePage = () => {
	return (
		<div className='min-h-screen bg-gray-100'>
			{/* Header */}
			<header className='bg-blue-500 p-4 text-white'>
				<h1 className='text-2xl font-semibold text-center'>
					Find Doctors Near You
				</h1>
			</header>

			{/* Main content */}
			<main className='md:container md:mx-auto'>
				<div className='bg-white p-6 rounded-lg shadow-md'>
					{/* Search Section */}
					<DoctorSearchForm />
					<hr />
					{/* List of Doctors */}
					<DoctorList />
          <PlacesAutocomplete />
				</div>
			</main>
		</div>
	);
};

export default HomePage;
