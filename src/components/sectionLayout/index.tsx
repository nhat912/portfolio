import { cn } from "@/src/lib/utils";
import { PropsWithChildren } from "react";

interface SectionLayoutProps extends PropsWithChildren {
    className?: string;
}

function SectionLayout({ className, children }: SectionLayoutProps) {
    return (
        <section className={cn('container py-5', className)}>
            {children}
        </section>
    );
}

export default SectionLayout;