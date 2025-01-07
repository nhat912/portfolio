import WashUpTitle from "@/src/app/(wash-up)/wash-up/components/washup-title";
import WashUpWrapper from "@/src/app/(wash-up)/wash-up/components/washup-wrapper";
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
        <WashUpWrapper className="w-full">
            <section className={cn("p-8 rounded-[8px] bg-24 text-lg", className)}>
                <WashUpTitle
                    id={id}
                    tag={tag}
                    value={title}
                    hasBottomBorder={hasBottomBorder}
                    className={titleClassName}
                />
                {children}
            </section>
        </WashUpWrapper>
    );
}

export default WashUpSection;