import { cn } from "@/src/lib/utils";
import { Item } from "@/src/lib/wash-up/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface WashUpSidebarProps {
    items: Item[]
}

function WashUpSidebar({ items }: WashUpSidebarProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = items.map(item => document.getElementById(item.id));
            // const scrollPosition = window.scrollY + window.innerHeight / 2;

            let currentId = "";
            let maxVisibleHeight = 0;

            sections.forEach(section => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

                    if (visibleHeight > maxVisibleHeight) {
                        maxVisibleHeight = visibleHeight;
                        currentId = section.id;
                    }
                }
            });

            setActiveId(currentId);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [items]);

    if (!items.length) return null;

    return (
        <div className="w-[250px] grow-0 shrink-0 h-fit bg-24 rounded-[8px] sticky top-28">
            {items.map((item) => (
                <Link key={item.id} href={`#${item.id}`}
                    className={cn("flex items-center gap-x-3 w-[250px] h-[64px] text-[#5E5E6B] hover:text-f7 px-5", activeId === item.id && "text-f7")}
                >
                    {activeId === item.id && <span className="block size-2 rounded-full bg-f7"></span>}
                    <span className="text-lg font-bold">{item.title}</span>
                </Link>
            ))}
        </div>
    );
}

export default WashUpSidebar;