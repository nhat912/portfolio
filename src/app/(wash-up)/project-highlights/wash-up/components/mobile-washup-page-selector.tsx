'use client';

import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import BorderGradientWrapper from "@/src/components/borderGradientWrapper";
import { WASHUP_FEATURES } from "@/src/utils";
import { Check } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

function MobileWashUpSectionSelector() {
    const pathName = usePathname()
    const router = useRouter()
    const [open, setOpen] = useState(false);

    const handleClick = (href: string) => {
        setOpen(false);
        router.push(href);
    }

    return (
        <Drawer
            open={open}
            onOpenChange={setOpen}
        >
            <DrawerTrigger asChild>
                <button className="">
                    <BorderGradientWrapper className="w-[136px] h-11 rounded-[12px]">
                        <div className="bg-24 w-full h-full rounded-[12px] flex gap-x-2 justify-center items-center">
                            <Image
                                src="/more-sections.svg"
                                alt="More sections"
                                width={20}
                                height={20}
                            />
                            <span className="text-gradient font-semibold text-xs">
                                More sections
                            </span>
                        </div>
                    </BorderGradientWrapper>
                </button>
            </DrawerTrigger>
            <DrawerContent className="">
                <DrawerHeader className="pb-8">
                    <DrawerTitle className="py-1">More sections</DrawerTitle>
                    <DrawerDescription>
                        {WASHUP_FEATURES.map(item => (
                            <button
                                key={item.href}
                                className="flex justify-between w-full py-3"
                                onClick={() => handleClick(item.href)}
                            >
                                <span>{item.title}</span>
                                {pathName === item.href && (
                                    <Check size={20} className="text-f7" />
                                )}
                            </button>
                        ))}
                    </DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    );
}

export default MobileWashUpSectionSelector;