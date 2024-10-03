import { Accordion } from "@/components/ui/accordion";
import AccordionSection from "@/src/app/(pages)/case-studies/vp-bank/components/problem-analysis/accordion-section";
import ChildSectionLayout from "@/src/components/childSectionLayout";

export default function ProblemAnalysisSection() {
    return (
        <ChildSectionLayout value="Problem Analysis" className="container">
            <Accordion type="multiple"
                className="w-full">
                <AccordionSection
                    value="1"
                    title="Mass market (70% urban, 50% rural), aged 20-50."
                >
                    <ul className="list-outside list-disc container space-y-2">
                        <li>
                            Simple, user-friendly UI, accessible even for users with limited tech experience
                        </li>
                        <li>
                            Security is a top priority to ensure trust and reliability.
                        </li>
                        <li>
                            Timely support channels are available for users encountering difficulties.
                        </li>
                        <li>
                            Compatible with various devices, from iOS to Android, and optimized for displays of all sizes.
                        </li>
                    </ul>
                </AccordionSection>
                <AccordionSection
                    value="2"
                    title="Deliver a seamless and unique omnichannel experience for customers."
                >
                    <p>
                        Data synchronization between platforms (web and mobile) is necessary to ensure consistency throughout the UX.
                    </p>
                    <p className="space-x-1">
                        <span className="font-semibold text-primary">
                            Features must be consistently displayed on both platforms.
                        </span>
                        <span>
                            Careful consideration should be given to necessary and unnecessary features to avoid optimizing only for the web while overloading the app platform.
                        </span>
                    </p>
                    <p className="space-x-1">
                        <span className="font-semibold text-primary">
                            User interactions must be seamless across platforms.
                        </span>
                        <span>
                            For instance, when filling out loan information, data should be saved as a draft, allowing users to switch between the web and the app without losing progress.
                        </span>
                    </p>
                </AccordionSection>
                <AccordionSection
                    value="3"
                    title="Ensure quick and easy integration with new service providers."
                >
                    <ul className="list-outside list-disc container space-y-2">
                        <li>
                            Simplify the integration process to enable easy onboarding of new vendors.
                        </li>
                        <li>
                            Security is a top priority to ensure trust and reliability.
                        </li>
                        <li>
                            Always prepared to provide technical support to partners.
                        </li>
                    </ul>
                    <p>
                        Ensure compatibility between partners and products, with clear regulations and agreements for mutually beneficial cooperation. Moreover, evaluate partners before integration and use monitoring tools to identify any issues during the process.
                    </p>
                </AccordionSection>
                <AccordionSection
                    value="4"
                    title="Enable flexibility for adjusting and developing new features over the next 2 - 5 years."
                >
                    <p>
                        Develop a flexible layout that can be easily modified when adding or removing features. I propose categorizing the features and organizing them into appropriate groups. For a banking and financial application, the features can be divided into five main groups:
                    </p>
                    <ul className="list-outside list-decimal container space-y-2">
                        <li>
                            Account and owner information management
                        </li>
                        <li>
                            Card and transaction account management
                        </li>
                        <li>
                            Features for managing loans and lending
                        </li>
                        <li>
                            Income and expense tracking, savings account management
                        </li>
                        <li>
                            Additional utilities such as shopping, ticket booking, and bill payments...
                        </li>
                    </ul>
                    <p>
                        On the positive side, adding or removing features becomes easier by focusing on developing independent components, minimizing the risk of a feature failure affecting other features. This approach also simplifies maintenance, repair, and feature upgrades.
                    </p>
                    <p>
                        On the downside, users may struggle to quickly find the needed features if they don&apos;t understand the categories. Managing feature clusters individually, rather than as a unified system, can complicate the process and requires ensuring seamless connectivity between interdependent components. Additionally, interface consistency may be compromised if different teams handle each feature.
                    </p>
                </AccordionSection>
                <AccordionSection
                    value="5"
                    title="Launch a new version within 6 months on both web and mobile app platforms."
                >
                    <ul className="list-outside list-disc container space-y-2">
                        <li>
                            Collect and analyze customer feedback on the loan application feature in the current version.
                        </li>
                        <li>
                            Group areas for improvement into categories like &apos;Urgent,&apos; &apos;High,&apos; &apos;Medium,&apos; and &apos;Low&apos; to focus on the most important issues first. Make improvements for issues at each level, then monitor and assess how effective they are after fixing each one.
                        </li>
                        <li>
                            After releasing the new version, keep tracking user feedback and continue improving the product.
                        </li>
                    </ul>
                </AccordionSection>
            </Accordion>
        </ChildSectionLayout>
    )
}
