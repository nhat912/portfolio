import { ProjectHighLights } from "@/src/app/(pages)/project-highlights/constants";
import ProjectCard from "@/src/components/projectCard";

export default function MobileProjectHighLightsPage() {
    return (
        <main className="container pt-5 pb-10">
            <h1 className="text-lg font-semibold text-f7 text-center">
                Project HighLights
            </h1>
            <div className="mt-8 flex flex-col space-y-6 items-center">
                {ProjectHighLights.map((project) => (
                    <ProjectCard
                        key={project.id}
                        className="!flex-1 w-full"
                        {...project}
                    />
                ))}
            </div>
        </main>
    )
}
