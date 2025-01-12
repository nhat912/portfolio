import WashUpBreadcrumbs from "@/src/app/(wash-up)/project-highlights/wash-up/components/washup-breadcrumbs";
import WashUpLayout from "@/src/app/(wash-up)/project-highlights/wash-up/components/washup-layout";
import WashUpSection from "@/src/app/(wash-up)/project-highlights/wash-up/components/washup-section";
import ChildSectionLayout from "@/src/components/childSectionLayout";
import QualityImage from "@/src/components/qualityImage";
import SubChildSectionLayout from "@/src/components/subChildSectionLayout";
import Title from "@/src/components/title";
import WashUpPageFooter from "@/src/components/washUpPageFooter";
import { siteConfig } from "@/src/config";
import { isMobileDevice } from "@/src/helpers/isMobileDevice";
import { cn } from "@/src/lib/utils";
import { Item } from "@/src/lib/wash-up/constants";
import { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: 'Technician App',
};

const technicianAppMenu: Item[] = [
    {
        id: "introduction",
        title: "Introduction"
    },
    {
        id: "identifyUsers",
        title: "Identifying Users"
    },
    {
        id: "keyFeatures",
        title: "Key features"
    },
    {
        id: "userJourneys",
        title: "User Journeys"
    },
    {
        id: "userFlow",
        title: "User Flow"
    },
    {
        id: "taskReceptionUI",
        title: "Task Reception UI"
    },
    {
        id: "importOrderUI",
        title: "Import Order UI"
    }
]

const indentifyUsers = [
    {
        icon: '/technician-app/wt-icon.svg',
        title: 'Washup Technicians',
        description: 'Washup technicians, equipped with tools, go to customer-specified locations to perform vehicle maintenance and cleaning per Washup standards.'
    },
    {
        icon: '/technician-app/cmt-icon.svg',
        title: 'Car maintenance technicians',
        description: 'Staff at affiliated local centres handle orders, with customers bringing vehicles within 15m. Services are performed step by step per Washup standards.'
    },
]

const keyFeatures = [
    {
        icon: '/technician-app/ro-icon.svg',
        title: 'Receive orders',
        description: 'Technicians are assigned jobs based on distance and their feedback scores from previous tasks'
    },
    {
        icon: '/technician-app/mt-icon.svg',
        title: 'Manage tasks',
        description: 'We provide features for managing jobs, including pending, in progress, completed, and cancelled jobs.'
    },
    {
        icon: '/technician-app/ipft-icon.svg',
        title: 'Instruct process for technicians',
        description: 'Each order includes detailed instructions following Washup’s standards to ensure consistency.'
    },
    {
        icon: '/technician-app/pft-icon.svg',
        title: 'Pay for technician',
        description: 'Completed tasks are carefully calculated to protect technician’s rights, with payment based on the fee schedule.'
    },
]

const taskReceptionUI = [
    {
        image: '/technician-app/phone-1.webp',
        description: (
            <p className="space-x-1">
                <span>
                    The technician activates the
                </span>
                <span className="text-accent font-bold">
                    &quot;Ready to Wash&quot;
                </span>
                <span>
                    toggle in the app, signaling their availability to accept new orders. Once activated, the system notifies them when a nearby customer places a request, allowing the technician to review the details and prepare for the job.
                </span>
            </p>
        )
    },
    {
        image: '/technician-app/phone-2.webp',
        description: (
            <>
                <p className="space-x-1">
                    <span>
                        When a job comes in, a pop-up notification appears on the technician&apos;s screen with key details
                    </span>
                    <span className="text-accent font-bold">
                        such as the customer&apos;s location, vehicle type, and requested services.
                    </span>
                </p>
                <p>
                    Technicians can choose to accept the order immediately if they are ready, or temporarily set it to pending, giving them time to assess their availability before making a decision. This provides flexibility and allows technicians to manage their workload efficiently.
                </p>
            </>
        )
    },
    {
        image: '/technician-app/phone-3.webp',
        description: (
            <p className="space-x-1">
                <span>
                    The order will be placed in the queue if the technician clicks the
                </span>
                <span className="text-accent font-bold">
                    &quot;Later&quot;
                </span>
                <span>
                    button. However, if a technician has already accepted the order, it will be immediately removed from the queue of other technicians.
                </span>
            </p>
        )
    },
    {
        image: '/technician-app/phone-4.webp',
        description: (
            <p className="">
                Once the technician has accepted an order, the queue will display only the accepted order. The technician will not be able to receive another job until the current task is completed.
            </p>
        )
    },
]

