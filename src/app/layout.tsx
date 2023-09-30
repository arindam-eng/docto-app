import AuthProvider from '@/providers/AuthProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/home/Header';
import DoctorSearchForm from '@/components/home/DoctorSearchForm';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Docto',
	description: 'Doctor appointment app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<AuthProvider>
				<body className={inter.className}>
					<Header />
					<div className='min-h-screen bg-gray-100'>
						<main className='md:container md:mx-auto'>
							<div className='bg-white p-6 rounded-lg shadow-md'>
								<DoctorSearchForm />
								<hr className='bg-gray-800 m-4'/>
								{children}
								<footer className='bg-gray-800 text-white py-4 mt-8'>
									<div className='md:container mx-auto text-center'>
										<p>
											&copy; {new Date().getFullYear()} Docto pvt. Ltd. All
											rights reserved.
										</p>
									</div>
								</footer>
							</div>
						</main>
					</div>
				</body>
			</AuthProvider>
		</html>
	);
}
