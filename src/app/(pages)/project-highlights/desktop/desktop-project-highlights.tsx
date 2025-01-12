'use client'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination, Navigation } from 'swiper'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProjectCard from '@/src/components/projectCard';
import { ProjectHighLights } from '@/src/app/(pages)/project-highlights/constants';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function DesktopProjectHighLightsPage() {
    return (
        <main className="p-10">
            <h1 className="text-32 font-bold text-f7 text-center">
                Case Studies
            </h1>
            <div className="mt-[60px] overflow-hidden">
                <div className="w-fit grid grid-cols-2 mx-auto gap-8">
                    {ProjectHighLights.map((project) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                        />
                    ))}
                </div>
                {/* <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="swiper_container"
                >
                    {ProjectHighLights.map((project) => (
                        <SwiperSlide key={project.id} className='!h-[306px] !w-[16rem] !relative'>
                            <ProjectCard
                                key={project.id}
                                {...project}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper> */}

                {/* <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {ProjectHighLights.map((project) => (
                        <SwiperSlide key={project.id} className=''>
                            <ProjectCard
                                key={project.id}
                                {...project}
                            />
                            <img src={project.img} alt="slide_image" />
                        </SwiperSlide>
                    ))}
                </Swiper> */}
                {/* <Swiper
                    grabCursor
                    centeredSlides
                    effect={'coverflow'}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
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
                        <SwiperSlide key={project.id} className=''>
                            <ProjectCard
                                key={project.id}
                                {...project}
                            />
                        </SwiperSlide>
                    ))}

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ChevronLeft className="text-white fill-white" size={24} strokeWidth={2} />
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ChevronRight className="text-white fill-white" size={24} strokeWidth={2} />
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper> */}
                {/* <Swiper
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
                    modules={[
                        EffectCoverflow,
                        Pagination, Navigation]}
                    className="swiper_container !relative w-full !h-[628px]"
                >
                    {ProjectHighLights.map((project) => (
                        <SwiperSlide key={project.id} className='!relative !w-[544px] !h-[516px]'>
                            <ProjectCard
                                key={project.id}
                                {...project}
                            />
                        </SwiperSlide>
                    ))}

                    <div className="slider-controller relative bottom-4 flex items-center justify-center">
                        <div className="swiper-button-prev slider-arrow text-white left-1">
                            <ChevronLeft className="text-white fill-white" size={24} strokeWidth={2} />
                        </div>
                        <div className="swiper-button-next slider-arrow text-white right-1">
                            <ChevronRight className="text-white fill-white" size={24} strokeWidth={2} />
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper> */}
            </div>
        </main>
    )
}
