/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

interface QualityImageProps {
    [key: string]: any;
}

function QualityImage({ ...props }: QualityImageProps) {
    return (
        <Image
            src={props.src}
            alt={props.alt}
            {...props}
            quality={props.quality || 100}
        />
    );
}

export default QualityImage;