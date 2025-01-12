'use client'

import WashUpSidebar from "@/src/app/(wash-up)/project-highlights/wash-up/components/washup-sidebar";
import { Item } from "@/src/lib/wash-up/constants";
import { PropsWithChildren } from "react";

interface WashUpLayoutProps extends PropsWithChildren {
    menu: Item[]
}

function WashUpLayout({ menu, children }: WashUpLayoutProps) {
    return (
        <>
            <WashUpSidebar
                items={menu}
            />
            <div className="space-y-6 flex-1">
                {children}
            </div>
        </>
    );
}

export default WashUpLayout;