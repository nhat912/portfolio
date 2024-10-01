import Card from "@/src/components/card";
import Image from "next/image";

export default function WashUpSection() {

    return (
        <section>
            <div className="space-y-2">
                <div className="text-lg">12/2023 - 02/2024</div>
                <div className="flex flex-col font-bold gap-1 lg:flex-row lg:gap-2 text-2xl lg:text-[40px] lg:leading-normal">
                    <div className="">Freelance UX/UI Designer at</div>
                    <div className="bg-gradient w-fit">Washup</div>
                </div>
            </div>
            <div className="space-y-2 mt-4">
                <p>
                    I was involved in improving existing workflows and creating new workflows for some of the platform&apos;s features, such as:
                </p>
                <ul className="list-outside list-disc container space-y-2">
                    <li className="text-wrap">Streamlined and shortened the ordering process to minimize the number of steps for the user.</li>
                    <li>Developed an insurance sales flow, gathered information on insurance packages, adjusted the layout, and added basic features to enhance the user experience, drawing from negative experiences with other platforms.</li>
                    <li>Enhanced the order reception process for technicians.</li>
                </ul>
            </div>

            <div className="flex flex-col gap-5 lg:flex-row lg:gap-8 mt-5 lg:mt-[50px]">
                <div className="flex-1">
                    <Card
                        hasBorderBottom
                        href="/wash-up/vehicle-wash-app"
                    >
                        <div className="w-full h-[179px] lg:h-[262px] relative">
                            <Image
                                fill
                                src='/home/images/car-wash.png'
                                alt='vehicle-wash-app'
                                className=""
                            />
                        </div>
                        <h4 className="h-20 flex items-center justify-center bg-gradient font-semibold">
                            Washup - Vehicle wash app
                        </h4>
                        <div className="h-0.5 w-full bg-black/30 absolute bottom-0 left-0"></div>
                    </Card>
                </div>
                <div className="flex-1">
                    <Card
                        hasBorderBottom
                        href="/wash-up/technician-app"
                    >
                        <div className="w-full h-[179px] lg:h-[262px] relative">
                            <Image
                                fill
                                src='/home/images/technician.png'
                                alt='technician'
                                className=""
                            />
                        </div>
                        <h4 className="h-20 flex items-center justify-center bg-gradient font-semibold">
                            Washup - Technician app
                        </h4>
                        <div className="h-0.5 w-full bg-black/30 absolute bottom-0 left-0"></div>
                    </Card>
                </div>
            </div>

        </section>
    )
}
