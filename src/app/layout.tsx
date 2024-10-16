import { inter } from '@/src/app/fonts';
import Header from '@/src/components/header';
import PasswordDialog from '@/src/components/passwordDialog';
import { siteConfig } from '@/src/config';
import { AppProvider } from '@/src/providers/app-provider';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { cn } from '../lib/utils';
import './globals.css';


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
					inter.className,
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
