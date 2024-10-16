import AdminSection from '@/src/app/(pages)/dakoli/components/admin';
import CustomerSection from '@/src/app/(pages)/dakoli/components/customer';
import OverviewSection from '@/src/app/(pages)/dakoli/components/overview';
import FooterNote from '@/src/components/footerNote';
import Title from '@/src/components/title';
import { siteConfig } from '@/src/config';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: 'Dakoli',
};

export default function Page() {
	return (
		<Fragment>
			<main className="">
				<Title
					title="Dakoli:"
					subtitle="B2B Ecommerce Platform"
					className=""
				/>

				<div className="space-y-10 lg:space-y-[60px]">
					<OverviewSection />
					<CustomerSection />
					<section className="container">
						For the admin platform, I focused on presenting charts
						and data most intuitively and effectively. Additionally,
						the admin requires tools to manage products, and
						advertising campaigns, and provide cross-platform
						support to both sellers and customers through
						communication channels like chat and direct phone calls.
					</section>
					<AdminSection />
				</div>
			</main>

			<FooterNote value="Thanks for reading through." className="" />
		</Fragment>
	);
}
