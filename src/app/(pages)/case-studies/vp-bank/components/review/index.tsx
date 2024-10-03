import ConfidentialSection from '@/src/app/(pages)/case-studies/vp-bank/components/review/confidential'
import FriendlyUISection from '@/src/app/(pages)/case-studies/vp-bank/components/review/friendly-ui'
import InitiativeSection from '@/src/app/(pages)/case-studies/vp-bank/components/review/initiative'
import SimplifySection from '@/src/app/(pages)/case-studies/vp-bank/components/review/simplify'
import TransparencySection from '@/src/app/(pages)/case-studies/vp-bank/components/review/transparency'
import ChildSectionLayout from '@/src/components/childSectionLayout'
import React from 'react'

export default function ReviewSection() {
    return (
        <ChildSectionLayout value="Review and assess UI design that need improvement." className="container">
            <div className="">
                <FriendlyUISection />
                <InitiativeSection />
                <SimplifySection />
                <TransparencySection />
                <ConfidentialSection />
            </div>
        </ChildSectionLayout>
    )
}
