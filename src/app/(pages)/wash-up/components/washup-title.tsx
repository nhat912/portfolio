import { cn } from '@/src/lib/utils';
import React from 'react';

interface WashUpTitleProps {
    id: string;
    value: string;
    tag?: keyof JSX.IntrinsicElements;
    hasBottomBorder?: boolean;
    className?: string;
}

const WashUpTitle: React.FC<WashUpTitleProps> = ({ id = '', value, tag = 'h2', hasBottomBorder = true, className = '' }) => {
    const Tag = tag as keyof JSX.IntrinsicElements;

    return (
        <Tag
            id={id}
            className={cn("text-[32px] text-accent font-extrabold text-3xl", hasBottomBorder && "pb-4 border-b border-[#42424A]", className)}>
            {value}
        </Tag>
    );
};

export default WashUpTitle;