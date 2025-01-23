'use client'

import { siteConfig } from "@/src/config";
import { cn } from "@/src/lib/utils";
import { motion } from 'framer-motion';
import { Figma } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Experience = [
    {
        icon: '/home/icons/za.svg',
        name: 'Ztech Asia',
        role: 'UX/UI Designer',
        date: '10/2024 - Now',
        mode: 'Freelancer',
    },
    {
        icon: '/home/icons/wu.svg',
        name: 'Washup',
        role: 'UX/UI Designer',
        date: '12/2023 - 02/2024',
        mode: 'Freelancer',
    },
    {
        icon: '/home/icons/cc.svg',
        name: (
            <div className="space-x-2">
                <span>
                    Circa
                </span>
                <span className="text-xs md:text-sm text-92 font-bold">
                    Buymed
                </span>
            </div>
        ),
        role: 'UX/UI Designer',
        date: '04/2023 - 11/2024',
        mode: 'Full-time',
    },
    {
        icon: '/home/icons/ts.svg',
        name: (
            <div className="space-x-2">
                <span>
                    Thuocsi
                </span>
                <span className="text-xs md:text-sm text-92 font-bold">
                    Buymed
                </span>
            </div>
        ),
        role: 'UX/UI Designer',
        date: '10/2022 - 04/2023',
        mode: 'Full-time',
    },
    {
        icon: '/home/icons/us.svg',
        name: 'USUM Software',
        role: 'Internship',
        date: '07/2022 - 10/2022',
        mode: '',
    },
]


export function HomePageTitle({ value, className = '' }: { value: string; className?: string }) {
    return (
        <h2 className={cn("block text-xl lg:text-2xl 3xl:text-32 font-bold text-f7", className)}>{value}</h2>
    )
}

