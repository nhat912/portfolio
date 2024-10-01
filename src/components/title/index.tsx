interface TitleProps {
    title: string;
    subtitle?: string;
}

function Title({ title, subtitle }: TitleProps) {
    return (
        <h1 className="gap-3 font-bold text-32 container mt-5 lg:items-baseline lg:leading-tight mb-14 lg:mb-28 flex flex-col lg:flex-row lg:text-[60px]">
            <div>{title}</div>
            {subtitle && <div className="bg-gradient w-fit">{subtitle}</div>}
        </h1>
    );
}

export default Title;