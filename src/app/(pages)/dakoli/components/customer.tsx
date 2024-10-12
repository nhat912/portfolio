import Image from "next/image";

export default function CustomerSection() {
    return (
        <section className="py-10 bg-24">
            <div className="container">
                <div className="w-full h-[914px] relative">
                    <Image
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
