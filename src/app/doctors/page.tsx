import DoctorListItem from '@/components/doctors/DoctorListItem';
import Pagination from '@/components/common/Pagination';
import React from 'react';

const DoctorList = () => {
	const doctors = [
		{
			id: 1,
			name: 'Doctor 1',
			specialization: 'Specialization 1',
			degree: 'MD',
			experience: '5 years',
		},
		{
			id: 2,
			name: 'Doctor 2',
			specialization: 'Specialization 2',
			degree: 'DO',
			experience: '8 years',
		},
		{
			id: 3,
			name: 'Doctor 3',
			specialization: 'Specialization 3',
			degree: 'MBBS',
			experience: '10 years',
		},
		// Add more doctors here
	];
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
