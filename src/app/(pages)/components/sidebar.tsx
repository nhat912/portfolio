'use client'

import { siteConfig } from "@/src/config";
import { cn } from "@/src/lib/utils";
import { ISidebarItem, SidebarItems, StatusEnum } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

interface SidebarItemProps {
    item: ISidebarItem;
}

function SidebarItem({ item }: SidebarItemProps) {
    const pathName = usePathname();
    const [status, setStatus] = useState<StatusEnum>(StatusEnum.normal);

    const isActive = useMemo(() => {
        if (item.href === siteConfig.pageList.home.href) {
            return pathName === siteConfig.pageList.home.href;
        }
        return pathName.startsWith(item.href);
    }, [pathName, item.href]);

    const currentStatus = useMemo(() => isActive ? StatusEnum.active : status, [isActive, status]);

    return (
        <Link
            key={item.id}
            href={item.href}
            className={cn(
                "w-full h-[84px] grid place-items-center",
                isActive ? "bg-39" : "bg-transparent"
            )}
            onMouseEnter={() => setStatus(StatusEnum.hover)}
            onMouseLeave={() => setStatus(StatusEnum.normal)}
        >
            <div className={cn("relative size-[44px]")}>
                <Image
                    fill
                    src={item.status[currentStatus].icon}
                    alt={item.status[currentStatus].alt}
                />
            </div>
        </Link>
    );
}


function Sidebar() {
    return (
        <div
            className="bg-24 pt-10 lg:pt-20"
        >
            {SidebarItems.map((item) => (
                <SidebarItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default Sidebar;