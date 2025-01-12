import ReviewTitle from '@/src/app/(pages)/case-studies/vp-bank/components/review/review-title'

export default function ConfidentialSection() {
    return (
        <div className="pt-6 lg:pt-[60px] pb-[60px] border-t-2 border-dashed border-4b">
            <div className="space-y-2 lg:space-y-4">
                <ReviewTitle
                    value="Confidential"
                />
                <p>
                    Always ensure and repeatedly confirm information with notifications during the user’s process. This helps enhance the platform&apos;s reputation and build trust with customers.
                </p>
                <p>
                    Currently, the information request pages lack a statement confirming that borrower information is kept strictly confidential as you see above, which may undermine customer trust in the lending bank. So, In screens that require personal information, it is essential to add a confidentiality clause to the regulations of the host country, specifically Vietnam.
                </p>
            </div>
        </div>

    )
}
