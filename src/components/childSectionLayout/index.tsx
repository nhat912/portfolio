import { cn } from "@/src/lib/utils";
import { PropsWithChildren } from "react";

export function Title({ value }: { value: string }) {
    return (
        <h2 className="text-xl font-bold lg:text-[40px] lg:leading-normal">{value}</h2>
    )
}

interface ChildSectionLayoutProps extends PropsWithChildren {
    value: string;
    className?: string;
}

function ChildSectionLayout({ value, children, className }: ChildSectionLayoutProps) {
    return (
        <section className={cn("space-y-5 lg:space-y-8", className)}>
            <Title value={value} />
            {children}
        </section>
    );
}

export default ChildSectionLayout;