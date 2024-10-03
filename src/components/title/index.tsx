import { cn } from "@/src/lib/utils";

interface TitleProps {
    title: string;
    subtitle?: string;
    className?: string
}

function Title({ title, subtitle, className }: TitleProps) {
    return (
        <h1 className={cn("gap-3 font-bold text-32 container mt-5 lg:items-baseline lg:leading-tight mb-14 lg:mb-28 flex flex-col lg:flex-row lg:text-[60px]", className)}>
            <div>{title}</div>
            {subtitle && <div className="bg-gradient w-fit">{subtitle}</div>}
        </h1>
    );
}

export default Title;