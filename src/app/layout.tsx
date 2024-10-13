import Header from '@/src/components/header';
import { cookies } from 'next/headers';
import { siteConfig } from '@/src/config';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '../lib/utils';
import './globals.css';
import { AppProvider } from '@/src/providers/app-provider';
import PasswordDialog from '@/src/components/passwordDialog';

const fontSans = FontSans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = siteConfig.seo;

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = cookies();
	const keyValue = cookieStore.get('key')?.value;

	return (
		<html lang="en">
			<body
				className={cn(
					'min-h-screen antialiased text-sm lg:text-lg flex w-full flex-col relative text-accent',
					fontSans.className
				)}
			>
				<AppProvider keyValue={keyValue}>
					<Header />
					{children}
					<PasswordDialog />
				</AppProvider>
			</body>
		</html>
	);
}
