'use client'

import { useToast } from '@/hooks/use-toast';
import { ProjectHighLights } from '@/src/app/(pages)/project-highlights/constants';
import { cn } from '@/src/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function DesktopProjectHighLightsPage() {
    const router = useRouter();
    const { toast } = useToast()

    return (
        <main className="p-10 overflow-hidden">
            <h1 className="text-32 font-bold text-f7 text-center">
                Project Highlights
            </h1>
            <div className="mt-[60px] overflow-hidden">
                <Swiper
                    grabCursor
                    centeredSlides
                    preventClicks
                    initialSlide={2}
                    speed={600}
                    slidesPerView={'auto'}
                    effect={'coverflow'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 80,
                        depth: 350,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="!h-[379px] md:!h-[506.5px] lg:!h-[628px] !relative !w-full"
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        enabled: true,

                    }}
                >
                    {ProjectHighLights.map(({ id, img, title, description, isReady, href }) => (
                        <SwiperSlide key={id} className='rounded-[16px] md:rounded-[24px] lg:rounded-[32px] !w-[272px] !h-[267px] md:!w-[408px] md:!h-[394.5px] lg:!w-[544px] lg:!h-[516px] !relative overflow-hidden'>
                            <div className="w-full h-[153px] md:h-[229.5px] lg:h-[306px] relative rounded-t-[32px]">
                                <Image
                                    fill
                                    src={img}
                                    alt={title}
                                    className="object-cover"
                                />
                            </div>
                            <div className="py-4 md:py-5 lg:py-6 px-5 md:px-8 lg:px-10 bg-24 h-full">
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
                                        onClick={() => isReady ? router.push(href) : toast({
                                            description: 'The project is not ready for viewing, but you can contact me to see the preview ~ 😄'
                                        })}
                                        className={cn('rounded-[4px] md:rounded-[5.82px] lg:rounded-[8px] font-semibold text-2xs md:text-sm w-[104px] h-8 md:w-[139px] md:h-[44px] text-xs', isReady ? 'bg-gradient-2 text-26' : 'text-92 bg-3a')}
                                    >
                                        {isReady ? 'Ready to view' : 'Coming soon'}
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="slider-controller">
                        <div className="swiper-button-prev slider-arrow">
                            <ChevronLeft className="" size={38} strokeWidth={2} />
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ChevronRight className="" size={38} strokeWidth={2} />
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </main>
    )
}
