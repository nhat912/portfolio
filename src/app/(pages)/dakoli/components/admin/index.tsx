'use client'

import FifthSlide from "@/src/app/(pages)/dakoli/components/admin/fifth";
import FirstSlide from "@/src/app/(pages)/dakoli/components/admin/first";
import FourthSlide from "@/src/app/(pages)/dakoli/components/admin/fourth";
import SecondSlide from "@/src/app/(pages)/dakoli/components/admin/second";
import ThirdSlide from "@/src/app/(pages)/dakoli/components/admin/third";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from "react";

export default function AdminSection() {
    const [current, setCurrent] = useState(0);

    const prevClick = () => {
        if (current === 0) return;

        setCurrent(current - 1);
    }

    const nextClick = () => {
        if (current === 4) return;

        setCurrent(current + 1);
    }

    return (
        <section className="py-10 bg-24">
            <div className="container ">
                <div className="relative overflow-hidden">
                    <div className="flex transition ease-out duration-500"
                        style={{
                            transform: `translateX(-${current * 100}%)`
                        }}
                    >
                        <FirstSlide />
                        <SecondSlide />
                        <ThirdSlide />
                        <FourthSlide />
                        <FifthSlide />
                    </div>

                    <div className="absolute bottom-0 right-0 flex items-center gap-x-2 z-10 bg-24 w-24">
                        <button
                            type="button"
                            onClick={prevClick}
                        >
                            <ChevronLeft className="" />
                        </button>
                        <span>
                            {`${current + 1}/5`}
                        </span>
                        <button
                            type="button"
                            onClick={nextClick}
                        >
                            <ChevronRight className="" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
