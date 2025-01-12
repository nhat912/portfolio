import { CaseStudies } from "@/src/app/(pages)/case-studies/constants";
import ProjectCard from "@/src/components/projectCard";

export default function MobileCaseStudiesPage() {
    return (
        <main className="container pt-5 pb-10">
            <h1 className="text-lg font-semibold text-f7 text-center">
                Case Studies
            </h1>
            <div className="mt-8 space-y-6">
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
