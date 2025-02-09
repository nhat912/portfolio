import { vehicleWashAppMenu } from '@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/constants'
import ProjectSectionWrapper from '@/src/components/projectSectionWrapper'
import Image from 'next/image'
import React from 'react'

export default function UIDesignSection() {
  return (
    <ProjectSectionWrapper
      id={vehicleWashAppMenu[5].id}
      title={vehicleWashAppMenu[5].title}
    >
      <div className="mt-6 lg:mt-10 relative w-full h-[217.33px] lg:h-[601.33px] rounded-[8px] lg:rounded-[12px]">
        <Image
          fill
          src="/vehicle-wash-app/ud.webp"
          alt="UI Designer"
        />
      </div>
    </ProjectSectionWrapper>
  )
}
