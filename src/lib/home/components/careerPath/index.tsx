import SectionLayout from '@/src/components/sectionLayout'
import BuymedSection from '@/src/lib/home/components/careerPath/buymed'
import DakoliSection from '@/src/lib/home/components/careerPath/dakoli'
import WashUpSection from '@/src/lib/home/components/careerPath/washup'

export default function CareerPathSection() {
    return (
        <SectionLayout className="space-y-[60px] lg:space-y-[100px]">
            <WashUpSection />
            <BuymedSection />
            <DakoliSection />
        </SectionLayout>
    )
}
