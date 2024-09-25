'use client'

import { siteConfig } from "@/src/config/index";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathName = usePathname()

    return (
        <header className="w-full overflow-hidden">
            <div className="flex gap-1 h-[52px] lg:h-20 items-center container text-xs lg:text-lg font-semibold">
                <Link href="/" className="shrink-0 grow-0">
                    @nhatdesign
                </Link>
                <nav className="flex-1">
                    <ul className="flex items-center justify-end">
                        {Object.keys(siteConfig.paths).map((key) => {
                            const path = siteConfig.paths[key as keyof typeof siteConfig.paths];
                            return (
                                <li key={path.as} className={cn("px-2", pathName === path.href ? 'bg-gradient' : 'bg-transparent')}>
                                    <Link href={path.href} className="inline-block">
                                        {path.as}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}