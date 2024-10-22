'use client'

import { cn } from "@/src/lib/utils";
import { PropsWithChildren, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./image-scroll.styles.css";

interface ImageScrollProps extends PropsWithChildren {
    className?: string
    totalSlides: number
}

function ImageScroll({ children, className = '', totalSlides = 1 }: ImageScrollProps) {
    const sliderRef = useRef<Slider | null>(null);
    const [slideIndex, setSlideIndex] = useState(3);

    const settings = {
        className: "center",
        centerMode: true,
        initialSlide: Math.floor(totalSlides / 2),
        speed: 400,
        arrows: false,
        variableWidth: true,
        draggable: false,
        touchMove: false,
        beforeChange: (current: number, next: number) => setSlideIndex(next)
    };

    return (
        <div className={cn("container", className)}>
            <div className="slider-container">
                <Slider
                    ref={(slider: Slider | null) => {
                        sliderRef.current = slider;
                    }}
                    {...settings}
                >
                    {children}
                </Slider>
            </div>

            <div className="mt-4 grid place-items-center space-y-2">
                <input
                    id="slider"
                    onChange={e => sliderRef.current?.slickGoTo(Number(e.target.value))}
                    value={slideIndex}
                    type="range"
                    min={0}
                    max={totalSlides - 1}
                />

                <p className="text-[8px] italic">
                    Swipe the dot
                </p>
            </div>
        </div>
    );
}

export default ImageScroll;
