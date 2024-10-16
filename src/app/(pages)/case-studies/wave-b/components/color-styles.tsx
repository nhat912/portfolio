
import ChildSectionLayout from "@/src/components/childSectionLayout";
import Image from "next/image";

const ColorColumn = ({ img, name }: { img: string, name: string }) => {
    return (
        <div className="space-y-5">
            <div className="size-[60px] lg:size-[100px] relative">
                <Image
                    fill
                    src={img}
                    alt={name}
                />
            </div>
            <div className="font-semibold lg:text-lg">
                {name}
            </div>
        </div>
    )
}

export default function ColorStylesSection() {
    return (
        <ChildSectionLayout value="Color styles" className="container">
            <div className="space-y-4 lg:space-y-5">
                <p className="space-x-1">
                    For the dark mode interface, we selected high-contrast colors to enhance user appeal. Gradient colors were also used as primary tones; however, I feel they currently lack impact, as the two chosen colors don&apos;t seem to create enough contrast or complement each other effectively.
                </p>
                <p className="space-x-1">
                    Additionally, since the primary color tone leans towards yellow, we opted to replace the usual yellow in notifications with orange, instead of using the common red-green-yellow color scheme.
                </p>
                <div className="flex flex-col">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[100px] lg:border-b-2 lg:border-pj">
                        <div className="py-4 lg:py-5 border-b-2 border-pj lg:border-none">
                            <div className="w-1/2 lg:w-[300px]">
                                <div className="text-base lg:text-2xl font-bold">
                                    Primary
                                </div>
                                <div className="w-full h-[60px] lg:h-[100px] relative my-5 lg:mb-5 lg:mt-8">
                                    <Image
                                        fill
                                        src="/case-studies/waveb/primary.png"
                                        alt="Primary color"
                                    />
                                </div>
                                <div className="flex justify-between font-semibold lg:text-lg">
                                    <span className="">
                                        #F9E800
                                    </span>
                                    <span>
                                        #D6F900
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="py-5 border-b-2 border-pj lg:border-none">
                            <div className="text-base lg:text-2xl font-bold">
                                Notification
                            </div>
                            <div className="mt-8 flex gap-x-[57px] lg:gap-x-[100px]">
                                <ColorColumn
                                    img="/case-studies/waveb/5EF00C.png"
                                    name="#5EF00C"
                                />
                                <ColorColumn
                                    img="/case-studies/waveb/FF1D20.png"
                                    name="#FF1D20"
                                />
                                <ColorColumn
                                    img="/case-studies/waveb/F46733.png"
                                    name="#F46733"
                                />
                            </div>
                        </div>
                    </div>
                    <p className="mt-5 mb-4 lg:mt-10 lg:mb-8">
                        There’s nothing particularly special about the neutral colors we chose, but we adhered to the principle of avoiding pure white (#FFFFFF) and pure black (#000000).
                    </p>
                    <div className="flex flex-col gap-x-5 lg:flex-row lg:items-center lg:gap-x-[100px]">
                        <div className="pb-5 border-b-2 border-pj lg:border-none">
                            <div className="text-base lg:text-2xl font-bold">
                                Neutral
                            </div>
                            <div className="mt-8 flex gap-x-[57px] lg:gap-x-[100px]">
                                <ColorColumn
                                    img="/case-studies/waveb/F2F2F2.png"
                                    name="#F2F2F2"
                                />
                                <ColorColumn
                                    img="/case-studies/waveb/D9D9D9.png"
                                    name="#D9D9D9"
                                />
                                <ColorColumn
                                    img="/case-studies/waveb/9E9E9E.png"
                                    name="#9E9E9E"
                                />
                            </div>
                        </div>
                        <div className="pt-4 lg:pt-10 flex gap-x-[57px] lg:gap-x-[100px]">
                            <ColorColumn
                                img="/case-studies/waveb/686868.png"
                                name="#686868"
                            />
                            <ColorColumn
                                img="/case-studies/waveb/26261E.png"
                                name="#26261E"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </ChildSectionLayout>
    )
}
