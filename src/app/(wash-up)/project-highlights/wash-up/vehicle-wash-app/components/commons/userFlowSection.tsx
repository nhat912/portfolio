import { vehicleWashAppMenu } from '@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/constants'
import ProjectSectionWrapper from '@/src/components/projectSectionWrapper'
import Image from 'next/image'

export default function UserFlowSection() {
    return (
        <ProjectSectionWrapper
            id={vehicleWashAppMenu[4].id}
            title={vehicleWashAppMenu[4].title}
        >
            <div className="mt-6 lg:mt-10 relative w-full h-[110px] lg:h-[306.98px]">
                <Image
                    fill
                    src="/vehicle-wash-app/user-flow.png"
                    alt="User Flow"
                />
            </div>
        </ProjectSectionWrapper>
    )
}
