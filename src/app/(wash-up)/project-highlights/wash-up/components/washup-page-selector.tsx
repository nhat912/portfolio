'use client'

import BorderGradientWrapper from "@/src/components/borderGradientWrapper";
import { cn } from "@/src/lib/utils";
import { WASHUP_FEATURES } from "@/src/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";


function WashUpPageSelector() {
    const pathName = usePathname()

    return (
        <BorderGradientWrapper className="flex-1">
            <div className="flex justify-around items-center bg-24 h-[100px] w-full rounded-md">
                {WASHUP_FEATURES.map((page, index) => (
                    <Link key={index} href={page.href}
                        className={cn("font-bold text-[#92929E] inline-block w-full text-center py-4", pathName === page.href ? "text-f7" : "hover:text-f7")}
                    >
                        {page.title}
                    </Link>
                ))}
            </div>
        </BorderGradientWrapper>
    );
}

export default WashUpPageSelector;