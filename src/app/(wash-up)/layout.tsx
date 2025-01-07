import { inter } from '@/src/app/fonts';
import PasswordDialog from '@/src/components/passwordDialog';
import { siteConfig } from '@/src/config';
import { cn } from '@/src/lib/utils';
import { AppProvider } from '@/src/providers/app-provider';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import '../globals.css';


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
					{children}
					<PasswordDialog />
				</AppProvider>
			</body>
		</html>
	);
}
