'use client'

import { siteConfig } from "@/src/config";
import { cn } from "@/src/lib/utils";
import { motion } from 'framer-motion';
import { Figma } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
            <div className="space-x-3">
                <span>
                    Circa
                </span>
                <span className="text-sm text-92 font-bold">
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
            <div className="space-x-3">
                <span>
                    Thuocsi
                </span>
                <span className="text-sm text-92 font-bold">
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
        <h2 className={cn("block text-xl lg:text-2xl font-extrabold text-f7", className)}>{value}</h2>
    )
}

function DesktopHomePage() {
    const router = useRouter()


    return (
        <div className="p-10">
            <div className="flex gap-[11.5px] justify-between rounded-[24px] overflow-hidden">
                <motion.div
                    className="flex-1 flex justify-between bg-0f rounded-[24px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                >
                    <div className="flex-1 p-5 bg-24 rounded-br-[24px]">
                        <div className="w-full aspect-[8/10] h-auto relative rounded-[12px] overflow-hidden">
                            <Image
                                fill
                                src="/home/images/hero.webp"
                                alt="Hero Image"
                            />
                        </div>
                    </div>
                    <div className="w-5/12 grow-0 shrink-0 justify-between flex flex-col rounded-r-[24px]">
                        <div className="bg-24 rounded-r-[24px] flex-1">
                            <div className="p-8 flex-1">
                                <h1 className="text-32 font-bold">Nhat Nguyen</h1>
                                <h2 className="text-lg font-semibold text-92 mt-2">Product Designer</h2>
                                <p className="mt-[26px] text-d9 text-balance">
                                    With 2+ years of experience designing intuitive interfaces for pharmaceutical e-commerce platforms, I’ve boosted user engagement and satisfaction, helping attract nearly 200,000 users. I specialize in crafting seamless user journeys that enhance usability and align with business goals for impactful digital experiences.
                                </p>
                            </div>
                        </div>
                        <div className="bg-24 min-h-[159px] max-h-[300px]">
                            <div className="p-3 pr-0 pb-0 bg-0f w-full h-full rounded-tl-[36px]">
                                <div className="rounded-tl-[24px] bg-0f h-full w-full">
                                    <Link
                                        href="/files/NhatNguyen_Resume.pdf"
                                        target="_blank"
                                        className="bg-24 rounded-[24px] grid place-items-center h-full w-full group hover:bg-gradient-to-r from-[#CE80FF] via-[#80F0FF] to-[#B1FF80] transition-all"
                                    >
                                        <div className="text-32 font-extrabold text-gradient group-hover:text-[#26262B] transition-all">My Resume</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="w-[40%] grow-0 shrink-0 bg-24 rounded-[24px] p-8 flex flex-col gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <HomePageTitle value="Experience" />
                    <div className="flex flex-col gap-4 justify-between h-full">
                        {Experience.map((item, index) => (
                            <div key={index} className={cn("flex flex-1 items-center justify-between gap-x-5 bg-3a rounded-[12px] p-4",)}>
                                <div className="size-[56px] grow-0 shrink-0 relative">
                                    <Image
                                        fill
                                        src={item.icon}
                                        alt="Company Logo"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between gap-x-2">
                                        <div className="">{item.name}</div>
                                        <div className="">{item.role}</div>
                                    </div>
                                    <div className="mt-auto flex justify-between gap-x-2">
                                        <div className="">{item.date}</div>
                                        {!!item.mode && <div className="">{item.mode}</div>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <div className="flex gap-3 justify-between rounded-[24px] overflow-hidden mt-3">
                <motion.div
                    className="w-5/12 grow-0 shrink-0 rounded-[24px] bg-24 p-8 flex justify-between gap-x-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <div className="flex-1 space-y-3">
                        <HomePageTitle value="Tools I use" />
                        <div className="mt-auto text-d9">
                            These are the tools I use to design interfaces, build prototypes, and collaborate effectively with teams.
                        </div>
                    </div>
                    <div className="w-[210.5px] grow-0 shrink-0 flex justify-end gap-x-4">
                        <div className="flex-1 bg-0f size-[135px] aspect-square rounded-[8px] grid place-items-center text-white">
                            <Figma size={72} />
                        </div>
                        <div className="w-5/12 flex flex-col justify-between gap-4">
                            <div className="size-[59.5px] bg-0f grid place-items-center rounded-[8px]">
                                <div className="relative w-8 h-[23.93px]">
                                    <Image
                                        fill
                                        src="/home/icons/ps.svg"
                                        alt="Photoshop"
                                    />
                                </div>
                            </div>
                            <div className="size-[59.5px] bg-0f grid place-content-center rounded-[8px]">
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
                    className="flex-1 bg-24 rounded-[24px] p-8 space-y-3 flex flex-col justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.75, duration: 0.5 }}
                >
                    <HomePageTitle value="Contact me via" />
                    <div className="grid grid-cols-4 gap-3 flex-1">
                        <Link
                            href={siteConfig.contact.linkedin.href} target="_blank"
                            className="rounded-[12px] bg-3a flex flex-col justify-center items-center gap-2 transition-colors hover:bg-[#0A66C2]"
                        >
                            <Image
                                src='/home/icons/li.svg'
                                alt='Linkedin'
                                width={24}
                                height={24}
                            />
                            <div className="text-sm font-semibold">Linkedin</div>
                        </Link>
                        <Link href={siteConfig.contact.email.href} target="_blank"
                            className={"rounded-[12px] bg-3a flex flex-col justify-center items-center gap-2 transition-colors hover:bg-[#C71610]"}>
                            <Image
                                src='/home/icons/gm.svg'
                                alt='Email'
                                width={24}
                                height={24}
                            />
                            <div className="text-sm font-semibold">Email</div>
                        </Link>
                        <Link href={siteConfig.contact.behance.href} target="_blank"
                            className={"rounded-[12px] bg-3a flex flex-col justify-center items-center gap-2 transition-colors hover:bg-[#0057FF]"}>
                            <Image
                                src='/home/icons/be.svg'
                                alt='Behance'
                                width={24}
                                height={24}
                            />
                            <div className="text-sm font-semibold">Behance</div>
                        </Link>
                        <Link href={siteConfig.contact.dribble.href} target="_blank"
                            className={"rounded-[12px] bg-3a flex flex-col justify-center items-center gap-2 transition-colors hover:bg-[#EA4C89]"}>
                            <Image
                                src='/home/icons/db.svg'
                                alt='Dribble'
                                width={24}
                                height={24}
                            />
                            <div className="text-sm font-semibold">Dribble</div>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div >
    );
}

export default DesktopHomePage;