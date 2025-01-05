import Conclusion from "@/src/app/(pages)/wash-up/technician-order/components/conclusion";
import Overview from "@/src/app/(pages)/wash-up/technician-order/components/overview";
import SomeUxPoints from "@/src/app/(pages)/wash-up/technician-order/components/some-ux-points";
import WashUpPageFooter from "@/src/components/washUpPageFooter";
import Title from "@/src/components/title";
import { Fragment } from "react";
import { Metadata } from "next";
import { siteConfig } from "@/src/config";
import { isMobileDevice } from "@/src/helpers/isMobileDevice";
import WashUpLayout from "@/src/app/(pages)/wash-up/components/washup-layout";
import { Item } from "@/src/lib/wash-up/constants";
import WashUpSection from "@/src/app/(pages)/wash-up/components/washup-section";
import Image from "next/image";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: 'Technician Order',
};

const technicianOrderMenu: Item[] = [
    {
        id: "introduction",
        title: "Introduction"
    },
    {
        id: "someUXPoints",
        title: "Some UX points"
    },
    {
        id: "conclusion",
        title: "Conclusion"
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
                        subtitle="Technician Order"
                    />

                    <div className="space-y-10 lg:space-y-[60px]">
                        <Overview />
                        <SomeUxPoints />
                        <Conclusion />
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
        <WashUpLayout
            menu={technicianOrderMenu}
        >
            <WashUpSection
                id={technicianOrderMenu[0].id}
                tag='h1'
                title='Technician task'
                hasBottomBorder={false}
            >
                <p className="mt-10">
                    To standardize service quality, technicians follow a set of instructions for each task and capture evaluation photos for their performance records.
                </p>
            </WashUpSection>

            <WashUpSection
                id={technicianOrderMenu[1].id}
                title={technicianOrderMenu[1].title}
            >
                <div className="mt-10 space-y-10">
                    <p>
                        Technicians can also proactively receive a specific order directly from a customer by scanning the QR code in the customer&apos;s order details or by clicking the “Import order” button and entering the Order ID.
                    </p>
                    <div className="relative w-full h-[812px]">
                        <Image
                            fill
                            src="/technician-order/to.webp"
                            alt="Technician Order"
                        />
                    </div>
                    <p>
                        Moreover, to be able to accept orders, the technician must scroll to the bottom of the screen and click the &apos;Start&apos; button. This ensures that they review the information at least once.
                    </p>
                </div>
            </WashUpSection>

            <WashUpSection
                id={technicianOrderMenu[2].id}
                title={technicianOrderMenu[2].title}
            >
                <p className="mt-10">
                    The next steps involve the execution of the car wash process. However, there are no notable points as the feature is relatively straightforward and primarily aimed at system control and operation. In addition, to ensure the confidentiality of the project, I will not show the full user interface for these steps.
                </p>
            </WashUpSection>
        </WashUpLayout>
    )
}
