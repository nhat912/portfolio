'use client'

import { useToast } from "@/hooks/use-toast";
import BorderGradientWrapper from "@/src/components/borderGradientWrapper";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
    img: string;
    title: string;
    description: string;
    isReady: boolean;
    href: string;
    className?: string;
}

function ProjectCard({ img, title, description, isReady, href, className = '' }: ProjectCardProps) {
    const router = useRouter()
    const { toast } = useToast()

    return (
        <BorderGradientWrapper className={cn("rounded-[16px] md:rounded-[24px] lg:rounded-[32px] w-[272px] h-[267px] md:w-[408px] md:h-[394.5px] lg:w-[544px] lg:h-[516px]", className)}>
            <div className="bg-24 rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden">
                <div className="w-full overflow-hidden h-[153px] md:h-[229.5px] lg:h-[306px] relative">
                    <Image
                        fill
                        src={img}
                        alt={title}
                        className="object-cover"
                    />
                </div>
                <div className="py-4 md:py-5 lg:py-6 px-5 md:px-8 lg:px-10">
                    <div className="space-y-2 text-center">
                        <div className="text-xs md:text-lg lg:text-2xl font-bold md:font-semibold lg:font-bold text-f7">
                            {title}
                        </div>
                        <div className="text-d9 text-pretty lg:text-lg md:text-sm text-2xs">
                            {description}
                        </div>
                    </div>
                    <div className="mt-2 md:mt-4 lg:mt-5 flex justify-center">
                        <button
                            type="button"
                            onClick={() => {
                                if (isReady) { }
                                return isReady ? router.push(href) : toast({
                                    description: 'The project is not ready for viewing, but you can contact me to see the preview ~ 😄'
                                })
                            }}
                            className={cn('rounded-[4px] md:rounded-[5.82px] lg:rounded-[8px] font-semibold text-2xs md:text-sm w-[104px] h-8 md:w-[139px] md:h-[44px] text-xs', isReady ? 'bg-gradient-2 text-26' : 'text-92 bg-3a')}
                        >
                            {isReady ? 'Ready to view' : 'Coming soon'}
                        </button>
                    </div>
                </div>
            </div>
        </BorderGradientWrapper>
    );
}

export default ProjectCard;