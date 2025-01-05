import WashUpTitle from "@/src/app/(pages)/wash-up/components/washup-title";
import { cn } from "@/src/lib/utils";
import { PropsWithChildren } from "react";

interface WashUpSectionProps extends PropsWithChildren {
    className?: string
    tag?: keyof JSX.IntrinsicElements;
    title: string;
    id: string;
    hasBottomBorder?: boolean
    titleClassName?: string
}

function WashUpSection({ id, tag = 'h2', title, children, className = '', hasBottomBorder = true, titleClassName = '' }: WashUpSectionProps) {
    return (
        <div className={cn("p-8 rounded-[8px] bg-24 border border-gray-700 text-lg", className)}>
            <WashUpTitle
                id={id}
                tag={tag}
                value={title}
                hasBottomBorder={hasBottomBorder}
                className={titleClassName}
            />
            {children}
        </div>
    );
}

export default WashUpSection;