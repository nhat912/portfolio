
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface FeatureCardProps extends PropsWithChildren {
    isActive?: boolean
    href: string
}

function FeatureCard({
    children,
    href,
    isActive = false
}: FeatureCardProps) {
    return (
        <Link
            href={href}
            className={cn("col-span-1 shadow-black shadow lg:shadow-lg rounded-lg overflow-hidden p-px", isActive ? 'bg-gradient-to-tr from-secondary to-primary' : 'bg-[#4B4B53] group')}
        >
            <div className={cn("flex items-center rounded-lg justify-center py-4 lg:py-7 gap-2 lg:gap-3 bg-background")}>
                {!isActive && (
                    <Image
                        src="/home/icons/lock.svg"
                        alt="Lock"
                        width={12}
                        height={16}
                    />
                )}
                <div className="whitespace-nowrap">{children}</div>
            </div>
        </Link>
    );
}

export default FeatureCard;