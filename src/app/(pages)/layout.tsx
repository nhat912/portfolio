import { inter } from '@/src/app/fonts';
import PasswordDialog from '@/src/components/passwordDialog';
import { siteConfig } from '@/src/config';
import { AppProvider } from '@/src/providers/app-provider';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import '../globals.css';
import { cn } from '@/src/lib/utils';
import { isMobileDevice } from '@/src/helpers/isMobileDevice';
import Sidebar from '@/src/app/(pages)/components/sidebar';
import BottomNavigation from '@/src/app/(pages)/components/bottom-navigation';
import { Toaster } from '@/components/ui/toaster';


export const metadata: Metadata = siteConfig.seo;

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = cookies();
	const keyValue = cookieStore.get('key')?.value;
	const isMobile = await isMobileDevice()

	return (
		<html lang="en">
			<body
				className={cn(
					'min-h-screen antialiased text-sm lg:text-lg flex w-full flex-col relative text-accent',
					inter.className,
				)}
			>
				<AppProvider keyValue={keyValue}>
					{isMobile ? (
						<div className='pb-[68px] text-sm'>
							{children}
							<BottomNavigation />
						</div>
					) : (
						<div className="grid grid-cols-[100px,1fr] min-h-screen">
							<Sidebar />
							{children}
						</div>
					)}
					<PasswordDialog />
					<Toaster />
				</AppProvider>
			</body>
		</html>
	);
}
