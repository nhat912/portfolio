'use client'

import QualityImage from "@/src/components/qualityImage"
import { cn } from "@/src/lib/utils"
import { useState } from "react"

interface ImageItemProps {
    wfSrc: string
    hoverWFSrc: string
    uiSrc: string
    hoverUISrc: string
    className?: string
}

enum btnEnum {
    WF = 'wf',
    UI = 'ui'
}

const BUTTONS = [
    {
        id: btnEnum.WF,
        label: 'Wireframe',
    },
    {
        id: btnEnum.UI,
        label: 'Ui Design',
    },
]


export default function ImageItem({ className = '', wfSrc, hoverWFSrc, hoverUISrc, uiSrc }: ImageItemProps) {
    const [isHovering, setIsHovering] = useState(false);
    const [mode, setMode] = useState(btnEnum.WF);

    const handleMouseEnter = () => {
        setIsHovering(true)
    }

    const handleMouseLeave = () => {
        setIsHovering(false)
    }

    const handleModeClick = (id: btnEnum) => {
        setMode(id)
    }

    return (
        <div
            className={cn("relative w-full cursor-pointer", className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <QualityImage
                fill
                src={wfSrc}
                alt="Wireframe Image"
                className={cn("", mode === btnEnum.WF && !isHovering ? 'block' : 'hidden')}
            />
            <QualityImage
                fill
                src={hoverWFSrc}
                alt="Wireframe Image"
                className={cn("", mode === btnEnum.WF && isHovering ? 'block' : 'hidden')}
            />
            <QualityImage
                fill
                src={uiSrc}
                alt="Wireframe Image"
                className={cn("", mode === btnEnum.UI && !isHovering ? 'block' : 'hidden')}
            />
            <QualityImage
                fill
                src={hoverUISrc}
                alt="Wireframe Image"
                className={cn("", mode === btnEnum.UI && isHovering ? 'block' : 'hidden')}
            />
            {isHovering && (
                <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex p-1 bg-4b">
                    {BUTTONS.map(btn => (
                        <button
                            key={btn.id}
                            type="button"
                            className={cn("flex-1 py-2 px-4 whitespace-nowrap font-medium rounded-full text-sm transition", mode === btn.id ? 'bg-gradient-to-tr from-secondary to-primary text-background' : 'bg-transparent text-white')}
                            onClick={() => handleModeClick(btn.id)}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}