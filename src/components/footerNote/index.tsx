import { cn } from '@/src/lib/utils';

interface FooterNoteProps {
	value: string;
	className?: string;
}

function FooterNote({ value, className = '' }: FooterNoteProps) {
	return (
		<div
			className={cn(
				'flex items-center justify-between gap-x-3 pb-[40px] lg:pb-[100px] lg:pt-[60px] container',
				className
			)}
		>
			<div className="flex-1 h-px bg-accent"></div>
			<div className="whitespace-nowrap font-semibold">{value}</div>
			<div className="flex-1 h-px bg-accent"></div>
		</div>
	);
}

export default FooterNote;
