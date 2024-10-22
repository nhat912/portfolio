import { cn } from '@/src/lib/utils';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
	className?: string;
	hasBorderBottom?: boolean;
	href?: string;
}

export default function Card({
	children,
	className = '',
	hasBorderBottom = false,
	href = '/'
}: CardProps) {
	return (
		<Link
			href={encodeURI(href)}
			className={cn(
				'rounded-2xl block overflow-hidden w-full border-[1px] border-gray-600 shadow-md shadow-black relative group',
				className
			)}
		>
			{children}
			{hasBorderBottom && (
				<div className="h-0.5 w-full bg-black/30 absolute bottom-0 left-0"></div>
			)}
		</Link>
	);
}
