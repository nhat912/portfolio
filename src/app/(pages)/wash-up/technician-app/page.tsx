import ChildSectionLayout from "@/src/components/childSectionLayout";
import SubChildSectionLayout from "@/src/components/subChildSectionLayout";
import WashUpPageFooter from "@/src/components/washUpPageFooter";
import Title from "@/src/components/title";
import { isMobileDevice } from "@/src/helpers/isMobileDevice";
import Image from "next/image";
import { Fragment } from "react";
import { Metadata } from "next";
import { siteConfig } from "@/src/config";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: 'Technician App',
};

export default async function Page() {
    const isMobile = await isMobileDevice()

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
                                    <Image
                                        fill
                                        src='/technician-app/mobi-user-journeys.png'
                                        alt='User journeys'
                                        quality={100}
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-[158px] relative">
                                    <Image
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
                                    <Image
                                        fill
                                        src='/technician-app/mobi-user-flow.png'
                                        alt='User Flow'
                                        quality={100}
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-[320px] relative">
                                    <Image
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
                                    <Image
                                        fill
                                        src='/technician-app/mobi-final-design.png'
                                        alt='Final Design'
                                        quality={100}
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-[1580px] relative">
                                    <Image
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
                                <Image
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
