/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import ProjectSectionWrapper from "@/src/components/projectSectionWrapper";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface ProblemSolutionProps {
    id: string;
    title: string;
    items: any;
}

enum ProblemSolutionType {
    Problem = "problem",
    Solution = 'solution',
}

interface ProblemSolutionItemProps {
    index: number;
    ps: any;
}

function ProblemSolutionItem({
    index,
    ps,
}: ProblemSolutionItemProps) {
    const [type, setType] = useState(ProblemSolutionType.Problem);
    const formattedIndex = index < 9 ? `0${index + 1}` : `${index + 1}`;

    return (
        <div
            key={index}
            className="p-8 flex justify-between gap-x-[60px] bg-[#3a3a40] rounded-[12px]">
            <div className="flex-1">
                <div className="w-fit font-extrabold text-32 text-gradient">{formattedIndex}</div>
                <div className="mt-3 mb-8 flex items-center gap-x-5">
                    <button
                        type="button"
                        onClick={() => setType(ProblemSolutionType.Problem)}
                        className={cn("font-medium text-5e text-2xl", type === ProblemSolutionType.Problem && "text-f7 font-extrabold")}>
                        Problem
                    </button>
                    <span className="text-5e text-2xl">
                        /
                    </span>
                    <button
                        type="button"
                        onClick={() => setType(ProblemSolutionType.Solution)}
                        className={cn("font-medium text-5e text-2xl", type === ProblemSolutionType.Solution && "text-f7 font-extrabold")}>
                        Solution
                    </button>
                </div>
                <div>
                    {ps[type].description}
                </div>
            </div>
            {ps[type].image && (
                <div className="w-[355px] h-[500px] grow-0 shrink-0 relative">
                    <Image
                        fill
                        src={ps[type].image}
                        alt="Problem Solution"
                    />
                </div>
            )}
        </div>
    )
}

function ProblemSolution({ id, title, items }: ProblemSolutionProps) {

    return (
        <ProjectSectionWrapper
            id={id}
            title={title}
        >
            <div className="space-y-10 mt-10">
                {items.map((_ps: any, index: number) => (
                    <ProblemSolutionItem
                        key={index}
                        index={index}
                        ps={_ps}
                    />
                ))}
            </div>
        </ProjectSectionWrapper>
    );
}

export default ProblemSolution;