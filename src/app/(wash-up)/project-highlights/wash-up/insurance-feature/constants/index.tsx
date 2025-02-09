import { Item } from "@/src/utils"
import Image from "next/image"

export const insuranceFeatureMenu: Item[] = [
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

export const keyFeatures = [
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

export const problemsSolutions = [
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