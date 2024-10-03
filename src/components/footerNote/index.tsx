interface FooterNoteProps {
    value: string;
}

function FooterNote({ value }: FooterNoteProps) {
    return (
        <div className="flex items-center justify-between gap-x-3">
            <div className="flex-1 h-px bg-accent"></div>
            <div className="whitespace-nowrap font-semibold">{value}</div>
            <div className="flex-1 h-px bg-accent"></div>
        </div>
    );
}

export default FooterNote;