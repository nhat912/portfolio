import SectionLayout from '@/src/components/sectionLayout'
import BuymedSection from '@/src/lib/home/components/careerPath/buymed'
import WashUpSection from '@/src/lib/home/components/careerPath/washup'
import React from 'react'

export default function CareerPathSection() {
    return (
        <SectionLayout className="space-y-5">
            <WashUpSection />
            <BuymedSection />
        </SectionLayout>
    )
}
