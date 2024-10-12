import ChildSectionLayout from '@/src/components/childSectionLayout'

export default function OverviewSection() {
    return (
        <ChildSectionLayout value="Overview" className="container">
            <div className="space-y-5">
                <p>
                    This is a B2B e-commerce project aimed at bringing Vietnamese products to the global market. Although platforms like Amazon and Alibaba have done well in this space, businesses in countries like Vietnam still face significant challenges when using these platforms ( including language barriers, complex policies, and payment issues). This is why Dakoli was created as a platform for Vietnamese businesses and individuals seeking to enter the global B2B market. We offer logistics solutions, business support, welfare services, payment solutions, and, most importantly, connections to consumers worldwide.
                </p>
                <p>
                    Based on the owner&apos;s requirements, the design team level, and the project timeline, we did not carry out other steps like evaluating or screening target users or analysing UX issues. Instead, we conducted competitor research, developed the Userflow, created Wireframes, and directly proceeded with the UI design. The designs were primarily based on the customer’s direct requirements, with minimal adjustments to the color layout.
                </p>
                <p className="space-x-1">
                    <span>Our project team consists of three members: two interns and one junior UX/UI designer. We are responsible for managing the project&apos;s three main platforms:</span>
                    <span className="text-primary font-semibold">
                        Customer, Seller
                    </span>
                    <span>
                        and
                    </span>
                    <span className="text-primary font-semibold">
                        Administrator
                    </span>
                    <span>
                        . For this project, my primary focus was on developing the administrator management system, with some involvement in other platforms. I will showcase only the UI work I did or contributed to and highlight key points.
                    </span>
                </p>
            </div>
        </ChildSectionLayout>
    )
}
