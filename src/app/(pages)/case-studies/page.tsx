import DesktopCaseStudiesPage from '@/src/app/(pages)/case-studies/desktop';
import MobileCaseStudiesPage from '@/src/app/(pages)/case-studies/mobile';
import { siteConfig } from '@/src/config';
import { isMobileDevice } from '@/src/helpers/isMobileDevice';
import { Metadata } from 'next';

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: 'Case Studies',
};

export default async function Page() {
	const isMobile = await isMobileDevice()

	if (isMobile) {
		return <MobileCaseStudiesPage />
	}

	return (
		<DesktopCaseStudiesPage />
	);
}
