import IFIntroductionSection from '@/src/app/(wash-up)/project-highlights/wash-up/insurance-feature/components/commons/ifIntroductionSection'
import { insuranceFeatureMenu } from '@/src/app/(wash-up)/project-highlights/wash-up/insurance-feature/constants'
import ProjectBreadcrumbs from '@/src/components/projectBreadcumbs'
import ProjectLayout from '@/src/components/projectLayout'
import { siteConfig } from '@/src/config'

export default function InsuranceFeatureSection() {
    return (
        <>
            <ProjectBreadcrumbs items={[
                {
                    label: siteConfig.pageList.insuranceFeature.as,
                },
            ]} />
            <ProjectLayout
                menu={insuranceFeatureMenu}
            >
                <IFIntroductionSection />
            </ProjectLayout>
        </>
    )
}
