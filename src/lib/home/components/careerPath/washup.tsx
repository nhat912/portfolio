import Card from "@/src/components/card";
import Image from "next/image";

export default function WashUpSection() {
    return (
        <section>
            <div className="space-y-2">
                <div className="text-lg">12/2023 - 02/2024</div>
                <div className="font-bold text-2xl">Freelance UX/UI Designer at</div>
                <div className="bg-gradient font-bold text-2xl w-fit">Washup</div>
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
            <p className="mt-4 text-2xl font-bold">Team size</p>
            <div className="flex justify-between gap-x-1 font-semibold">
                <div className="flex gap-x-2">
                    <span>1</span>
                    <span>CTO</span>
                </div>
                <div className="flex gap-x-2">
                    <span>1</span>
                    <span>UX/UI Designer</span>
                </div>
                <div className="flex gap-x-2">
                    <span>1</span>
                    <span>QC</span>
                </div>
                <div className="flex gap-x-2">
                    <span>2</span>
                    <span>Engineers</span>
                </div>
            </div>

            <div className="space-y-5 mt-5">
                <div className="space-y-3">
                    <Card
                        hasBorderBottom
                    >
                        <div className="w-full h-[179px] relative">
                            <Image
                                fill
                                src='/home/images/car-wash.png'
                                alt='car-wash'
                                className=""
                            />
                        </div>
                        <h4 className="h-20 flex items-center justify-center bg-gradient font-semibold">
                            Washup - Car wash booking app
                        </h4>
                        <div className="h-0.5 w-full bg-black/30 absolute bottom-0 left-0"></div>
                    </Card>
                    <Card className="flex justify-center items-center gap-x-2 h-20">
                        <Image
                            src='/home/icons/lock.svg'
                            alt='lock'
                            width={14}
                            height={19}
                        />
                        <div className="font-semibold bg-gradient">
                            Insurance Feature
                        </div>
                    </Card>
                </div>
                <div className="space-y-3">
                    <Card
                        hasBorderBottom
                    >
                        <div className="w-full h-[179px] relative">
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
                    <Card className="flex justify-center items-center gap-x-2 h-20">
                        <Image
                            src='/home/icons/lock.svg'
                            alt='lock'
                            width={14}
                            height={19}
                        />
                        <div className="font-semibold bg-gradient">
                            Technician Task Detail
                        </div>
                    </Card>
                </div>
            </div>

        </section>
    )
}
