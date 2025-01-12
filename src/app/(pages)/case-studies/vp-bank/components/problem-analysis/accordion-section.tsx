import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PropsWithChildren } from "react";

interface AccordionSectionProps extends PropsWithChildren {
    value: string;
    title: string;

}

function AccordionSection({
    value,
    title,
    children
}: AccordionSectionProps) {
    return (
        <AccordionItem
            value={value}
            className="border-dashed border-b-0 border-t-2 border-4b"
        >
            <AccordionTrigger
                className="bg-gradient text-base font-semibold lg:text-2xl text-left gap-x-3"
                iconClassName="bg-gradient size-5"
            >
                {title}
            </AccordionTrigger>
            <AccordionContent
                className="text-sm lg:text-lg"
            >
                {children}
            </AccordionContent>
        </AccordionItem>
    );
}

export default AccordionSection;