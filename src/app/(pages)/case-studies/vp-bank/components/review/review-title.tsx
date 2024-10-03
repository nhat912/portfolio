interface ReviewTitleProps {
    value: string
}

function ReviewTitle({ value }: ReviewTitleProps) {
    return (
        <div className="space-x-4 text-base lg:text-2xl font-semibold">
            <span>
                Expectation:
            </span>
            <span className="text-primary">
                {value}
            </span>
        </div>
    );
}

export default ReviewTitle;