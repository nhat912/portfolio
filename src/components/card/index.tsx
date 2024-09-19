import { cn } from "@/src/lib/utils";
import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
    className?: string
    hasBorderBottom?: boolean
}

function Card({ children, className = '', hasBorderBottom = false }: CardProps) {
    return (
        <div
            className={cn("rounded-2xl overflow-hidden w-full border-[1px] border-gray-600 shadow-md shadow-black relative", className)}
        >
            {children}
            {hasBorderBottom && (
                <div className="h-0.5 w-full bg-black/30 absolute bottom-0 left-0"></div>
            )}
        </div>
    );
}

export default Card;