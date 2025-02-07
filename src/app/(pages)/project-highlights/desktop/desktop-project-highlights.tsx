'use client'

import { ProjectHighLights } from '@/src/app/(pages)/project-highlights/constants';
import ProjectCard from '@/src/components/projectCard';
// import { useAppContext } from '@/src/providers/app-provider';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function DesktopProjectHighLightsPage() {

    return (
        <main className="p-20 flex flex-col gap-10">
            <h1 className="text-40 font-bold text-f7">
                Project Highlights
            </h1>
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 w-full">
                {ProjectHighLights.map((project) => (
                    <ProjectCard
                        key={project.id}
                        className="!w-fit"
                        titleClassName='lg:text-xl'
                        descClassName='lg:text-base'
                        {...project}
                    />
                ))}
            </div>
        </main>
    )
}
