import ChildSectionLayout from "@/src/components/childSectionLayout";
import SubChildSectionLayout from "@/src/components/subChildSectionLayout";
import WashUpPageFooter from "@/src/components/washUpPageFooter";
import WashUpTitle from "@/src/components/washUpTitle";
import { isMobileDevice } from "@/src/helpers/isMobileDevice";
import Image from "next/image";
import { Fragment } from "react";

function BorderBot() {
    return (
        <div className="h-0 lg:h-[60px] border-b-2 border-dashed border-accent"></div>
    )
}

export default async function Page() {
    const isMobile = await isMobileDevice()

    return (
        <Fragment>
            <main className="">
                <WashUpTitle
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
                                    <Image
                                        fill
                                        src='/insurance-feature/mobi-user-flow.png'
                                        alt='User Flow'
                                        quality={100}
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-[285px] relative">
                                    <Image
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
                                        <Image
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
                                    <Image
                                        fill
                                        src='/insurance-feature/phone-2.1.png'
                                        alt='Phone 2.1'
                                    />
                                </div>

                                <p>The interface for the specific insurance information form is shown above. On review, it became apparent that the number of fields to be completed on this screen is excessive, making it challenging to review again. While researching this aspect of other competing applications, I found the process also encountered the same situation. I have implemented several user interface improvements, including reducing the boldness of the heading field colours and highlighting information as it is entered. I have also grouped the information fields that are related to each other into sections, as shown in the screenshot below. These include the Period of Insurance, Contact Details, and Vehicle Information sections. </p>

                                <div className="py-1 mx-auto lg:py-3 w-[149px] lg:w-[249px] h-[300px] lg:h-[500px] relative">
                                    <Image
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
                                        <Image
                                            fill
                                            src='/insurance-feature/mobi-phone-3.1.png'
                                            alt='Phone 3.1'
                                        />
                                    </div>) : (
                                    <div className="py-3 w-full h-[500px] relative">
                                        <Image
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
                                            <Image
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
                                            <Image
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
                                    <Image
                                        fill
                                        src='/insurance-feature/mobi-contract.png'
                                        alt='contract'
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-[500px] relative">
                                    <Image
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
