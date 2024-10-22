'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import ReviewTitle from '@/src/app/(pages)/case-studies/vp-bank/components/review/review-title'
import QualityImage from "@/src/components/qualityImage"
import { siteConfig } from "@/src/config"
import { useClientMediaQuery } from "@/src/helpers/useClientMediaQuery"
import { cn } from "@/src/lib/utils"
import { useEffect, useMemo, useState } from "react"

const MOBI_IMAGES = [
    '/case-studies/vp-bank/m-f-1.png',
    '/case-studies/vp-bank/m-f-2.png',
    '/case-studies/vp-bank/m-f-3.png',
]

const DESKTOP_IMAGES = [
    '/case-studies/vp-bank/f-1.png',
    '/case-studies/vp-bank/f-2.png',
    '/case-studies/vp-bank/f-3.png',
]

export default function FriendlyUISection() {
    const isClientMobile = useClientMediaQuery(siteConfig.mobileWidth)

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(1)

    const imageList = useMemo(() => isClientMobile ? MOBI_IMAGES : DESKTOP_IMAGES, [isClientMobile])

    const footerClassName = useMemo(() => {
        return current === 1 ? "justify-center" : "justify-between"
    }, [current])

    const previousTitle = useMemo(() => {
        return "Get back"
    }, [])

    const nextTitle = useMemo(() => {
        if (current === 1) return "Let’s cook it!!!"
        if (current === 2) return "Furthermore"

        return "That’s all"
    }, [current])

    useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div>
            <div className="space-y-2 lg:space-y-4">
                <ReviewTitle
                    value="Friendly UI"
                />
                <p>
                    The interface should have a modern style for reliability, while staying simple and easy to use for both 70% urban users and 30% rural users, including those aged 40-50.
                </p>
            </div>

            <Carousel
                setApi={setApi}
                className="w-full py-5 lg:pt-10 lg:pb-[60px]"
                opts={{
                    loop: true
                }}
            >
                <CarouselContent className="pb-4 lg:pb-10">
                    {imageList.map((image, index) => (
                        <CarouselItem key={index} className="">
                            <div className="p-1 relative w-full mx-auto h-[500px]">
                                <QualityImage
                                    fill
                                    quality={100}
                                    src={image}
                                    alt={`Friendly UI Image ${index + 1}`}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className={cn("flex", footerClassName)}>
                    {current !== 1 && (
                        <CarouselPrevious
                            text={previousTitle}
                        />
                    )}
                    <CarouselNext
                        text={nextTitle}
                        hasIcon={current !== 3}
                    />
                </div>
            </Carousel>
        </div>
    )
}
