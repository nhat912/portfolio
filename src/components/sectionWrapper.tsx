import BorderGradientWrapper from "@/src/components/borderGradientWrapper";
import { cn } from "@/src/lib/utils";
import { PropsWithChildren } from "react";

interface SectionWrapperProps extends PropsWithChildren {
    wrapperClassName?: string;
    divClassName?: string;
}

export function SectionWrapper({ children, wrapperClassName = '', divClassName = '' }: SectionWrapperProps) {
    return (
        <BorderGradientWrapper className={cn("rounded-[20px] md:rounded-[24px] overflow-hidden", wrapperClassName)}>
            <div className={cn("bg-24 px-4 py-5 rounded-[20px] md:rounded-[24px]", divClassName)}>
                {children}
            </div>
        </BorderGradientWrapper>
    );
}