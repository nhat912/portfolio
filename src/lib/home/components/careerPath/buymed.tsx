import Card from '@/src/components/card';
import QualityImage from '@/src/components/qualityImage';

export default function BuymedSection() {
	return (
		<section>
			<div className="space-y-2">
				<div className="text-lg">10/2022 - Now</div>
				<div className="flex flex-col lg:flex-row gap-1 font-bold lg:gap-2 text-2xl lg:text-[40px] lg:leading-normal">
					<div className="">UX/UI Designer at</div>
					<div className="bg-gradient w-fit">Buymed</div>
				</div>
			</div>
			<div className="space-y-2 lg:space-y-5 mt-4 lg:mt-5">
				<p className="space-x-1">
					<span>
						Develop a design system to shorten project development
						and deployment time while ensuring consistent product
						design across the Buymed ecosystem, including
					</span>
					<span className="font-bold">Thuocsi</span>
					<span>and</span>
					<span className="font-bold">Circa</span>
				</p>
				<p className="space-x-1">
					<span>Developing features in</span>
					<span className="font-bold">Thuocsi</span>
					<span>
						according to BA requests by creating wireframes,
						offering multiple design options, and building the UI
						based on the wireframes and specified requirements.
					</span>
				</p>
				<p className="space-x-1">
					<span>Contribute to the development of the</span>
					<span className="font-bold">Circa</span>
					<span>
						project by analyzing features, recommending improvements
						to ensure the logical implementation of BOD-requested
						features, and designing the user interface in line with
						stakeholders&apos; expectations while maintaining a
						strong user experience.
					</span>
					<span className="font-bold"></span>
				</p>
			</div>
			<div className="mt-4 lg:mt-[60px] grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 ">
				{/* <Card hasBorderBottom>
					<div className="w-full h-[179px] lg:h-[262px] relative">
						<QualityImage
							fill
							src="/home/images/medship.png"
							alt="medship"
							className="object-cover"
						/>
					</div>
					<h4 className="h-20 lg:h-[120px] flex items-center justify-center bg-gradient font-semibold lg:group-hover:bg-clip-border lg:group-hover:text-background transition-all">
						Medship - Health Care Platform
					</h4>
					<div className="h-0.5 w-full bg-black/30 absolute bottom-0 left-0"></div>
				</Card> */}
				<Card hasBorderBottom>
					<div className="w-full h-[179px] lg:h-[262px] relative">
						<QualityImage
							fill
							src="/home/images/circa.png"
							alt="circa"
							className="object-cover"
						/>
					</div>
					<h4 className="h-20 lg:h-[120px] flex items-center justify-center bg-gradient font-semibold lg:group-hover:bg-clip-border lg:group-hover:text-background transition-all">
						Circa - B2C Medical Ecommerce
					</h4>
					<div className="h-0.5 w-full bg-black/30 absolute bottom-0 left-0"></div>
				</Card>
				<Card hasBorderBottom>
					<div className="w-full h-[179px] lg:h-[262px] relative">
						<QualityImage
							fill
							src="/home/images/homepage.png"
							alt="homepage"
							className="object-cover"
						/>
					</div>
					<h4 className="h-20 lg:h-[120px] flex items-center justify-center bg-gradient font-semibold lg:group-hover:bg-clip-border lg:group-hover:text-background transition-all">
						Circa Franchise
					</h4>
					<div className="h-0.5 w-full bg-black/30 absolute bottom-0 left-0"></div>
				</Card>
				<Card hasBorderBottom>
					<div className="w-full h-[179px] lg:h-[262px] relative">
						<QualityImage
							fill
							src="/home/images/thuoc-si.png"
							alt="thuoc-si"
							className="object-cover"
						/>
					</div>
					<h4 className="h-20 lg:h-[120px] flex items-center justify-center bg-gradient font-semibold lg:group-hover:bg-clip-border lg:group-hover:text-background transition-all">
						Thuocsi - B2B Medical E-Commerce
					</h4>
					<div className="h-0.5 w-full bg-black/30 absolute bottom-0 left-0"></div>
				</Card>
			</div>
		</section>
	);
}
