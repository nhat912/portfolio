import { siteConfig } from "@/src/config/index";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full overflow-hidden">
            <div className="flex gap-1 h-[52px] items-center container text-xs font-semibold">
                <Link href="/" className="shrink-0 grow-0">
                    @nhatdesign
                </Link>
                <nav className="flex-1">
                    <ul className="flex items-center justify-end">
                        {Object.keys(siteConfig.paths).map((key) => {
                            const path = siteConfig.paths[key as keyof typeof siteConfig.paths];
                            return (
                                <li key={path.as} className="bg-gradient px-2">
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