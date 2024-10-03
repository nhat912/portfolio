import HypoSection from "@/src/app/(pages)/case-studies/vp-bank/components/hypo";
import OutputsSection from "@/src/app/(pages)/case-studies/vp-bank/components/outputs";
import ProblemAnalysisSection from "@/src/app/(pages)/case-studies/vp-bank/components/problem-analysis";
import ReviewSection from "@/src/app/(pages)/case-studies/vp-bank/components/review";
import FooterNote from "@/src/components/footerNote";
import Title from "@/src/components/title";
import { Fragment } from "react";

export default function Page() {
    return (
        <Fragment>
            <main className="">
                <Title
                    title="Case studies:"
                    subtitle="VP Bank App - UX problems"
                    className="lg:flex-col lg:leading-normal"
                />

                <div className="space-y-10 lg:space-y-[60px]">
                    <HypoSection />
                    <OutputsSection />
                    <ProblemAnalysisSection />
                    <ReviewSection />
                </div>
            </main>

            <FooterNote value="Thank you for taking the time to read!" />
        </Fragment>
    )
}
