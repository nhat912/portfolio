import WashUpBreadcrumbs from "@/src/app/(wash-up)/wash-up/components/washup-breadcrumbs";
import WashUpLayout from "@/src/app/(wash-up)/wash-up/components/washup-layout";
import WashUpSection from "@/src/app/(wash-up)/wash-up/components/washup-section";
import ProblemSolution from "@/src/app/(wash-up)/wash-up/insurance-feature/components/problemSolution";
import ChildSectionLayout from "@/src/components/childSectionLayout";
import QualityImage from "@/src/components/qualityImage";
import SubChildSectionLayout from "@/src/components/subChildSectionLayout";
import Title from "@/src/components/title";
import WashUpPageFooter from "@/src/components/washUpPageFooter";
import { siteConfig } from "@/src/config";
import { isMobileDevice } from "@/src/helpers/isMobileDevice";
import { Item } from "@/src/lib/wash-up/constants";
import { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: 'Insurance Feature',
};

function BorderBot() {
    return (
        <div className="h-0 lg:h-[60px] border-b-2 border-dashed border-accent"></div>
    )
}

const insuranceFeatureMenu: Item[] = [
    {
        id: "introduction",
        title: "Introduction"
    },
    {
        id: "keyFeatures",
        title: "Key features"
    },
    {
        id: "userFlow",
        title: "User Flow"
    },
    {
        id: "problemsSolutions",
        title: "Problems/ Solutions"
    },
    {
        id: "userContracts",
        title: "User Contracts"
    },
    {
        id: "conclusion",
        title: "Conclusion"
    }
]

const keyFeatures = [
    {
        icon: "/insurance-feature/i-icon.svg",
        title: "Purchase Insurance Package",
        description: "Discover the benefits of our comprehensive vehicle insurance packages, select the one you need, provide the information required to take out a policy and pay quickly."
    },
    {
        icon: "/insurance-feature/f-icon.svg",
        title: "Insurance Contract Management",
        description: "Designed for ease of use, our application includes a feature that allows users to manage purchased insurance packages, easily access and retrieve digital legal documents."
    },
]

const problemsSolutions = [
    {
        problem: {
            description: 'The first issue was to enhance customer confidence in the platform. We recognised that the existing application lacked a clear market position and that customers might be reluctant to spend their money on purchasing our insurance.'
        },
        solution: {
            image: '/insurance-feature/ps-1.webp',
            description: (
                <div className="space-x-1">
                    <span>
                        In the initial phase, users are presented with
                    </span>
                    <span className="font-bold text-primary">
                        a pop-up summary of benefits, costs, and reasons
                    </span>
                    <span>
                        for purchasing insurance. Users can easily understand the insurance package. Before purchasing, they need to review key details such as
                    </span>
                    <span className="font-bold text-primary">
                        indemnity costs
                    </span>
                    <span>
                        and
                    </span>
                    <span className="font-bold text-primary">
                        terms
                    </span>
                    <span>
                        . To improve readability, the information is divided into sections with clear line breaks. After understanding the details, users confirm and proceed to purchase.
                    </span>
                </div>
            )
        }
    },
    {
        problem: {
            description: (
                <div className="space-y-8">
                    <div className="space-y-2">
                        <div className="font-bold text-f7">
                            Authenticity of information
                        </div>
                        <p>
                            In creating an insurance policy, gathering essential information and developing a comprehensive form may require further validation and refinement to ensure accuracy.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="font-bold text-f7">
                            Distribution of information fields
                        </div>
                        <p>
                            The insurance form interface has too many fields, making it challenging to review. Additional improvements are needed to enhance usability and better organize key sections like Coverage Period, Contact Details, and Vehicle Information.
                        </p>
                    </div>
                </div>
            )
        },
        solution: {
            image: '/insurance-feature/ps-2.webp',
            description: (
                <div className="space-y-8">
                    <div className="space-y-2">
                        <div className="font-bold text-f7">
                            Authenticity of information
                        </div>
                        <p>
                            To ensure accuracy and suitability, further guidance and adjustments from partnering insurance companies are needed, as the current data serves as a reference based on publicly available online documents.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="font-bold text-f7">
                            Distribution of information fields
                        </div>
                        <p>
                            To improve the insurance form interface, I reduced the number of fields and grouped related sections, such as Period of Insurance, Contact Details, and Vehicle Information, for easier review and usability.
                        </p>
                    </div>
                </div>
            )
        }
    },
    {
        problem: {
            description: 'Despite the minor UI changes in the second solution, the form page still did not receive much positive feedback. Users still had difficulty reviewing and editing sections, suggesting that more efficient solutions were needed.'
        },
        solution: {
            description: (
                <div className="">
                    <p>
                        So - When the user completes any section, it collapses for easy review and when you want to edit? Just click on the pencil icon.
                    </p>
                    <div className="mt-6 mb-8 relative w-full h-[562px]">
                        <Image
                            fill
                            src="/insurance-feature/ps-3.1.webp"
                            alt="Ps 3.1"
                        />
                    </div>
                    <p>
                        Moreover - We’ve added a progress bar at the top to visually indicate that the user&apos;s request is being processed. It provides updates on progress, estimated time, and active execution status.
                    </p>
                    <div className="my-6 relative w-full h-[121px]">
                        <Image
                            fill
                            src="/insurance-feature/ps-3.2.webp"
                            alt="Ps 3.1"
                        />
                    </div>
                    <p>
                        I expected the progress bar to be more intuitive, clearly showing the duration of each step. However, due to the project&apos;s urgency and limited staff, the CTO chose a simpler design (as shown above).
                    </p>
                </div>
            )
        }
    },
]

