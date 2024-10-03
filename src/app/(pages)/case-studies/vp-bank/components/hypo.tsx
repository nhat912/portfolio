import ChildSectionLayout from "@/src/components/childSectionLayout";

export default function HypoSection() {
    return (
        <ChildSectionLayout value="Hypothetical situation" className="container">
            <div className="space-y-4 lg:space-y-5">
                <p>
                    VP Bank is a leading financial institution in Vietnam, holding the second-largest market share for unsecured personal loans.
                </p>
                <p className="space-x-1">
                    <span>
                        Business goal:
                    </span>
                    <span className="text-primary font-semibold">
                        To become the market leader by 2024.
                    </span>
                </p>
                <p className="space-x-1">
                    <span>
                        Target customer:
                    </span>
                    <span className="text-primary font-semibold">
                        Mass market (70% urban, 50% rural), aged 20-50.
                    </span>
                </p>
                <div className="space-y-1">
                    <p>
                        Business Expectations for the Product:
                    </p>
                    <ul className="list-outside list-disc container space-y-2">
                        <li>
                            Deliver a seamless and unique omnichannel experience for customers.
                        </li>
                        <li>
                            Ensure quick and easy integration with new service providers.
                        </li>
                        <li>
                            Enable flexibility for adjusting and developing new features over the next 2 - 5 years.
                        </li>
                        <li>
                            Launch a new version within 6 months on both web and mobile app platforms.
                        </li>
                    </ul>
                </div>
                <div className="space-y-1">
                    <p>
                        Key areas for improvement based on negative customer feedback:
                    </p>
                    <ul className="list-outside list-disc container space-y-2">
                        <li>
                            Opening a loan account.
                        </li>
                        <li>
                            Timely loan payment process.
                        </li>
                    </ul>
                </div>
            </div>
        </ChildSectionLayout>
    )
}
