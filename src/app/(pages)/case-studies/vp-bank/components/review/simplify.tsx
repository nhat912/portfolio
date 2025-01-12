
'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import ReviewTitle from "@/src/app/(pages)/case-studies/vp-bank/components/review/review-title"
import QualityImage from "@/src/components/qualityImage"
import { siteConfig } from "@/src/config"
import { useClientMediaQuery } from "@/src/helpers/useClientMediaQuery"
import { useMemo } from "react"

const MOBI_IMAGES = [
    '/case-studies/vp-bank/m-s-1.png',
    '/case-studies/vp-bank/m-s-2.png',
]

const DESKTOP_IMAGES = [
    '/case-studies/vp-bank/s-1.png',
    '/case-studies/vp-bank/s-2.png',
]
export default function SimplifySection() {
    const isClientMobile = useClientMediaQuery(siteConfig.mobileWidth)
    const imageList = useMemo(() => isClientMobile ? MOBI_IMAGES : DESKTOP_IMAGES, [isClientMobile])

    return (
        <div className="pt-6 lg:pt-[60px] border-t-2 border-dashed border-4b">
            <div className="space-y-2 lg:space-y-4">
                <ReviewTitle
                    value="Simplify the process"
                />
                <p>
                    Remove unnecessary steps and reduce the overall number of steps. For example, based on the user’s previous information, allow them to choose an auto-fill option. This makes the experience easier and eliminates repetitive fields like name, phone number, and address.
                </p>
            </div>

            <Carousel
                className="w-full py-5 lg:pt-10 lg:pb-[60px]"
            >
                <CarouselContent className="pb-4 lg:pb-10">
                    {imageList.map((image, index) => (
                        <CarouselItem key={index} className="">
                            <div className="p-1 relative w-full mx-auto h-[500px]">
                                <QualityImage
                                    fill
                                    quality={100}
                                    src={image}
                                    alt={`Initiative Image ${index + 1}`}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className={"flex justify-center"}>
                    <CarouselPrevious
                        text={'Get back'}
                    />
                    <CarouselNext
                        text={'New Evolution!'}
                    />
                </div>
            </Carousel>
        </div>
    )
}
