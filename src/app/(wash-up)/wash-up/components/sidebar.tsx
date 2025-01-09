import WashUpWrapper from "@/src/app/(wash-up)/wash-up/components/washup-wrapper";
import { cn } from "@/src/lib/utils";
import { Item } from "@/src/lib/wash-up/constants";
import { useEffect, useState } from "react";

export interface WashUpSidebarProps {
    items: Item[]
}

function WashUpSidebar({ items }: WashUpSidebarProps) {
    const [activeId, setActiveId] = useState<string>(items[0].id);

    useEffect(() => {
        const handleScroll = () => {
            const sections = items.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            let currentId = activeId;

            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1) {
                currentId = items[items.length - 1].id;
            } else if (window.scrollY === 0) {
                currentId = items[0].id;
            } else {
                sections.forEach((section) => {
                    if (section) {
                        const rect = section.getBoundingClientRect();
                        const sectionTop = window.scrollY + rect.top;
                        const sectionBottom = sectionTop + rect.height;

                        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                            currentId = section.id;
                        }
                    }
                });
            }

            if (currentId !== activeId) {
                setActiveId(currentId);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [items, activeId]);

    const handleClick = (id: string) => {
        setActiveId(id);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    if (!items.length) return null;

    return (
        <div className="sticky top-28 w-[250px] grow-0 shrink-0 h-fit rounded-[8px]">
            {items.map((item) => (
                <button
                    key={item.id}
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick(item.id);
                    }}
                    className={cn(
                        "flex items-center gap-x-3 w-[250px] h-[64px] text-[#5E5E6B] hover:text-f7 px-5",
                        activeId === item.id && "text-f7"
                    )}
                >
                    <span
                        className={cn(
                            "block size-2 rounded-full",
                            activeId === item.id ? "bg-f7" : "bg-transparent"
                        )}
                    ></span>
                    <span
                        className={cn(
                            "text-lg",
                            activeId === item.id && "font-semibold"
                        )}
                    >
                        {item.title}
                    </span>
                </button>
            ))}
        </div>
    );
}

export default WashUpSidebar;
