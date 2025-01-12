'use client'

import WashUpWrapper from "@/src/app/(wash-up)/wash-up/components/washup-wrapper";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
    img: string;
    title: string;
    description: string;
    isReady: boolean;
    href: string;
}

function ProjectCard({ img, title, description, isReady, href }: ProjectCardProps) {
    const router = useRouter()

    return (
        <WashUpWrapper className="rounded-[21.06px] md:rounded-[24px] w-full md:w-[544px]">
            <div className="bg-24 rounded-[21.06px] md:rounded-[24px] overflow-hidden">
                <div className="w-full overflow-hidden h-[201.38px] sm:h-[229.5px] md:h-[306px] relative">
                    <Image
                        fill
                        src={img}
                        alt={title}
                        className="object-cover"
                    />
                </div>
                <div className="py-5 px-8">
                    <div className="space-y-2 text-center">
                        <div className="text-lg lg:text-2xl font-semibold lg:font-bold text-f7">
                            {title}
                        </div>
                        <div className="text-d9 text-pretty">
                            {description}
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button
                            type="button"
                            onClick={() => isReady && router.push(href)}
                            className={cn('rounded-[5.82px] font-semibold text-2xs md:text-sm w-[104px] h-8 md:w-[139px] md:h-[44px] text-xs font-semibold', isReady ? 'bg-gradient-2 text-26' : 'text-92 bg-3a')}
                        >
                            {isReady ? 'Ready to view' : 'Coming soon'}
                        </button>
                    </div>
                </div>
            </div>
        </WashUpWrapper>
    );
}

export default ProjectCard;