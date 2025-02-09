import { vehicleWashAppMenu } from '@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/constants'
import ProjectSectionWrapper from '@/src/components/projectSectionWrapper'
import Image from 'next/image'
import React from 'react'

export default function GeneralSection() {
    return (
        <ProjectSectionWrapper
            id={vehicleWashAppMenu[0].id}
            tag='h1'
            title='Vehicle wash app'
            titleClassName='text-2xl'
            hasBottomBorder={false}
        >
            <div className="mt-4 space-y-4 lg:mt-10 lg:space-y-5">
                <p>
                    Washup is a mobile app that makes motorbike and car care effortless. Connect with top car wash services near you and book a wash anytime, anywhere, with just a few taps.
                </p>
                <p>
                    For motorbike owners, Washup offers a unique feature: A specialized toolkit that allows technicians to wash motorbikes anywhere you want. This portable device, worn on the technician&apos;s back, uses just 2 litres of water and completes a wash in only 10 minutes.
                </p>
            </div>
            <div className="w-full h-[183.38px] rounded-[4px] lg:h-[507.38px] lg:rounded-[12px overflow-hidden relative mt-6 lg:mt-10">
                <Image
                    fill
                    priority
                    className=""
                    src="/vehicle-wash-app/vehicle-wash-app.webp"
                    alt="vehicle-wash-app"
                />
            </div>
        </ProjectSectionWrapper>
    )
}
