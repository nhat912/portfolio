import { cn } from "@/src/lib/utils";
import { PropsWithChildren } from "react";

interface BorderGradientWrapperProps extends PropsWithChildren {
    className?: string;
}

function BorderGradientWrapper({ children, className = '' }: BorderGradientWrapperProps) {
    return (
        <div className={cn("rounded-[8px] p-px bg-gradient-to-br from-[#4F4F4F] via-24 to-[#4F4F4F] overflow-hidden", className)}>
            {children}
        </div>
    );
}

export default BorderGradientWrapper;