import { cn } from "@/src/lib/utils";
import { PropsWithChildren } from "react";

interface WashUpWrapperProps extends PropsWithChildren {
    className?: string;
}

function WashUpWrapper({ children, className = '' }: WashUpWrapperProps) {
    return (
        <div className={cn("rounded-[8px] p-px bg-gradient-to-br from-[#4F4F4F] via-24 to-[#4F4F4F]", className)}>
            {children}
        </div>
    );
}

export default WashUpWrapper;