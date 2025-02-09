import { vehicleWashAppMenu } from '@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/constants'
import ProjectSectionWrapper from '@/src/components/projectSectionWrapper'
import Image from 'next/image'

interface UserJourneysSectionProps {
    imgSrc: string
}

export default function UserJourneysSection({ imgSrc }: UserJourneysSectionProps) {
    return (
        <ProjectSectionWrapper
            id={vehicleWashAppMenu[3].id}

            title={vehicleWashAppMenu[3].title}
        >
            <div className="mt-6 lg:mt-10 relative w-full lg:h-[160px] h-[224px]">
                <Image
                    fill
                    src={imgSrc}
                    alt="User Journeys"
                />
            </div>
        </ProjectSectionWrapper>
    )
}
