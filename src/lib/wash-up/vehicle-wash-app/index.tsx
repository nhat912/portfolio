'use client'

import ChildSectionLayout from "@/src/components/childSectionLayout";
import QualityImage from "@/src/components/qualityImage";
import SubChildSectionLayout from "@/src/components/subChildSectionLayout";
import Title from "@/src/components/title";
import WashUpPageFooter from "@/src/components/washUpPageFooter";
import { siteConfig } from "@/src/config";
import { useClientMediaQuery } from "@/src/helpers/useClientMediaQuery";
import { Fragment } from "react";


export default function VehicleWashAppPage() {
    const isClientMobile = useClientMediaQuery(siteConfig.mobileWidth)

    return (
        <Fragment>
            <main className="">
                <Title
                    title="Washup:"
                    subtitle="Car wash booking app"
                />

                <div className="space-y-10 lg:space-y-20">
                    <ChildSectionLayout value="Introduction" className="container">
                        <div className="space-y-3 lg:space-y-5">
                            <p className="space-x-1">
                                <span className="text-primary font-semibold">Washup</span>
                                <span>is a cutting-edge mobile application
                                    designed to make your</span>
                                <span className="text-primary font-semibold">
                                    motorbike and car care
                                </span>
                                <span>easy and convenient. Whether at home, work, or on the road, Washup connects you with the best car wash service centres in your area, allowing you to book a wash anytime, anywhere, with just a few taps on your smartphone.</span>
                            </p>
                            <p>For motorbike owners, Washup offers a unique feature: A specialized toolkit that allows technicians to wash motorbikes anywhere you want. This portable device, worn on the technician&apos;s back, uses just 2 litres of water and completes a wash in only 10 minutes.</p>
                        </div>
                    </ChildSectionLayout>

                    <ChildSectionLayout value="Key features" className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                            <SubChildSectionLayout value="Easy Booking">
                                <p>Select your vehicle type, choose the service package that suits your needs, and book a wash at your convenience.</p>
                            </SubChildSectionLayout>
                            <SubChildSectionLayout value="Real-Time Availability">
                                <p>Check the real-time availability of car wash providers in your area and schedule a time that fits your busy lifestyle.</p>
                            </SubChildSectionLayout>
                            <SubChildSectionLayout value="Secure Payments">
                                <p>Pay securely through the app using your preferred payment method. We support credit/debit cards, cash, and other secure payment gateways.</p>
                            </SubChildSectionLayout>
                            <SubChildSectionLayout value="Ratings & Reviews">
                                <p>Browse ratings and reviews from other customers to choose the best service provider for your vehicle.</p>
                            </SubChildSectionLayout>
                        </div>
                    </ChildSectionLayout>

                    <ChildSectionLayout value="Identifying Users" className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                            <SubChildSectionLayout value="Busy Laborers">
                                <p>
                                    People with hectic work schedules prefer the convenience of booking car washes online rather than waiting in line at a traditional car wash.
                                </p>
                            </SubChildSectionLayout>
                            <SubChildSectionLayout value="Young - Generation">
                                <p>
                                    Tech-savvy individuals who are comfortable using apps for various services and appreciate the convenience of on-demand services.
                                </p>
                            </SubChildSectionLayout>
                            <SubChildSectionLayout value="Frequent Travelers">
                                <p>
                                    Individuals who rely on their vehicles for frequent travel and require dependable maintenance and cleaning services before and after each journey.
                                </p>
                            </SubChildSectionLayout>
                            <SubChildSectionLayout value="Families">
                                <p>
                                    Families with multiple vehicles need a service to accommodate busy schedules, including mobile services that come to their homes.
                                </p>
                            </SubChildSectionLayout>
                        </div>
                    </ChildSectionLayout>

                    <ChildSectionLayout value="User Journeys" className="container">
                        {!isClientMobile ? (
                            <div className="w-full h-[151px] relative">
                                <QualityImage
                                    fill
                                    src='/vehicle-wash-app/pc-user-journeys.png'
                                    alt='User Journeys'
                                />
                            </div>
                        ) : (
                            <div className="w-full h-[230px] relative">
                                <QualityImage
                                    fill
                                    src='/vehicle-wash-app/user-journeys.png'
                                    alt='User Journeys'
                                />
                            </div>
                        )}
                    </ChildSectionLayout>

                    <ChildSectionLayout value="User Flow" className="container">
                        {!isClientMobile ? (
                            <div className="w-full h-[332px] relative">
                                <QualityImage
                                    fill
                                    src='/vehicle-wash-app/pc-user-flow.png'
                                    alt='User Flow'
                                />
                            </div>
                        ) : (
                            <div className="w-[203px] h-[500px] mx-auto relative">
                                <QualityImage
                                    fill
                                    src='/vehicle-wash-app/user-flow.png'
                                    alt='User Flow'
                                />
                            </div>
                        )}

                        <p>
                            Some aspects of the user flow have been omitted to ensure the confidentiality of the project.
                        </p>
                    </ChildSectionLayout>

                    <ChildSectionLayout value="Visual Treatment and Final Design" className="container">
                        <p>
                            For the visual treatment of the car wash booking app, the design should be clean, modern, and user-friendly, reflecting the ease and c
                            onvenience of the service.
                        </p>
                        <section className="space-y-3 lg:space-y-8">
                            <div className="space-x-2 font-bold">
                                <span>Typography:</span>
                                <span className="uppercase text-primary">barlow</span>
                            </div>

                            <div className="justify-between flex gap-x-1">
                                <span>
                                    Regular
                                </span>
                                <span className="font-medium">
                                    Medium
                                </span>
                                <span className="font-semibold">
                                    SemiBold
                                </span>
                                <span className="font-bold">
                                    Bold
                                </span>
                                <span className="font-extrabold">
                                    Extra Bold
                                </span>
                            </div>

                            <div className="gap-x-5 items-center flex">
                                <div className="text-[80px] leading-none font-bold">Aa</div>
                                <div className="text-pretty">
                                    Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                                </div>
                            </div>
                        </section>

                        <section className="space-y-3">
                            <p className="font-bold">Color styles</p>
                            <div className="flex justify-around items-center lg:justify-start lg:gap-x-10">
                                <QualityImage
                                    src="/vehicle-wash-app/1E3768.png"
                                    alt="1E3768"
                                    width={55}
                                    height={67}
                                />
                                <QualityImage
                                    src="/vehicle-wash-app/F8901F.png"
                                    alt="F8901F"
                                    width={55}
                                    height={67}
                                />
                                <QualityImage
                                    src="/vehicle-wash-app/FAFAFA.png"
                                    alt="FAFAFA"
                                    width={55}
                                    height={67}
                                />
                                <QualityImage
                                    src="/vehicle-wash-app/999999.png"
                                    alt="999999"
                                    width={55}
                                    height={67}
                                />
                                <QualityImage
                                    src="/vehicle-wash-app/262626.png"
                                    alt="262626"
                                    width={55}
                                    height={67}
                                />
                            </div>
                        </section>
                    </ChildSectionLayout>

                    <div className="w-full h-[260px] lg:h-[960px] pt-10 lg:pt-20 relative border-y border-accent">
                        <QualityImage
                            fill
                            src="/vehicle-wash-app/app-mobile.png"
                            alt="App Mobile"
                            className="object-cover"
                        />
                    </div>


                </div>
            </main>

            <WashUpPageFooter
                value="Thanks for reading through."
            >
            </WashUpPageFooter>
        </Fragment>
    )
}
