import Conclusion from "@/src/app/(pages)/wash-up/technician-order/components/conclusion";
import Overview from "@/src/app/(pages)/wash-up/technician-order/components/overview";
import SomeUxPoints from "@/src/app/(pages)/wash-up/technician-order/components/some-ux-points";
import WashUpPageFooter from "@/src/components/washUpPageFooter";
import WashUpTitle from "@/src/components/washUpTitle";
import { Fragment } from "react";

export default function Page() {
    return (
        <Fragment>
            <main className="">
                <WashUpTitle
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
