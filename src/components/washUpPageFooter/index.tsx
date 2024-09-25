'use client'

import ChildSectionLayout from "@/src/components/childSectionLayout";
import FeatureCard from "@/src/components/featureCard";
import { cn } from "@/src/lib/utils";
import { WASHUP_FEATURES } from "@/src/lib/wash-up/constants";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

interface WashUpPageFooterProps extends PropsWithChildren {
    value: string
    className?: string
}

function WashUpPageFooter({ className, value }: WashUpPageFooterProps) {
    const pathName = usePathname()

    return (
        <footer className={cn('container space-y-8 pb-[60px] mt-10 lg:mt-20', className)}>
            <ChildSectionLayout value="Other Feature" className="">
                <p>Here are some other WASHUP_features/apps of the Washup ecosystem.</p>
                <div className="grid grid-cols-2 gap-5">
                    {WASHUP_FEATURES.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            href={feature.href}
                            isActive={pathName === feature.href}
                        >
                            <div className="bg-gradient text-center font-semibold group-hover:from-[#F1ACBB] group-hover:to-[#F6E49D] transition-colors">
                                {feature.title}
                            </div>
                        </FeatureCard>
                    ))}
                </div>
            </ChildSectionLayout>
            <div className="flex items-center justify-between gap-x-3">
                <div className="flex-1 h-px bg-accent"></div>
                <div className="whitespace-nowrap font-semibold">{value}</div>
                <div className="flex-1 h-px bg-accent"></div>
            </div>
        </footer>
    );
}

export default WashUpPageFooter;