export default async function Page() {
    const isMobile = await isMobileDevice()

    if (isMobile) {
        return (
            <Fragment>
                <main className="">
                    <Title
                        title="Washup:"
                        subtitle="Technician app"
                    />
                    <div className="space-y-10 lg:space-y-[60px]">
                        <ChildSectionLayout value="Introduction" className="container">
                            <div className="space-y-3 lg:space-y-5">
                                <p className="">
                                    The application is built to support technicians in receiving orders remotely, capturing customer information, and proactively contacting them before moving to the car wash location.
                                </p>
                                <p>
                                    Like technology-based ride-hailing apps, Washup&apos;s order-receiving mechanism will also operate in the form of random order-receiving within a radius. The technician has the option to accept or decline the order based on their availability and proximity to the washing location.
                                </p>
                                <p>
                                    Once the order has been accepted, the technician will receive a confirmation which may include a summary of the order details and instructions on the steps to be taken.
                                </p>
                            </div>
                        </ChildSectionLayout>

                        <ChildSectionLayout value="Key features" className="container">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                                <SubChildSectionLayout value="Receive orders">
                                    <p>
                                        Technicians are assigned orders based on distance and customer review history. Those with positive feedback are prioritized for jobs, while technicians who frequently decline jobs or receive numerous negative reviews will have limited job opportunities.
                                    </p>
                                </SubChildSectionLayout>
                                <SubChildSectionLayout value="Manage orders">
                                    <p>
                                        We build features to help technicians manage their jobs. These include pending, in progress, completed and cancelled orders.
                                    </p>
                                </SubChildSectionLayout>
                                <SubChildSectionLayout value="Instruct process for technicians">
                                    <p>
                                        Each order will include instructions outlining the steps to follow according to Washup&apos;s standards, ensuring consistency across the entire system for Washup technicians and staff at maintenance centres collapse with Washup.
                                    </p>
                                </SubChildSectionLayout>
                                <SubChildSectionLayout value="Pay for technician">
                                    <p>
                                        Orders will be meticulously calculated to balance the interests of both customers and technicians. Each order will include a specific discount, and technicians will be paid according to the fee schedule provided to them.
                                    </p>
                                </SubChildSectionLayout>
                            </div>
                        </ChildSectionLayout>

                        <ChildSectionLayout value="Identifying Users" className="container">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                                <SubChildSectionLayout value="Washup Technicians">
                                    <p>
                                        Washup technicians, equipped with the necessary tools, move directly to designated locations by the customer to perform maintenance and cleaning orders on vehicles based on what the customer orders, step by step according to Washup standards.
                                    </p>
                                </SubChildSectionLayout>
                                <SubChildSectionLayout value="Car Centre Staffs">
                                    <p>
                                        Staff at Washup affiliated maintenance centres receive orders and customers need to bring their vehicles within 15 minutes of the time booked for maintenance or cleaning. The staff must perform the services step by step according to Washup standards.
                                    </p>
                                </SubChildSectionLayout>
                            </div>
                        </ChildSectionLayout>

                        <ChildSectionLayout value="User Journeys" className="container">
                            <div className="space-y-3 lg:space-y-5">
                                {isMobile ? (
                                    <div className="w-full h-[275px] relative">
                                        <QualityImage
                                            fill
                                            src='/technician-app/mobi-user-journeys.png'
                                            alt='User journeys'
                                            quality={100}
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-[158px] relative">
                                        <QualityImage
                                            fill
                                            src='/technician-app/user-journeys.png'
                                            alt='User Fljourneysw'
                                            quality={100}
                                        />
                                    </div>
                                )}
                            </div>
                        </ChildSectionLayout>

                        <ChildSectionLayout value="User Flow" className="container">
                            <div className="space-y-3 lg:space-y-5">
                                {isMobile ? (
                                    <div className="w-[215px] mx-auto h-[500px] relative">
                                        <QualityImage
                                            fill
                                            src='/technician-app/mobi-user-flow.png'
                                            alt='User Flow'
                                            quality={100}
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-[320px] relative">
                                        <QualityImage
                                            fill
                                            src='/technician-app/user-flow.png'
                                            alt='User Flow'
                                            quality={100}
                                        />
                                    </div>
                                )}
                                <p className="italic lg:not-italic">Some aspects of the user flow have been omitted to ensure the confidentiality of the project.</p>
                            </div>
                        </ChildSectionLayout>

                        <ChildSectionLayout value="Final Design" className="container">
                            <div className="space-y-4 lg:space-y-10">
                                <p>
                                    Below are some user interfaces that provide a brief overview of the order-receiving process for technicians.
                                </p>
                                {isMobile ? (
                                    <div className="w-full h-[1628px] relative">
                                        <QualityImage
                                            fill
                                            src='/technician-app/mobi-final-design.png'
                                            alt='Final Design'
                                            quality={100}
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-[1580px] relative">
                                        <QualityImage
                                            fill
                                            src='/technician-app/final-design.png'
                                            alt='Final Design'
                                            quality={100}
                                        />
                                    </div>
                                )}
                                <p>
                                    Technicians can also proactively receive a specific order directly from a customer by scanning the QR code in the customer&apos;s order details or by clicking the “Import order” button and entering the Order ID.
                                </p>

                                <div className="relative h-[397px] lg:h-[1153px]">
                                    <QualityImage
                                        fill
                                        src='/technician-app/final-design-2.png'
                                        alt='Final Design'
                                        quality={100}
                                    />
                                </div>
                            </div>
                        </ChildSectionLayout>
                    </div>

                </main>

                <WashUpPageFooter
                    value="Many thanks for your readership"
                >
                </WashUpPageFooter>
            </Fragment>
        )
    }

    return (
        <>
            <WashUpBreadcrumbs items={[
                {
                    label: siteConfig.pageList.projectHighlights.as,
                    href: siteConfig.pageList.projectHighlights.href,
                },
                {
                    label: siteConfig.pageList.technicianApp.as,
                },
            ]} />
            <WashUpLayout
                menu={technicianAppMenu}
            >
                <WashUpSection
                    id={technicianAppMenu[0].id}
                    tag='h1'
                    title='Technician app'
                    hasBottomBorder={false}
                >
                    <div className="mt-10 space-y-5">
                        <p>
                            The application helps technicians manage remote orders, gather customer information, and proactively contact them before heading to the car wash location. Similar to ride-hailing apps, Washup’s order-receiving system works through random assignments within a radius, allowing technicians to accept or decline based on availability and proximity. Once an order is accepted, the technician receives a confirmation with order details and instructions.
                        </p>
                    </div>
                    <div className="mt-10 relative w-full h-[600px] rounded-[12px] overflow-hidden">
                        <Image
                            fill
                            src="/technician-app/ta.webp"
                            alt="Technician App"
                        />
                    </div>
                </WashUpSection>

                <WashUpSection
                    id={technicianAppMenu[1].id}
                    title={technicianAppMenu[1].title}
                >
                    <div className="mt-10 grid grid-cols-2 gap-10">
                        {indentifyUsers.map(item => (
                            <div key={item.title} className="flex col-span-1 gap-x-5">
                                <div className="size-8 grow-0 shrink-0 relative">
                                    <Image
                                        fill
                                        src={item.icon}
                                        alt={item.title}
                                    />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="font-bold text-f7">
                                        {item.title}
                                    </div>
                                    <p>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </WashUpSection>

                <WashUpSection
                    id={technicianAppMenu[2].id}
                    title={technicianAppMenu[2].title}
                >
                    <div className="mt-10 grid grid-cols-2 gap-10">
                        {keyFeatures.map(item => (
                            <div key={item.title} className="flex col-span-1 gap-x-5">
                                <div className="size-8 grow-0 shrink-0 relative">
                                    <Image
                                        fill
                                        src={item.icon}
                                        alt={item.title}
                                    />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="font-bold text-f7">
                                        {item.title}
                                    </div>
                                    <p>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </WashUpSection>

                <WashUpSection
                    id={technicianAppMenu[3].id}
                    title={technicianAppMenu[3].title}
                >
                    <div className="mt-10 relative w-full h-[160px]">
                        <Image
                            fill
                            src="/technician-app/user-journeys.webp"
                            alt="User Journeys"
                        />
                    </div>
                </WashUpSection>

                <WashUpSection
                    id={technicianAppMenu[4].id}
                    title={technicianAppMenu[4].title}
                >
                    <div className="mt-10 relative w-full h-[264.7px]">
                        <Image
                            fill
                            src="/technician-app/user-flow.webp"
                            alt="User flow"
                        />
                    </div>
                </WashUpSection>

                <WashUpSection
                    id={technicianAppMenu[5].id}
                    title={technicianAppMenu[5].title}
                    className="px-0 pb-0"
                    titleClassName="px-8 border-none"
                >
                    <div className="mx-8">
                        <span className="inline-block h-px w-full bg-[#42424A]"></span>
                    </div>
                    <div className="mt-10 space-y-10">
                        <p className="px-8">
                            Below are user interfaces that provide an overview of the order entry process for technicians. They guide technicians through steps like activating availability, reviewing orders, and managing order status, streamlining the workflow and improving efficiency.
                        </p>
                        {taskReceptionUI.map((item, idx) => (
                            <div key={idx} className={cn("flex items-center gap-x-[60px] justify-center py-[60px] w-full", idx % 2 === 0 ? "flex-row" : "flex-row-reverse bg-3a")}>
                                <div className="relative w-[249.14px] h-[500px] grow-0 shrink-0">
                                    <Image
                                        fill
                                        src={item.image}
                                        alt="Phone"
                                    />
                                </div>
                                <div className="w-[400px] grow-0 shrink-0">
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </WashUpSection>

                <WashUpSection
                    id={technicianAppMenu[6].id}
                    title={technicianAppMenu[6].title}
                >
                    <div className="mt-10 space-y-10">
                        <p>
                            Technicians can also proactively receive a specific order directly from a customer by scanning the QR code in the customer&apos;s order details or by clicking the “Import order” button and entering the Order ID.
                        </p>
                        <div className="relative w-full h-[1185px]">
                            <Image
                                fill
                                src="/technician-app/ioui.webp"
                                alt="Import Order UI"
                            />
                        </div>
                    </div>
                </WashUpSection>
            </WashUpLayout>
        </>
    )
}
