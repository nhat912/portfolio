import Card from '@/src/components/card';
import ChildSectionLayout from '@/src/components/childSectionLayout';
import Footer from '@/src/components/footer';
import QualityImage from '@/src/components/qualityImage';
import Title from '@/src/components/title';
import { siteConfig } from '@/src/config';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: 'Case Studies',
};

export default function Page() {
	return (
		<Fragment>
			<main className="pb-10 lg:pb-[100px]">
				<Title title="Case studies" />
				<ChildSectionLayout value="Overview" className="container">
					<div className="space-y-2 lg:space-y-3 mt-4 lg:mt-8">
						<p>
							This collection presents two key case studies from
							different stages of my professional journey.
						</p>
						<ul className="list-outside list-disc container space-y-2">
							<li className="space-x-1">
								<span>The first case study name</span>
								<span className="text-primary">WaveB</span>
								<span>
									, completed as a fresher UI/UX Designer,
									highlights my early approach to
									problem-solving and project execution.
								</span>
							</li>
							<li>
								The second related to VP Bank App UX problems,
								completed six months ago, showcases my growth,
								refined skills, and ability to deliver impactful
								results with more advanced techniques. Both
								projects reflect my continuous learning and
								adaptability in evolving professional
								environments.
							</li>
						</ul>
					</div>

					<div className="flex flex-col gap-5 lg:flex-row lg:gap-8 mt-5 lg:mt-[60px]">
						<div className="flex-1">
							<Card hasBorderBottom href="/case-studies/vp-bank">
								<div className="w-full h-[179px] lg:h-[262px] relative">
									<QualityImage
										fill
										src="/case-studies/vp.png"
										alt="VP Bank"
										className=""
									/>
								</div>
								<h4 className="h-20 lg:h-[120px] flex items-center justify-center bg-gradient font-semibold lg:group-hover:bg-clip-border lg:group-hover:text-background transition-all">
									VP Bank App - UX problems
								</h4>
								<div className="h-0.5 w-full bg-black/30 absolute bottom-0 left-0"></div>
							</Card>
						</div>
						<div className="flex-1">
							<Card hasBorderBottom href="/case-studies/wave-b">
								<div className="w-full h-[179px] lg:h-[262px] relative">
									<QualityImage
										fill
										src="/case-studies/waveb.png"
										alt="Wave B"
										className=""
									/>
								</div>
								<h4 className="h-20 lg:h-[120px] flex items-center justify-center bg-gradient font-semibold lg:group-hover:bg-clip-border lg:group-hover:text-background transition-all">
									WaveB - Blockchain Platform
								</h4>
								<div className="h-0.5 w-full bg-black/30 absolute bottom-0 left-0"></div>
							</Card>
						</div>
					</div>
				</ChildSectionLayout>
			</main>
			<Footer />
		</Fragment>
	);
}
