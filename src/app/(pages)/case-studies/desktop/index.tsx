import { CaseStudies } from '@/src/app/(pages)/case-studies/constants'
import ProjectCard from '@/src/components/projectCard'
import React from 'react'

export default function DesktopCaseStudiesPage() {
    return (
        <main className="flex flex-col gap-[60px] items-center mt-10">
            <h1 className="text-32 font-bold text-f7 text-center">
                Case Studies
            </h1>
            <div className="flex gap-x-8 items-center justify-center">
                {CaseStudies.map((project) => (
                    <ProjectCard
                        key={project.id}
                        {...project}
                    />
                ))}
            </div>
        </main>
    )
}
