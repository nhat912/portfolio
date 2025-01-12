import { HomePageTitle } from "@/src/app/(pages)/(home)/components/desktop/desktop-home-page";
import { SectionWrapper } from "@/src/app/(pages)/(home)/components/mobile/mobile-home-page";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { PropsWithChildren } from "react";

export const Skills = [
    {
        before: 'Storytelling',
        after: 'User Interviews'
    },
    {
        before: 'User experience',
        after: 'Design system building'
    },
    {
        before: 'User Interface',
        after: 'Figma Prototyping '
    },
]

const MobileProjectArea = [
    {
        name: 'Ztech',
        domain: 'VPN',
        type: 'App',
        platform: 'Application'
    },
    {
        name: 'Washup',
        domain: 'Service',
        type: 'App',
        platform: 'Application'
    },
    {
        name: 'Circa',
        domain: 'B2C Medical / MS',
        type: 'Web/ Web mobile/ App',
        platform: 'E-Commerce'
    },
    {
        name: 'Thuocsi',
        domain: 'B2B Medical',
        type: 'Web',
        platform: 'E-Commerce'
    },
    {
        name: 'Dakoli',
        domain: 'Dropship',
        type: 'Web/ App',
        platform: 'E-Commerce'
    },
]

interface AboutPageSectionProps extends PropsWithChildren {
    title: string;
    className?: string;
    wrapperClassName?: string;
    sectionClassName?: string;
}

export function AboutPageSection({ title, children, className = '', wrapperClassName = '', sectionClassName = '' }: AboutPageSectionProps) {
    return (
        <SectionWrapper
            wrapperClassName={cn(sectionClassName)}
            divClassName={cn(wrapperClassName)}>
            <HomePageTitle value={title} />
            <div className={cn('mt-6 lg:mt-5', className)}>
                {children}
            </div>
        </SectionWrapper>
    )
}

export default function MobileAboutPage() {
    return (
        <div className="container pt-5 pb-10 space-y-6 text-d9">
            <AboutPageSection title="More about me"
                className="space-y-4"
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

            <AboutPageSection title="Education"
                className="space-y-6"
            >
                <div className="relative w-full h-[189.08px] rounded-[3.86px]">
                    <Image
                        fill
                        src="/about/ueh.webp"
                        alt="University of Economics Ho Chi Minh City"
                    />
                </div>
                <div className=" space-y-4">
                    <div className="text-xl font-bold space-x-2">
                        <span className="text-f7">
                            University of Economics
                        </span>
                        <span className="text-92">
                            UEH
                        </span>
                    </div>
                    <div className="flex items-center text-d9">
                        <div className="flex items-center gap-x-3 pr-5 border-r border-3a">
                            <div className="size-6 grow-0 shrink-0 relative">
                                <Image
                                    fill
                                    src="/about/bc.svg"
                                    alt="bc"
                                />
                            </div>
                            <div className="flex-1 font-medium">
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

            <AboutPageSection title="Skills"
                className="text-f7 space-y-4"
            >
                {Skills.map((item, index) => (
                    <div key={index} className="flex items-center gap-x-3">
                        <span>
                            {item.before}
                        </span>
                        <span className="size-1 bg-f7 rounded-full"></span>
                        <span>
                            {item.after}
                        </span>
                    </div>
                ))}
            </AboutPageSection>

            <AboutPageSection title="Project area"
                className="space-y-3"
            >
                {MobileProjectArea.map((item, index) => (
                    <div key={index} className="space-y-1">
                        <div className="flex items-center justify-between text-accent">
                            <span className="font-semibold">
                                {item.name}
                            </span>
                            <span>
                                {item.domain}
                            </span>
                        </div>
                        <div className="flex items-center justify-between text-4b">
                            <span className="">
                                {item.type}
                            </span>
                            <span>
                                {item.domain}
                            </span>
                        </div>
                    </div>
                ))}
            </AboutPageSection>
        </div>
    )
}
