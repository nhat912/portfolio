'use client'

import { cn } from "@/src/lib/utils";
import { WASHUP_FEATURES } from "@/src/lib/wash-up/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";


function WashUpPageSelector() {
    const pathName = usePathname()

    return (
        <div className="flex-1 flex justify-around items-center bg-24 h-[100px] w-full rounded-md">
            {WASHUP_FEATURES.map((page, index) => (
                <Link key={index} href={page.href}
                    className={cn("font-bold text-[#92929E] inline-block w-full text-center py-4", pathName === page.href && "text-f7]")}
                >
                    {page.title}
                </Link>
            ))}
        </div>
    );
}

export default WashUpPageSelector;