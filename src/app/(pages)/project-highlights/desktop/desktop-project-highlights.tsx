'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProjectCard from '@/src/components/projectCard';
import { ProjectHighLights } from '@/src/app/(pages)/project-highlights/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function DesktopProjectHighLightsPage() {
    return (
        <main className="flex flex-col gap-[60px] items-center justify-center p-10">
            <h1 className="text-32 font-bold text-f7 text-center">
                Case Studies
            </h1>
            <div className="">
                <Swiper
                    loop
                    grabCursor
                    centeredSlides
                    slidesPerView={'auto'}
                    effect={'coverflow'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 200,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        enabled: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    {ProjectHighLights.map((project) => (
                        <SwiperSlide key={project.id}>
                            <ProjectCard
                                key={project.id}
                                {...project}
                            />
                        </SwiperSlide>
                    ))}

                    <div className="slider-controller">
                        <div className="swiper-button-prev slider-arrow">
                            <ChevronLeft size={32} />
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ChevronRight size={32} />
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </main>
    )
}
