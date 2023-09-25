/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { Loader } from '@/components/common/Loader';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';

const auth = () => {
	const { data, status } = useSession();

	if (status === 'loading') {
		console.log('====================================');
		console.log(status);
		console.log('====================================');
	}

	if (status === 'authenticated') {
		console.log('====================================');
		console.log(data);
		console.log('====================================');
	}
	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50'>
			<div className='bg-white p-8 rounded-lg shadow-md w-96'>
				<img src='https://cdn-icons-png.flaticon.com/512/2991/2991300.png' />
				<h1 className='text-2xl font-semibold mb-4 text-lime-400 text-center mt-5'>
					Docto App
				</h1>
				<button
					onClick={() => signIn('google')}
					className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full'
					disabled={status === 'loading'}
				>
					{status === 'loading' ? <Loader /> : 'Login with Google'}
				</button>
			</div>
		</div>
	);
};

export default auth;
