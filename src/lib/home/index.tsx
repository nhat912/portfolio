import CareerPathSection from "@/src/lib/home/components/careerPath";
import Footer from "@/src/lib/home/components/footer";
import HeroSection from "@/src/lib/home/components/hero";

function HomePage() {
    return (
        <>
            <main>
                <HeroSection />
                <CareerPathSection />
            </main>
            <Footer />
        </>
    );
}

export default HomePage;