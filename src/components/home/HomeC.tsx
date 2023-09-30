/* eslint-disable @next/next/no-img-element */
import React from 'react';

const HomeC = () => {
	return (
		<>
			<div className='relative h-64 md:h-96'>
				{/* Background image */}
				<img
					src='https://drabhaysahoo.com/Image/ab.png' // Replace with your image path
					alt='Banner Background'
					className='absolute inset-0 w-full h-full object-cover'
				/>

				{/* Overlay */}
				<div className='absolute inset-0 bg-black opacity-50'></div>

				{/* Banner content */}
				<div className='text-white absolute inset-0 flex flex-col justify-center items-center z-10'>
					<h1 className='text-4xl md:text-6xl font-bold text-center'>
						Welcome to Our Clinic
					</h1>
					<p className='text-lg md:text-xl text-center mt-4'>
						Your health is our priority
					</p>
					<a
						href='#'
						className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-8 inline-block'
					>
						Book an Appointment
					</a>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
				{/* Doctor Card 1 */}
				<div className='bg-white p-6 rounded-lg shadow-md'>
					<img
						src='https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*'
						alt='Doctor 1'
						className='w-32 h-32 mx-auto rounded-full'
					/>
					<h2 className='text-xl font-semibold mt-4'>Dr. John Doe</h2>
					<p className='text-gray-500'>Cardiologist</p>
				</div>

				{/* Doctor Card 2 */}
				<div className='bg-white p-6 rounded-lg shadow-md'>
					<img
						src='https://yt3.googleusercontent.com/ytc/APkrFKYQtHv2GYhbAQkrTRknWk6YVrDLLZk1YovsUcT0Aw=s900-c-k-c0x00ffffff-no-rj'
						alt='Doctor 2'
						className='w-32 h-32 mx-auto rounded-full'
					/>
					<h2 className='text-xl font-semibold mt-4'>Dr. Jane Smith</h2>
					<p className='text-gray-500'>Pediatrician</p>
				</div>

				{/* Doctor Card 3 */}
				<div className='bg-white p-6 rounded-lg shadow-md'>
					<img
						src='https://victoria.mediaplanet.com/app/uploads/sites/103/2019/12/MainImage_A1-1-576x486.jpg'
						alt='Doctor 3'
						className='w-32 h-32 mx-auto rounded-full'
					/>
					<h2 className='text-xl font-semibold mt-4'>Dr. David Johnson</h2>
					<p className='text-gray-500'>Dermatologist</p>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
				{/* Patient Count */}
				<div className='bg-white p-6 rounded-lg shadow-md'>
					<h2 className='text-xl font-semibold'>Patients</h2>
					<p className='text-3xl font-bold mt-2'>{500}</p>
				</div>

				{/* Clinic Count */}
				<div className='bg-white p-6 rounded-lg shadow-md'>
					<h2 className='text-xl font-semibold'>Clinics</h2>
					<p className='text-3xl font-bold mt-2'>{150}</p>
				</div>

				{/* Doctor Count */}
				<div className='bg-white p-6 rounded-lg shadow-md'>
					<h2 className='text-xl font-semibold'>Doctors</h2>
					<p className='text-3xl font-bold mt-2'>{656}</p>
				</div>
			</div>
		</>
	);
};

export default HomeC;
