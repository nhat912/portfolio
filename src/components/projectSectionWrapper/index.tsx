import SectionTitle from "@/src/components/sectionTitle";
import BorderGradientWrapper from "@/src/components/borderGradientWrapper";
import { cn } from "@/src/lib/utils";
import { PropsWithChildren } from "react";

interface ProjectSectionWrapperProps extends PropsWithChildren {
    className?: string
    tag?: keyof JSX.IntrinsicElements;
    title: string;
    id: string;
    hasBottomBorder?: boolean
    titleClassName?: string
}

function ProjectSectionWrapper({ id, tag = 'h2', title, children, className = '', hasBottomBorder = true, titleClassName = '' }: ProjectSectionWrapperProps) {
    return (
        <BorderGradientWrapper className="w-full">
            <section className={cn("p-8 rounded-[8px] bg-24 text-lg", className)}>
                <SectionTitle
                    id={id}
                    tag={tag}
                    value={title}
                    hasBottomBorder={hasBottomBorder}
                    className={titleClassName}
                />
                {children}
            </section>
        </BorderGradientWrapper>
    );
}

export default ProjectSectionWrapper;