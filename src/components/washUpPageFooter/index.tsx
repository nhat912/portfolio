'use client'

import ChildSectionLayout from "@/src/components/childSectionLayout";
import FeatureCard from "@/src/components/featureCard";
import { cn } from "@/src/lib/utils";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

interface WashUpPageFooterProps extends PropsWithChildren {
    value: string
    className?: string
}

export const WASHUP_FEATURES = [
    {
        href: '/wash-up/vehicle-wash-app',
        title: 'Vehicle wash app'
    },
    {
        href: '/wash-up/insurance-feature',
        title: 'Insurance Feature'
    },
    {
        href: '/wash-up/technician-app',
        title: 'Technician app'
    },
    {
        href: '/wash-up/technician-order',
        title: 'Technician Order'
    }
]

function WashUpPageFooter({ className, value }: WashUpPageFooterProps) {
    const pathName = usePathname()

    return (
        <footer className={cn('container space-y-8', className)}>
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