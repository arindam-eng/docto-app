import React from 'react';

const Pagination = () => {
	return (
		<div className='flex justify-between mt-6'>
			<button className='bg-orange-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600'>
				&larr; Prev
			</button>
			<button className='bg-green-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600'>
				Next &rarr;
			</button>
		</div>
	);
};

export default Pagination;
