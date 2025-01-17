'use client'

import { Experience, HomePageTitle } from "@/src/app/(pages)/(home)/components/desktop/desktop-home-page";
import { SectionWrapper } from "@/src/components/sectionWrapper";
import { siteConfig } from "@/src/config";
import { cn } from "@/src/lib/utils";
import { Figma } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function MobileHomePage() {
    return (
        <div className="container pt-5 pb-10 space-y-6">
            <SectionWrapper>
                <div className="w-full h-[326px] relative rounded-[20px]">
                    <Image
                        fill
                        src="/home/images/mobi-hero.webp"
                        alt="Hero Image"
                    />
                </div>
                <h1 className="mt-6 text-xl font-bold text-f7">Nhat Nguyen</h1>
                <h2 className="text-sm font-semibold text-92 mt-2">Product Designer</h2>
                <p className="mt-4 text-d9 text-balance">
                    With over 2 years of experience designing intuitive and visually appealing interfaces for pharmaceutical e-commerce, I&apos;ve helped platforms reach nearly 200,000 users by increasing engagement and user satisfaction.
                </p>
                <div className="bg-gradient-2 grid place-items-center rounded-[12px] text-26 mt-6 h-[52px] font-semibold text-base">
                    My resume
                </div>
            </SectionWrapper>

            <SectionWrapper divClassName="pb-0">
                <HomePageTitle value="Experience" />
                <div className="mt-2.5 flex flex-col justify-between h-[365px]">
                    {Experience.map((item, index) => (
                        <div key={index} className={cn("flex flex-1 items-center justify-between gap-x-5 border-b border-3a border-dashed last:border-none",)}>
                            <div className="size-[41px] grow-0 shrink-0 relative">
                                <Image
                                    fill
                                    src={item.icon}
                                    alt="Company Logo"
                                />
                            </div>
                            <div className="flex-1 flex flex-col justify-between text-xs">
                                <div className="flex justify-between gap-x-2 font-semibold text-f7">
                                    <div className="">{item.name}</div>
                                    <div className="">{item.role}</div>
                                </div>
                                <div className="mt-auto flex justify-between gap-x-2 text-2xs text-92">
                                    <div className="">{item.date}</div>
                                    {!!item.mode && <div className="">{item.mode}</div>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <HomePageTitle value="Tools I use" />
                <div className="mt-6 text-d9 text-sm">
                    These are the tools I use to design, prototype, and collaborate effectively.
                </div>
                <div className="mt-4 flex items-center gap-x-4">
                    <div className="size-[60px] bg-0f grid place-items-center rounded-[8px]">
                        <Figma size={30} />
                    </div>
                    <div className="size-[60px] bg-0f grid place-items-center rounded-[8px]">
                        <div className="relative w-8 h-[23.93px]">
                            <Image
                                fill
                                src="/home/icons/ps.svg"
                                alt="Photoshop"
                            />
                        </div>
                    </div>
                    <div className="size-[60px] bg-0f grid place-items-center rounded-[8px]">
                        <div className="relative w-8 h-[28.02px]">
                            <Image
                                fill
                                src="/home/icons/ai.svg"
                                alt="AI"
                            />
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <HomePageTitle value="Contact me via" />
                <div className="mt-6 grid grid-cols-2 gap-3 flex-1">
                    <Link
                        href={siteConfig.contact.linkedin.href} target="_blank"
                        className="rounded-[12px] bg-3a flex flex-col justify-center items-center gap-2 transition-colors hover:bg-[#0A66C2] h-[87px]"
                    >
                        <Image
                            src="/home/icons/li.svg"
                            alt="Linkedin"
                            width={24}
                            height={24}
                        />
                        <div className="text-sm font-semibold">Linkedin</div>
                    </Link>
                    <Link
                        href={siteConfig.contact.email.href} target="_blank"
                        className="rounded-[12px] bg-3a flex flex-col justify-center items-center gap-2 transition-colors hover:bg-[#C71610] h-[87px]"
                    >
                        <Image
                            src="/home/icons/gm.svg"
                            alt="Email"
                            width={24}
                            height={24}
                        />
                        <div className="text-sm font-semibold">Email</div>
                    </Link>
                    <Link
                        href={siteConfig.contact.behance.href} target="_blank"
                        className="rounded-[12px] bg-3a flex flex-col justify-center items-center gap-2 transition-colors hover:bg-[#0057FF] h-[87px]"
                    >
                        <Image
                            src="/home/icons/be.svg"
                            alt="Behance"
                            width={24}
                            height={24}
                        />
                        <div className="text-sm font-semibold">Behance</div>
                    </Link>
                    <Link
                        href={siteConfig.contact.dribble.href} target="_blank"
                        className="rounded-[12px] bg-3a flex flex-col justify-center items-center gap-2 transition-colors hover:bg-[#EA4C89] h-[87px]"
                    >
                        <Image
                            src="/home/icons/db.svg"
                            alt="Dribble"
                            width={24}
                            height={24}
                        />
                        <div className="text-sm font-semibold">Dribble</div>
                    </Link>
                </div>
            </SectionWrapper>
        </div>
    );
}

export default MobileHomePage;