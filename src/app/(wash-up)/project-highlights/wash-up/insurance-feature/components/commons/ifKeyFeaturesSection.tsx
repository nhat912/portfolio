import { insuranceFeatureMenu } from '@/src/app/(wash-up)/project-highlights/wash-up/insurance-feature/constants'
import { keyFeatures } from '@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/constants'
import ProjectSectionWrapper from '@/src/components/projectSectionWrapper'
import Image from 'next/image'

export default function IFKeyFeaturesSection() {
    return (
        <ProjectSectionWrapper
            id={insuranceFeatureMenu[1].id}
            title={insuranceFeatureMenu[1].title}
        >
            <div className="mt-10 space-y-10">
                {keyFeatures.map((feature) => (
                    <div
                        key={feature.title}
                        className="flex gap-x-10 justify-between items-center">
                        <div className="flex-1">
                            <h3 className="text-2xl font-extrabold text-f7">
                                {feature.title}
                            </h3>
                            <p>
                                {feature.description}
                            </p>
                        </div>
                        <div className="size-[200px] grow-0 shrink-0 relative">
                            <Image
                                fill
                                src={feature.icon}
                                alt={feature.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </ProjectSectionWrapper>
    )
}
