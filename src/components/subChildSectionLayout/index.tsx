import { cn } from "@/src/lib/utils";
import { PropsWithChildren } from "react";

export function SubTitle({ value }: { value?: string }) {
    return (
        <h2 className="text-primary font-bold text-base lg:text-2xl">{value}</h2>
    )
}

interface SubChildSectionLayoutProps extends PropsWithChildren {
    value?: string;
    className?: string;
}

function SubChildSectionLayout({ value, children, className }: SubChildSectionLayoutProps) {
    return (
        <section className={cn("space-y-2", className)}>
            <SubTitle value={value} />
            {children}
        </section>
    );
}

export default SubChildSectionLayout;