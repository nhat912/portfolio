'use client'

import ImageScroll from '@/src/app/(pages)/case-studies/wave-b/components/image-scroll'
import WireFrameDrawer from '@/src/app/(pages)/case-studies/wave-b/components/wireframe/wf-drawer'
import ChildSectionLayout from '@/src/components/childSectionLayout'
import QualityImage from '@/src/components/qualityImage'
import { useState } from 'react';

export default function MobileWireFrame() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectId, setSelectedId] = useState('home');

    const handleImageClick = (id: string) => {
        setOpenDrawer(true)
        setSelectedId(id)
    }

    return (
        <ChildSectionLayout value="Wireframe/ Final UI" className="container">
            <div className="space-y-4">
                <p>
                    Based on the sketched sitemap, we created wireframes for the following pages in order: the homepage, NFT information page, user information page, and blog. Given the limited time, this sequence was chosen to prioritize our resources on crafting an exceptional homepage. Additionally, we believe that the homepage and NFT information page are the most critical components of the project.
                </p>
                <ImageScroll
                    totalSlides={7}
                >
                    <div className="mr-2">
                        <div
                            onClick={() => {
                                handleImageClick('create')
                            }
                            }
                            className="relative w-[150px] h-[183px]">
                            <QualityImage
                                fill
                                src="/case-studies/waveb/wireframe/mobile/scroll/wf.1.png"
                                alt="wf.1"
                            />
                        </div>
                    </div>
                    <div className="mr-2">
                        <div
                            onClick={() => {
                                handleImageClick('coin')
                            }
                            }
                            className="relative w-[150px] h-[282px]">
                            <QualityImage
                                fill
                                src="/case-studies/waveb/wireframe/mobile/scroll/wf.2.png"
                                alt="wf.2"
                            />
                        </div>
                    </div>
                    <div className="mr-2 space-y-2">
                        <div
                            onClick={() => {
                                handleImageClick('explore')
                            }
                            }
                            className="relative w-[150px] h-[182px]">
                            <QualityImage
                                fill
                                src="/case-studies/waveb/wireframe/mobile/scroll/wf.3.1.png"
                                alt="wf.3.1"
                            />
                        </div>
                        <div
                            onClick={() => {
                                handleImageClick('nft')
                            }
                            }
                            className="relative w-[150px] h-[123px]">
                            <QualityImage
                                fill
                                src="/case-studies/waveb/wireframe/mobile/scroll/wf.3.2.png"
                                alt="wf.3.2"
                            />
                        </div>
                    </div>
                    <div className="mr-2">
                        <div
                            onClick={() => {
                                handleImageClick('home')
                            }
                            }
                            className="relative w-[150px] h-[444px]">
                            <QualityImage
                                fill
                                src="/case-studies/waveb/wireframe/mobile/scroll/wf.4.png"
                                alt="wf.4"
                            />
                        </div>
                    </div>
                    <div className="mr-2 space-y-2">
                        <div
                            onClick={() => {
                                handleImageClick('login')
                            }
                            }
                            className="relative w-[150px] h-[93.6px]">
                            <QualityImage
                                fill
                                src="/case-studies/waveb/wireframe/mobile/scroll/wf.5.1.png"
                                alt="wf.5.1"
                            />
                        </div>
                        <div
                            onClick={() => {
                                handleImageClick('profile')
                            }
                            }
                            className="relative w-[150px] h-[250.5px]">
                            <QualityImage
                                fill
                                src="/case-studies/waveb/wireframe/mobile/scroll/wf.5.2.png"
                                alt="wf.5.2"
                            />
                        </div>
                    </div>
                    <div className="mr-2 space-y-2">
                        <div
                            onClick={() => {
                                handleImageClick('login')
                            }
                            }
                            className="relative w-[150px] h-[93.6px]">
                            <QualityImage
                                fill
                                src="/case-studies/waveb/wireframe/mobile/scroll/wf.6.1.png"
                                alt="wf.6.1"
                            />
                        </div>
                        <div
                            onClick={() => {
                                handleImageClick('wallet')
                            }
                            }
                            className="relative w-[150px] h-[250.5px]">
                            <QualityImage
                                fill
                                src="/case-studies/waveb/wireframe/mobile/scroll/wf.6.2.png"
                                alt="wf.6.2"
                            />
                        </div>
                    </div>
                    <div className="mr-2">
                        <div
                            onClick={() => {
                                handleImageClick('blogs')
                            }
                            }
                            className="relative w-[150px] h-[257px]">
                            <QualityImage
                                fill
                                src="/case-studies/waveb/wireframe/mobile/scroll/wf.7.png"
                                alt="wf.7"
                            />
                        </div>
                    </div>
                </ImageScroll>

                <p className='text-center text-xs text-primary font-semibold'>
                    Click on the screen you prefer to view a larger image.
                </p>
            </div>
            <WireFrameDrawer
                open={openDrawer}
                onOpenChange={setOpenDrawer}
                selectId={selectId}
            />
        </ChildSectionLayout>
    )
}
