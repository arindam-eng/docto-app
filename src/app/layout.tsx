import AuthProvider from '@/providers/AuthProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
				<body className={inter.className}>{children}</body>
			</AuthProvider>
		</html>
	);
}
