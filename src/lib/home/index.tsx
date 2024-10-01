import Footer from "@/src/components/footer";
import CareerPathSection from "@/src/lib/home/components/careerPath";
import HeroSection from "@/src/lib/home/components/hero";
import { Fragment } from "react";

function HomePage() {
    return (
        <Fragment>
            <main className="pb-10 lg:pb-[100px]">
                <HeroSection />
                <CareerPathSection />
            </main>
            <Footer />
        </Fragment>
    );
}

export default HomePage;