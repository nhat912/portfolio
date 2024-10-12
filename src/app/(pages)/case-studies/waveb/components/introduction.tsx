import ChildSectionLayout from "@/src/components/childSectionLayout";

export default function IntroductionSection() {
    return (
        <ChildSectionLayout value="Introduction" className="container">
            <div className="space-y-4 lg:space-y-5">
                <p className="space-x-1">
                    <span>
                        The first case study name
                    </span>
                    <span className="text-primary font-semibold">
                        WaveB
                    </span>
                    <span>
                        , completed as a fresher UI/UX Designer, highlights my early approach to problem-solving and project execution.
                    </span>
                </p>
                <p className="space-x-1">
                    <span>
                        We chose blockchain as our first project because of its appeal. At that time, blockchain was emerging as a new trend in the market, and we saw it as a great opportunity to learn how an NFT exchange operates. Additionally, we thought it would be exciting to have a visually striking project with vibrant colours in our portfolios.
                    </span>
                    <span className="text-primary font-semibold">
                        :))
                    </span>
                </p>
                <p className="space-x-3">
                    <span>
                        Team size:
                    </span>
                    <span className="text-primary font-semibold">
                        5 Fresher UX/UI Designer
                    </span>
                </p>
            </div>

        </ChildSectionLayout>
    )
}
