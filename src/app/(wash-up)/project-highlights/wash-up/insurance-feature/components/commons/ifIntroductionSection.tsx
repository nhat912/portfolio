import { insuranceFeatureMenu } from '@/src/app/(wash-up)/project-highlights/wash-up/insurance-feature/constants'
import ProjectSectionWrapper from '@/src/components/projectSectionWrapper'

export default function
    IFIntroductionSection() {
    return (
        <ProjectSectionWrapper
            id={insuranceFeatureMenu[0].id}
            tag='h1'
            title='Insurance Feature'
            hasBottomBorder={false}
        >
            <div className="mt-10 space-y-5">
                <p>
                    The goal is to expand the platform&apos;s reach and make it easier for users to buy and manage insurance.
                </p>
                <p>
                    The vehicle insurance feature lets users buy and manage motorcycles or car insurance directly in the app. Unlike other apps that require code checks on websites or emails, our feature simplifies access to insurance records without searching or remembering contract codes.
                </p>
                <p>
                    If you&apos;re pulled over on the highway by traffic police and asked for your vehicle&apos;s insurance information, would it be easier to find it through multiple emails or an app?
                </p>
            </div>
        </ProjectSectionWrapper>
    )
}
