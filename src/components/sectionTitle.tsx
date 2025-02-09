import { cn } from '@/src/lib/utils';
import React from 'react';

interface SectionTitleProps {
    id: string;
    value: string;
    tag?: keyof JSX.IntrinsicElements;
    hasBottomBorder?: boolean;
    className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ id = '', value, tag = 'h2', hasBottomBorder = true, className = '' }) => {
    const Tag = tag as keyof JSX.IntrinsicElements;

    return (
        <Tag
            id={id}
            className={cn("text-xl lg:text-[32px] text-accent font-extrabold capitalize", hasBottomBorder && "pb-3 lg:pb-4 border-b border-[#42424A]", className)}
        >
            {value}
        </Tag>
    );
};

export default SectionTitle;