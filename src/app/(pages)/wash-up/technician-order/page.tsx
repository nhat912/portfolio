import Conclusion from "@/src/app/(pages)/wash-up/technician-order/components/conclusion";
import Overview from "@/src/app/(pages)/wash-up/technician-order/components/overview";
import SomeUxPoints from "@/src/app/(pages)/wash-up/technician-order/components/some-ux-points";
import WashUpPageFooter from "@/src/components/washUpPageFooter";
import Title from "@/src/components/title";
import { Fragment } from "react";
import { Metadata } from "next";
import { siteConfig } from "@/src/config";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: 'Technician Order',
};

export default function Page() {
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
