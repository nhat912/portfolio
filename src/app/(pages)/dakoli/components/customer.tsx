import QualityImage from "@/src/components/qualityImage";

export default function CustomerSection() {
    return (
        <section className="py-10 bg-24">
            <div className="container">
                <div className="w-full h-[914px] relative">
                    <QualityImage
                        fill
                        src="/dakoli/customer.png"
                        alt="Customer"
                        className=""
                    />
                </div>
            </div>
        </section>
    )
}
