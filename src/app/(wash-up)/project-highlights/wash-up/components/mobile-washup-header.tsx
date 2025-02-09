'use client';

import MobileWashUpSectionSelector from "@/src/app/(wash-up)/project-highlights/wash-up/components/mobile-washup-page-selector";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const threshold = 10;
function MobileWashUpHeader() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, (value) => (value > threshold ? 0 : value));

    return (
        <motion.div
            className="mt-[88px] bg-background sticky top-0 z-10 flex flex-wrap items-center justify-between border-2 border-background"
            style={{ y }}
        >
            <Image
                priority
                src="/washup-logo.svg"
                alt="washup logo"
                width={160.47}
                height={44}
            />
            <MobileWashUpSectionSelector />
        </motion.div>
    );
}

export default MobileWashUpHeader;
