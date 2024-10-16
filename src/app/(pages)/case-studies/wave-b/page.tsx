import ColorStylesSection from '@/src/app/(pages)/case-studies/wave-b/components/color-styles';
import FontStyleSection from '@/src/app/(pages)/case-studies/wave-b/components/font-style';
import IntroductionSection from '@/src/app/(pages)/case-studies/wave-b/components/introduction';
import LogoSection from '@/src/app/(pages)/case-studies/wave-b/components/logo';
import SitemapSection from '@/src/app/(pages)/case-studies/wave-b/components/sitemap-section';
import UserFlowSection from '@/src/app/(pages)/case-studies/wave-b/components/user-flow';
import WireframeSection from '@/src/app/(pages)/case-studies/wave-b/components/wireframe';
import FooterNote from '@/src/components/footerNote';
import Title from '@/src/components/title';
import { siteConfig } from '@/src/config';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: 'WaveB',
};

export default function Page() {
	return (
		<Fragment>
			<main className="">
				<Title
					title="Case studies:"
					subtitle="WaveB"
					className="flex-row lg:leading-normal"
				/>

				<div className="space-y-10 lg:space-y-20">
					<IntroductionSection />
					<LogoSection />
					<ColorStylesSection />
					<FontStyleSection />
					<SitemapSection />
					<UserFlowSection />
					<WireframeSection />
				</div>
			</main>

			<FooterNote
				value="Thanks for reading through."
				className=""
			/>
		</Fragment>
	);
}
