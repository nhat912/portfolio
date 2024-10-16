import { montserrat } from "@/src/app/fonts";
import ChildSectionLayout from "@/src/components/childSectionLayout";
import { cn } from "@/src/lib/utils";

export default function FontStyleSection() {
    return (
        <ChildSectionLayout
            value={(<div className="flex flex-col gap-2 lg:flex-row lg:gap-3">
                <span>Font style:</span>
                <span className={cn("bg-gradient-to-b from-[#F9E800] to-[#D6F900] text-transparent bg-clip-text text-[40px] leading-normal font-semibold", montserrat.className)}>
                    Montserrat
                </span>
            </div>)}
            className="container"
        >
            <div className={cn("flex gap-8 items-center", montserrat.className)}>
                <div className="w-[185px] grow-0 shrink-0 text-[130px] leading-none font-bold hidden lg:block">
                    Aa
                </div>
                <div className="space-y-5 flex-1">
                    <div className="flex justify-between lg:justify-start lg:gap-x-10">
                        <span>
                            Regular
                        </span>
                        <span className="font-medium">
                            Medium
                        </span>
                        <span className="font-semibold">
                            Semibold
                        </span>
                        <span className="font-bold">
                            Bold
                        </span>
                    </div>
                    <p>
                        Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>
            </div>
        </ChildSectionLayout>
    )
}