function DesktopHomePage() {
    return (
        <div className="grid place-items-center w-full px-2 lg:px-5 py-2 md:py-5 xl:py-16 2xl:py-20">
            <div className="gap-3 3xl:gap-5 w-[1236px] 3xl:w-[1660px] space-y-3 3xl:space-y-4 overflow-hidden">
                <div className="flex gap-x-3 justify-between overflow-hidden h-[590px] 3xl:h-[674px] w-full">
                    <motion.div
                        className="w-[769.5px] 3xl:w-[1038px] grow-0 shrink-0 flex justify-between bg-0f rounded-[24px] 3xl:rounded-[28px] overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                    >
                        <div className="flex-1 p-5 3xl:p-7 bg-24 rounded-br-[24px]">
                            <div className="w-[431px] h-[550px] 3xl:w-[557px] 3xl:h-[618px] 3xl:rou relative rounded-[12px] overflow-hidden">
                                <Image
                                    fill
                                    src="/home/images/hero.webp"
                                    alt="Hero Image"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-[298.5px] 3xl:w-[425px] grow-0 shrink-0 justify-between flex flex-col rounded-r-[24px]">
                            <div className="bg-24 rounded-r-[24px] flex-1">
                                <div className="p-6 3xl:p-7 flex-1">
                                    <h1 className="text-32 font-bold">Nhat Nguyen</h1>
                                    <h2 className="text-lg font-semibold text-92 mt-2">Product Designer</h2>
                                    <p className="mt-5 3xl:mt-6 text-d9 text-base 3xl:text-xl text-balance 3xl:leading-8">
                                        With 2+ years of experience designing intuitive interfaces for pharmaceutical e-commerce platforms, I’ve boosted user engagement and satisfaction, helping attract nearly 200,000 users. I specialize in crafting seamless user journeys that enhance usability and align with business goals for impactful digital experiences.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-24">
                                <div className="p-3 3xl:p-4 pr-0 pb-0 3xl:pb-0 bg-0f w-full h-full rounded-tl-[36px] 3xl:rounded-tl-[42px]">
                                    <div className="rounded-tl-[24px] bg-0f h-[139px] 3xl:h-[191px] w-[286px] 3xl:w-[409px]">
                                        <Link
                                            href={siteConfig.contact.resume.href}
                                            target="_blank"
                                            className="bg-24 rounded-[24px] 3xl:rounded-[28px] grid place-items-center h-full w-full group hover:bg-gradient-to-r from-[#CE80FF] via-[#80F0FF] to-[#B1FF80] transition-all"
                                        >
                                            <div className="text-32 font-extrabold text-gradient group-hover:text-[#26262B] transition-all">{siteConfig.contact.resume.as}</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1 bg-24 rounded-[24px] 3xl:rounded-[28px] p-6 3xl:p-7 flex flex-col gap-5 3xl:gap-7"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <HomePageTitle value="Experience" />
                        <div className="flex flex-col gap-3 justify-between h-full">
                            {Experience.map((item, index) => (
                                <div key={index} className={cn("flex flex-1 items-center justify-between gap-x-5 bg-3a rounded-[12px] p-4",)}>
                                    <div className="size-[56px] 3xl:size-[65px] grow-0 shrink-0 relative">
                                        <Image
                                            fill
                                            src={item.icon}
                                            alt="Company Logo"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div className="flex justify-between gap-x-2 font-semibold text-f7">
                                            <div className="text-lg 3xl:text-xl">{item.name}</div>
                                            <div className="text-sm 3xl:text-lg">{item.role}</div>
                                        </div>
                                        <div className="mt-auto flex justify-between gap-x-2 text-sm 3xl:text-base text-92">
                                            <div className="">{item.date}</div>
                                            {!!item.mode && <div className="">{item.mode}</div>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className="flex gap-3 justify-between overflow-hidden h-[179px] 3xl:h-[230px]">
                    <motion.div
                        className="w-[588px] 3xl:w-[694px] grow-0 shrink-0 rounded-[24px] 3xl:rounded-[28px] bg-24 p-6 3xl:p-7 flex justify-between gap-x-5 3xl:gap-x-7"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <div className="space-y-5 3xl:space-y-7">
                            <HomePageTitle value="Tools I use" />
                            <div className="text-d9 text-base text-pretty 3xl:text-xl">
                                These are the tools I use to design interfaces, build prototypes, and collaborate effectively with teams.
                            </div>
                        </div>
                        <div className="w-[204.5px] 3xl:w-[267px] grow-0 shrink-0 flex justify-end items-center gap-x-4 3xl:gap-x-3">
                            <div className="bg-0f size-[131px] 3xl:size-[174px] aspect-square rounded-[19.41px] 3xl:rounded-[10.39px] grid place-items-center text-white">
                                <Figma size={72} />
                            </div>
                            <div className="flex-1 flex flex-col justify-between gap-4">
                                <div className="size-[57.5px] 3xl:size-[81px] bg-0f grid place-items-center rounded-[7.73px] 3xl:rounded-[10.51px]">
                                    <div className="relative w-8 h-[23.93px]">
                                        <Image
                                            fill
                                            src="/home/icons/ps.svg"
                                            alt="Photoshop"
                                        />
                                    </div>
                                </div>
                                <div className="size-[57.5px] 3xl:size-[81px] bg-0f grid place-content-center rounded-[7.73px] 3xl:rounded-[10.51px]">
                                    <div className="relative w-8 h-[28.02px]">
                                        <Image
                                            fill
                                            src="/home/icons/ai.svg"
                                            alt="AI"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex-1 bg-24 rounded-[24px] 3xl:rounded-[28px] p-6 3xl:p-7 gap-5 flex flex-col justify-between 3xl:gap-7"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.75, duration: 0.5 }}
                    >
                        <HomePageTitle value="Contact me via" />
                        <div className="grid grid-cols-4 gap-3 3xl:gap-[14.62px] flex-1">
                            <Link
                                href={siteConfig.contact.linkedin.href} target="_blank"
                                className="rounded-[12px] bg-3a flex flex-col justify-center items-center gap-2 transition-colors hover:bg-[#0A66C2]"
                            >
                                <div className="relative size-6 3xl:size-[29.23px]">
                                    <Image
                                        fill
                                        src='/home/icons/li.svg'
                                        alt='Linkedin'
                                    />
                                </div>
                                <div className="text-sm 3xl:text-lg font-semibold">Linkedin</div>
                            </Link>
                            <Link href={siteConfig.contact.email.href} target="_blank"
                                className={"rounded-[12px] bg-3a flex flex-col justify-center items-center gap-2 transition-colors hover:bg-[#C71610]"}
                            >
                                <div className="relative size-6 3xl:size-[29.23px]">
                                    <Image
                                        fill
                                        src='/home/icons/gm.svg'
                                        alt='Linkedin'
                                    />
                                </div>
                                <div className="text-sm 3xl:text-lg font-semibold">Email</div>
                            </Link>
                            <Link href={siteConfig.contact.behance.href} target="_blank"
                                className={"rounded-[12px] bg-3a flex flex-col justify-center items-center gap-2 transition-colors hover:bg-[#0057FF]"}
                            >
                                <div className="relative size-6 3xl:size-[29.23px]">
                                    <Image
                                        fill
                                        src='/home/icons/be.svg'
                                        alt='Linkedin'
                                    />
                                </div>
                                <div className="text-sm 3xl:text-lg font-semibold">Behance</div>
                            </Link>
                            <Link href={siteConfig.contact.dribble.href} target="_blank"
                                className={"rounded-[12px] bg-3a flex flex-col justify-center items-center gap-2 transition-colors hover:bg-[#EA4C89]"}
                            >
                                <div className="relative size-6 3xl:size-[29.23px]">
                                    <Image
                                        fill
                                        src='/home/icons/db.svg'
                                        alt='Linkedin'
                                    />
                                </div>
                                <div className="text-sm 3xl:text-lg font-semibold">Dribble</div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div >
        </div>
    );
}

export default DesktopHomePage;