export default async function Page() {
    const isMobile = await isMobileDevice()

    if (isMobile) {
        return (
            <Fragment>
                <main className="">
                    <Title
                        title="Washup:"
                        subtitle="Insurance Feature"
                    />

                    <div className="space-y-10 lg:space-y-[60px]">
                        <ChildSectionLayout value="Introduction" className="container">
                            <div className="space-y-3 lg:space-y-5">
                                <p className="">
                                    The objective is to extend the platform&apos;s business scope while simultaneously developing a solution to streamline the purchase and management of insurance contracts for users.
                                </p>
                                <p>The vehicle insurance feature allows users to purchase insurance for their motorbikes or cars directly through the app and manage their policies efficiently.
                                    Based on several surveys, many apps have developed this feature, but managing these policies typically requires owner checking codes on the insurance company&apos;s website or via email. Our goal is to introduce a feature that eliminates the need to sift through saved emails or remember individual codes needed to retrieve insurance records.
                                </p>
                                <p>If you&apos;re stopped by traffic police on the highway and asked to provide insurance details for your vehicle, would it be simpler to find through numerous emails or access an app?</p>
                            </div>
                        </ChildSectionLayout>

                        <ChildSectionLayout value="User Flow" className="container">
                            <div className="space-y-3 lg:space-y-5">
                                {isMobile ? (
                                    <div className="w-full h-[500px] mx-auto relative">
                                        <QualityImage
                                            fill
                                            src='/insurance-feature/mobi-user-flow.png'
                                            alt='User Flow'
                                            quality={100}
                                            className="object-contain"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-[285px] relative">
                                        <QualityImage
                                            fill
                                            src='/insurance-feature/user-flow.png'
                                            alt='User Flow'
                                        />
                                    </div>
                                )}
                                <p>Some aspects of the user flow have been omitted to ensure the confidentiality of the project.</p>
                            </div>
                        </ChildSectionLayout>

                        <ChildSectionLayout value="Key features" className="container">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                                <SubChildSectionLayout value="Purchase Insurance Package">
                                    <p>
                                        Discover the benefits of our comprehensive vehicle insurance packages, select the one you need, provide the information required to take out a policy and pay quickly.
                                    </p>
                                </SubChildSectionLayout>
                                <SubChildSectionLayout value="Insurance Contract Management">
                                    <p>
                                        Designed for ease of use, our application includes a feature that allows users to manage purchased insurance packages, easily access and retrieve digital legal documents.
                                    </p>
                                </SubChildSectionLayout>
                            </div>
                        </ChildSectionLayout>

                        <ChildSectionLayout value="Purchase Insurance: Problems and Solutions" className="container">
                            <div className="space-y-5 lg:space-y-[60px]">
                                <div className="space-y-3 lg:space-y-5">
                                    {isMobile ? (
                                        <p className="first-letter:text-[40px] first-letter:leading-normal first-letter:mr-3 first-letter:float-left first-letter:font-bold">
                                            1 The first issue was to enhance customer confidence in the platform. We recognised that the existing application lacked a clear market position and that customers might be reluctant to spend their money on purchasing our insurance.
                                        </p>
                                    ) : (
                                        <div className="flex items-center gap-x-5">
                                            <span className="text-[40px] leading-normal font-bold">1</span>
                                            <div className="">
                                                The first issue was to enhance customer confidence in the platform. We recognised that the existing application lacked a clear market position and that customers might be reluctant to spend their money on purchasing our insurance.
                                            </div>
                                        </div>
                                    )}

                                    <p className="space-x-1">
                                        <span>The initial stage will present users with</span>
                                        <span className="text-primary font-bold">
                                            a pop-up summary of the benefits, costs and reasons why they should purchase insurance.
                                        </span>
                                        <span>
                                            This will be presented in a way that allows users to gain an initial understanding of the insurance package they are interested in.
                                        </span>
                                    </p>

                                    <p className="space-x-1">
                                        <span>
                                            Subsequently, before purchasing insurance, users must review the pertinent information about the insurance package, including applicable compensation costs, terms, and other relevant details. Furthermore, users usually have difficulty reading large amounts of information presented on a wall of text. To solve this issue, I have
                                        </span>
                                        <span className="text-primary font-bold">
                                            divided the subjects into separate sections, and the sections also have lines that classify different information clusters.
                                        </span>
                                        <span>
                                            This approach aims to enhance the user experience by making the content easier to read and more effective, while also reducing the risk of misunderstanding or omissions. Once all the information has been reviewed and understood,
                                        </span>
                                        <span className="text-primary font-bold">
                                            the user must tick the box to confirm and proceed to the purchase stage.
                                        </span>
                                    </p>

                                    <div className="py-3">
                                        <div className="w-[213px] lg:w-[355px] h-[300px] mx-auto lg:h-[500px] relative">
                                            <QualityImage
                                                fill
                                                src='/insurance-feature/phone-1.png'
                                                alt='Phone 1'
                                            />
                                        </div>
                                    </div>

                                    <p>We are aware that these improvements are only at the micro level and that further elements are required to construct the brand image. Nevertheless, we have endeavoured to optimise this aspect of the app to the best of our abilities.</p>

                                    <BorderBot />
                                </div>
                                <div className="space-y-3 lg:space-y-5">
                                    {isMobile ? (
                                        <p className="first-letter:text-[40px] first-letter:leading-normal first-letter:mr-3 first-letter:float-left first-letter:font-bold">
                                            2 Next, we faced was carefully researching the information needed to create an insurance policy. By analyzing competitors and collecting data from insurance providers such as HDI, PVI, and Bao Viet Insurance, we assembled the most precise information form to create a contract.
                                        </p>
                                    ) : (
                                        <div className="flex items-center gap-x-5">
                                            <span className="text-[40px] leading-normal font-bold">2</span>
                                            <div className="">
                                                Next, we faced was carefully researching the information needed to create an insurance policy. By analyzing competitors and collecting data from insurance providers such as HDI, PVI, and Bao Viet Insurance, we assembled the most precise information form to create a contract.
                                            </div>
                                        </div>
                                    )}

                                    <p>However, this data is still at a reference level because it is based on publicly available documents online. Further advice and adjustments from the partnering insurance companies are required to ensure its accuracy and suitability.
                                    </p>

                                    <div className="py-1 lg:py-3 w-full mx-auto lg:w-[654px] h-[274px] lg:h-[500px] relative">
                                        <QualityImage
                                            fill
                                            src='/insurance-feature/phone-2.1.png'
                                            alt='Phone 2.1'
                                        />
                                    </div>

                                    <p>The interface for the specific insurance information form is shown above. On review, it became apparent that the number of fields to be completed on this screen is excessive, making it challenging to review again. While researching this aspect of other competing applications, I found the process also encountered the same situation. I have implemented several user interface improvements, including reducing the boldness of the heading field colours and highlighting information as it is entered. I have also grouped the information fields that are related to each other into sections, as shown in the screenshot below. These include the Period of Insurance, Contact Details, and Vehicle Information sections. </p>

                                    <div className="py-1 mx-auto lg:py-3 w-[149px] lg:w-[249px] h-[300px] lg:h-[500px] relative">
                                        <QualityImage
                                            fill
                                            src='/insurance-feature/phone-2.2.png'
                                            alt='Phone 2.2'
                                        />
                                    </div>

                                    <BorderBot />
                                </div>

                                <div className="space-y-3 lg:space-y-5">
                                    {isMobile ? (
                                        <p className="first-letter:text-[40px] first-letter:leading-normal first-letter:mr-3 first-letter:float-left first-letter:font-bold">
                                            3 However, we found that these small UI changes didn&apos;t seem to improve matters much, so I added another feature to this form page.
                                        </p>
                                    ) : (
                                        <div className="flex items-center gap-x-5">
                                            <span className="text-[40px] leading-normal font-bold">3</span>
                                            <div className="">
                                                However, we found that these small UI changes didn&apos;t seem to improve matters much, so I added another feature to this form page.
                                            </div>
                                        </div>
                                    )}

                                    <p className="text-primary font-semibold">
                                        When the user completes any section, it collapses for easy review and when you want to edit? Just click on the pencil icon.
                                    </p>
                                    {isMobile ? (
                                        <div className="py-1 w-full h-[750px] relative">
                                            <QualityImage
                                                fill
                                                src='/insurance-feature/mobi-phone-3.1.png'
                                                alt='Phone 3.1'
                                            />
                                        </div>) : (
                                        <div className="py-3 w-full h-[500px] relative">
                                            <QualityImage
                                                fill
                                                src='/insurance-feature/phone-3.1.png'
                                                alt='Phone 3.1'
                                            />
                                        </div>
                                    )}

                                    <p>
                                        Moreover, we also create a progress bar on the top of the page which serves as a visual cue, signifying that the user request is in the system, and the application is diligently working to record the information you’ve filled. These bars play a crucial role in informing users about ongoing processes, providing estimates on the expected duration, and indicating whether a request is actively being executed.
                                    </p>

                                    <div className="flex flex-col lg:flex-row lg:justify-center gap-8 lg:gap-[100px] py-1 lg:py-3">
                                        <div className="flex flex-col lg:flex-col-reverse lg:items-center gap-3 lg:gap-5 px-[11px] lg:px-0">
                                            <div className="text-primary text-lg font-semibold">Expectation</div>
                                            <div className="w-full lg:w-[328px] h-[80px] relative">
                                                <QualityImage
                                                    fill
                                                    src='/insurance-feature/phone-3.2.png'
                                                    alt='Phone 3.2'
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col lg:flex-col-reverse lg:items-center gap-3 lg:gap-5 px-[11px] lg:px-0">
                                            <div className="text-primary text-lg font-semibold">Expectation</div>
                                            <div className="w-full lg:w-[328px] h-[80px] relative">
                                                <QualityImage
                                                    fill
                                                    src='/insurance-feature/phone-3.3.png'
                                                    alt='Phone 3.3'
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <p>
                                        I expected the progress bar to be more intuitive, clearly showing the duration of each step. However, due to the project&apos;s urgency and limited staff, the CTO chose a simpler design (as shown above).
                                    </p>
                                </div>
                            </div>
                        </ChildSectionLayout>

                        <ChildSectionLayout value="Insurance Contract Management" className="container">
                            <div className="space-y-3 lg:space-y-5">
                                <p>
                                    In general, for the purchased insurance management feature, we focus on how to help users access information in the easiest way, the interface must be friendly and easy to use, and search tools must help customers find the insurance package they need quickly. On the other hand, the automatic renewal reminder feature is also included in our development goal to achieve the greatest convenience for our customers.
                                </p>
                                {isMobile ? (
                                    <div className="w-full h-[300px] relative">
                                        <QualityImage
                                            fill
                                            src='/insurance-feature/mobi-contract.png'
                                            alt='contract'
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-[500px] relative">
                                        <QualityImage
                                            fill
                                            src='/insurance-feature/contract.png'
                                            alt='contract'
                                        />
                                    </div>
                                )}
                            </div>
                        </ChildSectionLayout>


                        <ChildSectionLayout value="Conclusion" className="container">
                            <div className="space-y-3 lg:space-y-5">
                                <p>
                                    The app&apos;s insurance sales features provide a tool for buying and managing insurance policies. The app allows users to research and make informed decisions before purchasing an insurance policy. The inclusion of insurance management features that provide real-time customer support and automatic renewal reminders further enhances convenience and customer satisfaction.
                                </p>
                                <p>
                                    Taken together, these features streamline the insurance sales process, reduce time and shorten traditional processes, and improve accessibility, making insurance administration more efficient and user-friendly. As a result, the app not only simplifies the insurance buying process, but also promotes more engaging and responsive interactions between insurers and their customers.
                                </p>
                            </div>
                        </ChildSectionLayout>
                    </div>
                </main>

                <WashUpPageFooter
                    value="Thank you for taking the time to read!."
                >
                </WashUpPageFooter>
            </Fragment>
        )
    }

    return (
        <>
            <WashUpBreadcrumbs items={[
                {
                    label: 'Project Highlights',
                    href: '/wash-up',
                },
                {
                    label: siteConfig.pageList.insuranceFeature.as,
                },
            ]} />
            <WashUpLayout
                menu={insuranceFeatureMenu}
            >
                <WashUpSection
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
                    <div className="mt-10 relative w-full h-[408px] bg-gradient-to-r from-[#00416A] to-[#E4E5E6] rounded-[12px] overflow-hidden">
                        {/* <Image
                            fill
                            src="/vehicle-wash-app/user-flow.png"
                            alt="User Flow"
                        /> */}
                    </div>
                </WashUpSection>

                <WashUpSection
                    id={insuranceFeatureMenu[1].id}
                    title={insuranceFeatureMenu[1].id}
                >
                    <div className="mt-10 space-y-10">
                        {keyFeatures.map((feature) => (
                            <div
                                key={feature.title}
                                className="flex gap-x-10 justify-between items-center">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-extrabold text-f7">
                                        {feature.title}
                                    </h3>
                                    <p>
                                        {feature.description}
                                    </p>
                                </div>
                                <div className="size-[200px] grow-0 shrink-0 relative">
                                    <Image
                                        fill
                                        src={feature.icon}
                                        alt={feature.title}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </WashUpSection>

                <WashUpSection
                    id={insuranceFeatureMenu[2].id}
                    title={insuranceFeatureMenu[2].title}
                >
                    <div className="mt-10 relative w-full h-[260.73px]">
                        <Image
                            fill
                            src="/insurance-feature/user-flow.webp"
                            alt="User flow"
                        />
                    </div>
                </WashUpSection>

                <ProblemSolution
                    id={insuranceFeatureMenu[3].id}
                    title={insuranceFeatureMenu[3].title}
                    items={problemsSolutions}
                />

                <WashUpSection
                    id={insuranceFeatureMenu[4].id}
                    title={insuranceFeatureMenu[4].title}
                >
                    <div className="mt-10 space-y-10">
                        <p>
                            The insurance management feature prioritizes easy access, a user-friendly interface, quick search tools, and automatic renewal reminders for maximum customer convenience. Below is a summary table showcasing the details of the Insurance Package, coverage period, owner information, and insured vehicle details.
                        </p>
                        <div className="relative w-full h-[408px] bg-gradient-to-r from-[#00416A] to-[#E4E5E6] rounded-[12px] overflow-hidden">
                            {/* <Image
                            fill
                            src="/vehicle-wash-app/user-flow.png"
                            alt="User Flow"
                        /> */}
                        </div>
                    </div>
                </WashUpSection>

                <WashUpSection
                    id={insuranceFeatureMenu[5].id}
                    title={insuranceFeatureMenu[5].title}
                >
                    <div className="mt-10 space-y-10">
                        <p>
                            Finally, the app&apos;s insurance sales capabilities provide a comprehensive solution for purchasing and managing insurance policies. With research tools, real-time support and automatic renewal reminders, the app increases convenience and customer satisfaction. By streamlining the insurance process, saving time, and improving accessibility, the app simplifies insurance administration and fosters more engaging interactions between insurers and their customers.
                        </p>
                    </div>
                </WashUpSection>
            </WashUpLayout>
        </>
    )
}
