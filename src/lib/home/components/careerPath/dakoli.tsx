import Card from '@/src/components/card';
import Image from 'next/image';

export default function DakoliSection() {
	return (
		<section>
			<div className="space-y-2">
				<div className="text-lg">06/2022 - 10/2022</div>
				<div className="flex flex-col font-bold gap-1 lg:flex-row lg:gap-2 text-2xl lg:text-[40px] lg:leading-normal">
					<div className="">UX/UI Design Intern at</div>
					<div className="bg-gradient w-fit">USUM Software</div>
				</div>
			</div>
			<div className="space-y-4 mt-4">
				<p>
					Collaborate with other UX/UI designers by co-designing or
					helping with tasks and received a feedback. Creating all
					graphical assets.
				</p>
				<p className="space-x-1">
					<span>Participate in building</span>
					<span className="lg:font-extrabold">
						a management system
					</span>
					<span>
						for the Dakoli e-commerce platform project
						administrators.
					</span>
				</p>
				<p>
					Create dashboards for data and performance analysis of the
					Dakoli platform.
				</p>
			</div>

			<div className="flex flex-col gap-5 lg:flex-row lg:gap-8 mt-5 lg:mt-[50px]">
				<div className="space-y-3 w-full lg:w-1/2">
					<Card hasBorderBottom>
						<div className="w-full h-[179px] lg:h-[262px] relative">
							<Image
								fill
								src="/home/images/dakoli.png"
								alt="Dakoli"
								className=""
							/>
						</div>
						<h4 className="h-20 flex items-center justify-center bg-gradient font-semibold">
							Dakoli - B2B Ecommerce Platform
						</h4>
						<div className="h-0.5 w-full bg-black/30 absolute bottom-0 left-0"></div>
					</Card>
				</div>
			</div>
		</section>
	);
}
