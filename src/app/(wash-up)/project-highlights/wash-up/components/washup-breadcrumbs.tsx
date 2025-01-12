'use client'

import { siteConfig } from "@/src/config";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

interface BreadCrumbItem {
    label: string;
    href?: string;
}

interface WashUpBreadcrumbsProps {
    items: BreadCrumbItem[]
}

function WashUpBreadcrumbs({ items }: WashUpBreadcrumbsProps) {
    return (
        <nav className="flex items-center gap-x-5 absolute top-[108px] left-0">
            <Link href={siteConfig.pageList.home.href} className="size-5 relative">
                <Image
                    fill
                    src="/home-alt.svg"
                    alt="home icon"
                />
            </Link>
            <span className="mx-2.5"><ChevronRight /></span>
            {
                items.map((item, index) => (
                    <Fragment key={index}>
                        {index > 0 && <span className="mx-2.5">
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

export default WashUpBreadcrumbs;