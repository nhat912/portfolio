import ChildSectionLayout from "@/src/components/childSectionLayout";

export default function FontStyleSection() {
    return (
        <ChildSectionLayout value="Font style" className="container">
            <div className="space-y-5">
                <div className="bg-gradient-to-b from-[#F9E800] to-[#D6F900] text-transparent bg-clip-text text-[40px] leading-normal font-semibold">
                    Montserrat
                </div>
                <div className="flex justify-between">
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
        </ChildSectionLayout>
    )
}
