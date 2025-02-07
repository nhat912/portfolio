import { CaseStudies } from '@/src/app/(pages)/case-studies/constants';
import ProjectCard from '@/src/components/projectCard';

export default function DesktopCaseStudiesPage() {
    return (
        <main className="flex flex-col gap-10 p-20">
            <h1 className="text-40 font-bold text-f7">
                Case Studies
            </h1>
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 w-full">
                {CaseStudies.map((project) => !project.id.startsWith('empty') && (
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