'use client'

import { siteConfig } from "@/src/config";
import { cn } from "@/src/lib/utils";
import { ISidebarItem, SidebarItems, StatusEnum } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface BottomNavigationItemProps {
    item: ISidebarItem;
}


function BottomNavigationItem({ item }: BottomNavigationItemProps) {
    const pathName = usePathname();

    const isActive = useMemo(() => {
        if (item.href === siteConfig.pageList.home.href) {
            return pathName === siteConfig.pageList.home.href;
        }
        return pathName.startsWith(item.href);
    }, [pathName, item.href]);

    const currentStatus = useMemo(() => isActive ? StatusEnum.active : StatusEnum.normal, [isActive,]);

    return (
        <Link
            key={item.id}
            href={item.href}
            className={cn(
                "col-span-1 auto-rows-fr grid place-items-center",
                isActive ? "bg-39" : "bg-transparent"
            )}
        >
            <div className={cn("relative size-5")}>
                <Image
                    fill
                    src={item.status[currentStatus].icon}
                    alt={item.status[currentStatus].alt}
                />
            </div>
        </Link>
    );
}

function BottomNavigation() {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-[68px] bg-24">
            <div className="grid grid-cols-4 h-full">
                {SidebarItems.map((item) => (
                    <BottomNavigationItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default BottomNavigation;