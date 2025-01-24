import { AboutPageSection, Skills } from "@/src/app/(pages)/about/mobile/mobile-about-page";
import Image from "next/image";

const DesktopProjectArea = [
    {
        name: 'Ztech',
        type: 'App',
        domain: 'VPN application',
    },
    {
        name: 'Washup',
        type: 'App',
        domain: 'Service application',
    },
    {
        name: 'Circa',
        type: 'Web/ Web mobile/ App',
        domain: 'E-Commerce / Management System',
    },
    {
        name: 'Thuocsi',
        type: 'Web',
        domain: 'B2B Medical E-Commerce',
    },
    {
        name: 'Dakoli',
        type: 'Web/ App',
        domain: 'Dropship',
    },
]

export default function DesktopAboutPage() {
    return (
        <div className="p-2 md:p-5 lg:p-8 xl:p-10 2xl:p-20 text-d9">
            <div className="grid grid-cols-[64%,1fr] auto-rows-fr gap-x-3">
                <AboutPageSection
                    title="More about me"
                    className="space-y-3"
                    divClassName="pt-8 px-8 h-full"
                    sectionClassName="h-full"
                >
                    <p>
                        I&apos;m a UX/UI designer with over two years of experience creating intuitive, visually appealing interfaces that boost user satisfaction and engagement in the pharmaceutical e-commerce space. The platforms I&apos;ve worked on now serve nearly 200,000 users.
                    </p>
                    <p>
                        My skills include working with design systems, interaction design, information architecture, wireframing, and prototyping. I&apos;m also proficient in user flows, UX writing, UI design, and guerrilla user research.
                    </p>
                    <p>
                        Furthermore, my strong communication and collaboration skills enable me to integrate and adapt quickly in any environment. I’m always excited about new challenges that push me to improve my design skills. Continuous learning is my greatest passion, and I enjoy using my expertise to make a positive impact on both people and organizations.
                    </p>
                </AboutPageSection>
                <AboutPageSection
                    title="Education"
                    className="space-y-3"
                    divClassName="p-8 h-full"
                    sectionClassName="h-full"
                >
                    <div className="relative w-full h-auto aspect-[520/300] rounded-[9.24px]">
                        <Image
                            fill
                            src="/about/dueh.webp"
                            alt="University of Economics Ho Chi Minh City"
                        />
                    </div>
                    <div className="space-y-[18.88px] mt-4">
                        <div className="text-xl font-bold space-x-2">
                            <span className="text-f7">
                                University of Economics
                            </span>
                            <span className="text-92">
                                UEH
                            </span>
                        </div>
                        <div className="flex items-center text-d9 text-base">
                            <div className="flex items-center gap-x-3 pr-5 border-r border-3a">
                                <div className="size-6 grow-0 shrink-0 relative">
                                    <Image
                                        fill
                                        src="/about/bc.svg"
                                        alt="bc"
                                    />
                                </div>
                                <div className="flex-1 font-medium whitespace-nowrap">
                                    Business & Commerce
                                </div>
                            </div>
                            <div className="pl-5 flex items-center gap-x-3">
                                <div className="size-6 grow-0 shrink-0 relative">
                                    <Image
                                        fill
                                        src="/about/h.svg"
                                        alt="h"
                                    />
                                </div>
                                <div className="flex-1 font-medium">
                                    2022
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-3 text-92">
                            <span>Finance</span>
                            <span className="size-1 rounded-full bg-92"></span>
                            <span>Marketing</span>
                            <span className="size-1 rounded-full bg-92"></span>
                            <span>Logistics</span>
                        </div>
                    </div>
                </AboutPageSection>
            </div>

            <div className="grid grid-cols-[36%,1fr] auto-rows-fr gap-x-3 mt-[11.87px]">
                <AboutPageSection
                    title="Skills"
                    className="space-y-4 text-f7"
                    divClassName="pt-8 px-8 h-full"
                    sectionClassName="h-full"
                >
                    {Skills.map((item, index) => (
                        <div key={index} className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full px-5 py-3 bg-gradient-2 text-26 font-medium text-base whitespace-nowrap">
                                {item.before}
                            </span>
                            <span className="rounded-full px-5 py-3 bg-gradient-2 text-26 font-medium text-base whitespace-nowrap">
                                {item.after}
                            </span>
                        </div>
                    ))}
                </AboutPageSection>

                <AboutPageSection
                    title="Project area"
                    className="space-y-3"
                    divClassName="pt-8 px-8 h-full"
                    sectionClassName="h-full"
                >
                    {DesktopProjectArea.map((item, index) => (
                        <div key={index} className="flex justify-between gap-x-1">
                            <div className="flex-1 space-x-2">
                                <span className="text-accent font-semibold">
                                    {item.name}
                                </span>
                                <span className="text-4b">
                                    {item.type}
                                </span>
                            </div>
                            <div className="flex-1 text-right text-accent">
                                {item.domain}
                            </div>
                        </div>
                    ))}
                </AboutPageSection>
            </div>
        </div>
    )
}
