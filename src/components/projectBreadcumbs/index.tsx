'use client'

import { siteConfig } from "@/src/config";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

interface BreadCrumbItem {
    label: string | JSX.Element;
    href?: string;
}

interface ProjectBreadcrumbsProps {
    items: BreadCrumbItem[]
}

function ProjectBreadcrumbs({ items }: ProjectBreadcrumbsProps) {

    return (
        <nav className="flex items-center gap-x-3 lg:gap-x-5 absolute top-10 lg:top-[108px] left-6">
            <Link href={siteConfig.pageList.home.href} className="size-4 lg:size-5 relative">
                <Image
                    fill
                    src="/home-alt.svg"
                    alt="home icon"
                />
            </Link>

            <span className="block lg:hidden"><ChevronRight color="#4E4D57" size={16} className="" /></span>
            <span className="hidden lg:block"><ChevronRight color="#4E4D57" size={20} className="" /></span>
            <Link href={siteConfig.pageList.home.href} className="size-4 relative lg:hidden">
                <Image
                    fill
                    src="/briefcase-alt.svg"
                    alt="briefcase icon"
                />
            </Link>

            <Link href={siteConfig.pageList.projectHighlights.href}>
                <span className="text-[#92929E] hover:text-f7 truncate hidden lg:block">{siteConfig.pageList.projectHighlights.as}</span>
            </Link>
            <span className="block lg:hidden"><ChevronRight color="#4E4D57" size={16} className="" /></span>
            <span className="hidden lg:block"><ChevronRight color="#4E4D57" size={20} className="" /></span>

            {
                items.map((item, index) => (
                    <Fragment key={index}>
                        {index > 0 && <span className="">
                            <ChevronRight /></span>}
                        {index === items.length - 1 ? (
                            <span className="text-f7 truncate">{item.label}</span>
                        ) : (
                            <Link href={item.href as string}>
                                <span className="text-[#92929E] hover:text-f7 truncate">{item.label}</span>
                            </Link>
                        )}
                    </Fragment>
                ))
            }
        </nav>
    );
}

export default ProjectBreadcrumbs;