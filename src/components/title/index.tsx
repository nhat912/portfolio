import { cn } from "@/src/lib/utils";

interface TitleProps {
    title: string;
    subtitle?: string;
    className?: string
}

function Title({ title, subtitle, className }: TitleProps) {
    return (
        <h1 className={cn("lg:gap-3 gap-1 font-bold text-32 container mt-5 lg:items-baseline mb-[60px] lg:mb-[120px] flex flex-col lg:flex-row lg:text-60", className)}>
            <span>{title}</span>
            {subtitle && <span className="bg-gradient w-fit">{subtitle}</span>}
        </h1>
    );
}

export default Title;