'use client'

import { siteConfig } from "@/src/config";
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

const BreadCrumb: BreadCrumbItem[] = [
    {
        label: 'Project Highlights',
        href: '/wash-up',
    },
    {
        label: 'Washup - Vehicle wash app',
        href: '/'
    },
]

function WashUpBreadcrumbs({ items }: WashUpBreadcrumbsProps) {
    return (
        <nav className="flex items-center gap-x-5">
            <Link href={siteConfig.pageList.home.href} className="size-5 relative">
                <Image
                    fill
                    src="/home-alt.svg"
                    alt="home icon"
                />
            </Link>
            <span className="mx-2.5">&gt;</span>
            {
                BreadCrumb.map((item, index) => (
                    <Fragment key={index}>
                        {index > 0 && <span className="mx-2.5">&gt;</span>}
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