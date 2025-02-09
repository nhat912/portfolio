import { keyFeatures, vehicleWashAppMenu } from "@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/constants";
import ProjectSectionWrapper from "@/src/components/projectSectionWrapper";
import Image from "next/image";

export default function KeyFeaturesSection() {
    return (
        <ProjectSectionWrapper
            id={vehicleWashAppMenu[2].id}

            title={vehicleWashAppMenu[2].title}
        >
            <div className="mt-6 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 auto-rows-fr auto-cols-fr">
                {keyFeatures.map((item) => (
                    <div
                        key={item.title}
                        className="col-span-1 flex gap-x-5">
                        <i className="size-6 lg:size-8 relative grow-0 shrink-0 mt-1">
                            <Image
                                fill
                                src={item.icon}
                                alt={item.title}
                            />
                        </i>
                        <div className="space-y-2">
                            <div className="text-base lg:text-lg text-f7">
                                {item.title}
                            </div>
                            <div className="text-d9">
                                {item.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </ProjectSectionWrapper>
    )
}
