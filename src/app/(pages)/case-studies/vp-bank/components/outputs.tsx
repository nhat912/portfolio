import ChildSectionLayout from '@/src/components/childSectionLayout'

export default function OutputsSection() {
    return (
        <ChildSectionLayout
            value="My Outputs"
            className="container"
        >
            <div className="space-y-4 lg:space-y-5">
                <p className='space-x-1'>
                    <span>
                        Platform:
                    </span>
                    <span className="text-primary font-semibold">
                        Mobile view
                    </span>
                </p>
                <p>
                    Provide a detailed explanation of the reasoning behind the proposed design solutions and apply them to the design.
                </p>
                <p>
                    Display all the solutions in the UI, and compare them with the existing version of the application.
                </p>
            </div>
        </ChildSectionLayout>
    )
}
