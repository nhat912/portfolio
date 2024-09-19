import Card from '@/src/components/card'
import Image from 'next/image'
import React from 'react'

export default function BuymedSection() {
    return (
        <section>
            <div className="space-y-2">
                <div className="text-lg">10/2022 - Now</div>
                <div className="font-bold text-2xl">UX/UI Designer at</div>
                <div className="bg-gradient font-bold text-2xl w-fit">Buymed</div>
            </div>
            <div className="space-y-2 mt-4">
                <p className='space-x-1'>
                    <span>Develop a design system to shorten project development and deployment time while ensuring consistent product design across the Buymed ecosystem, including</span>
                    <span className="font-bold">Thuocsi</span>
                    <span>and</span>
                    <span className="font-bold">Circa</span>
                </p>
                <p className='space-x-1'>
                    <span>Developing features in</span>
                    <span className="font-bold">Thuocsi</span>
                    <span>according to BA requests by creating wireframes, offering multiple design options, and building the UI based on the wireframes and specified requirements.</span>
                </p>
                <p className='space-x-1'>
                    <span>Contribute to the development of the</span>
                    <span className="font-bold">Circa</span>
                    <span>project by analyzing features, recommending improvements to ensure the logical implementation of BOD-requested features, and designing the user interface in line with stakeholders&apos; expectations while maintaining a strong user experience.</span>
                    <span className="font-bold"></span>
                </p>
            </div>
            <div className="mt-4 space-y-3">
                <p className="mt-4 text-2xl font-bold">Circa</p>
                <Card
                    hasBorderBottom
                >
                    <div className="w-full h-[179px] relative">
                        <Image
                            fill
                            src='/home/images/circa.png'
                            alt='circa'
                            className=""
                        />
                    </div>
                    <h4 className="h-20 flex items-center justify-center bg-gradient font-semibold">
                        Circa - Healthcare app
                    </h4>
                    <div className="h-0.5 w-full bg-black/30 absolute bottom-0 left-0"></div>
                </Card>
                <div className="grid grid-cols-3 gap-3">

                </div>
            </div>
        </section>
    )
}
