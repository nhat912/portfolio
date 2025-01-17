'use client'

import ProjectSidebar from "@/src/components/projectSidebar";
import { Item } from "@/src/utils";
import { PropsWithChildren } from "react";

interface ProjectLayoutProps extends PropsWithChildren {
    menu: Item[]
}

function ProjectLayout({ menu, children }: ProjectLayoutProps) {
    return (
        <>
            <ProjectSidebar
                items={menu}
            />
            <div className="space-y-6 flex-1">
                {children}
            </div>
        </>
    );
}

export default ProjectLayout;