'use client'

import ChildSectionLayout from "@/src/components/childSectionLayout";
import FeatureCard from "@/src/components/featureCard";
import FooterNote from "@/src/components/footerNote";
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
            <FooterNote value={value} />
        </footer>
    );
}

export default WashUpPageFooter;