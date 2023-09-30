/* eslint-disable @next/next/no-img-element */
import React from 'react';

const DoctorListItem: React.FC<any> = ({ doctor }) => {
	return (
		<li key={doctor.id} className='mb-4'>
			<div className='flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md'>
				<div className='flex items-center'>
					{' '}
					{/* Wrap the image and details in a flex container */}
					<img
						src={
							'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*'
						} // Replace with the actual image URL
						alt={`${doctor.name}'s Photo`}
						className='w-16 h-16 rounded-full mr-4' // Adjust image size as needed
					/>
					<div>
						<h3 className='text-lg font-semibold text-blue-500'>
							{doctor.name}
						</h3>
						<p className='text-blue-400'>{doctor.specialization}</p>
						<p className='text-blue-400'>{doctor.degree}</p>
						<p className='text-blue-400'>Experience: {doctor.experience}</p>
					</div>
				</div>
				<button className='bg-indigo-500 text-white py-2 px-3 rounded-lg hover:bg-indigo-600'>
					Book
				</button>
			</div>
		</li>
	);
};

export default DoctorListItem;
