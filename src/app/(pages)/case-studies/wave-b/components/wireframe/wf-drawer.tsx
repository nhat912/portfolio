'use client'

import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import QualityImage from "@/src/components/qualityImage";
import { cn } from "@/src/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

interface WireFrameDrawerProps {
    selectId: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const SLIDES = [
    {
        id: 'home',
        title: 'Home page',
        wfImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/home.png',
                height: 1059.68,
            }
        ],
        uiImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/home-ui.png',
                height: 1059.68,
            }
        ]
    },
    {
        id: 'profile',
        title: 'Profile',
        wfImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/profile.png',
                height: 597.86,
            }
        ],
        uiImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/profile-ui.png',
                height: 597.86,
            }
        ]
    },
    {
        id: 'wallet',
        title: 'My Wallet',
        wfImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/wallet.png',
                height: 591.42,
            }
        ],
        uiImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/wallet-ui.png',
                height: 591.42,
            }
        ]
    },
    {
        id: 'explore',
        title: 'Explore Collections',
        wfImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/explore.png',
                height: 433.9,
            }
        ],
        uiImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/explore-ui.png',
                height: 433.9,
            }
        ]
    },
    {
        id: 'coin',
        title: 'Coin Rankings',
        wfImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/coin.png',
                height: 673.04,
            }
        ],
        uiImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/coin-ui.png',
                height: 673.04,
            }
        ]
    },
    {
        id: 'nft',
        title: 'NFT Detail',
        wfImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/nft.png',
                height: 294.6,
            }
        ],
        uiImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/nft-ui.png',
                height: 294.6,
            }
        ]
    },
    {
        id: 'create',
        title: 'Create NFT',
        wfImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/create.png',
                height: 436.76,
            }
        ],
        uiImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/create-ui.png',
                height: 436.76,
            }
        ]
    },
    {
        id: 'login',
        title: 'Login/Forgot Password',
        wfImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/login.1.png',
                height: 223.75,
            },
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/login.2.png',
                height: 223.75,
            }
        ],
        uiImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/login.1-ui.png',
                height: 223.75,
            },
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/login.2-ui.png',
                height: 223.75,
            }
        ]
    },
    {
        id: 'blogs',
        title: 'Blogs',
        wfImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/blogs.png',
                height: 613.37,
            }
        ],
        uiImgs: [
            {
                src: '/case-studies/waveb/wireframe/mobile/scroll/blogs-ui.png',
                height: 613.37,
            }
        ]
    },
]

function WireFrameDrawer({ selectId, open, onOpenChange }: WireFrameDrawerProps) {
    const initialSlideIndex = SLIDES.findIndex(slide => slide.id === selectId);
    const [selectedTab, setSelectedTab] = useState('wf');
    const [currentIndex, setCurrentIndex] = useState(initialSlideIndex);

    const onClick = (value: string) => {
        setSelectedTab(value);
    }

    const displayImgs = useMemo(() => {
        if (selectedTab === 'wf') {
            return SLIDES[currentIndex]?.wfImgs || []
        } else {
            return SLIDES[currentIndex]?.uiImgs || []
        }
    }, [currentIndex, selectedTab])

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : SLIDES.length - 1));
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < SLIDES.length - 1 ? prevIndex + 1 : 0));
    }

    return (
        <Drawer
            open={open}
            onOpenChange={onOpenChange}
        >
            <DrawerContent
                className="p-0 w-full h-[80vh] bg-background overflow-hidden"
            >
                <ScrollArea className="h-ful p-4">
                    <div className="relative">
                        <div className="flex justify-between items-center">
                            <div className="text-primary text-base font-bold">
                                {SLIDES[currentIndex]?.title}
                            </div>

                            <div className="bg-4b  rounded-full flex items-center h-[31px] w-[112px] text-xs p-1">
                                <button
                                    type="button"
                                    onClick={() => onClick('wf')}
                                    className={cn("text-white rounded-full w-[52px] h-[23px]", selectedTab === 'wf' && 'bg-gradient-to-tr from-secondary to-primary text-background')}
                                >
                                    WF
                                </button>
                                <button
                                    type="button"
                                    onClick={() => onClick('ui')}
                                    className={cn("text-white rounded-full w-[52px] h-[23px]", selectedTab === 'ui' && 'bg-gradient-to-tr from-secondary to-primary text-background')}
                                >
                                    UI
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4 mt-4">
                            {displayImgs.map((img, index) => (
                                <div
                                    key={index}
                                    className="relative w-full rounded-lg overflow-hidden"
                                    style={{
                                        height: img.height
                                    }}
                                >
                                    <QualityImage
                                        fill
                                        src={img.src}
                                        alt={img.src}
                                        quality={100}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-x-2 z-10 rounded-full justify-between backdrop-blur-sm bg-white/30 text-white">
                            <button
                                type="button"
                                onClick={handlePrev}
                            >
                                <ChevronLeft className="px-1" />
                            </button>
                            <span>
                                {`${currentIndex + 1}/${SLIDES.length}`}
                            </span>
                            <button
                                type="button"
                                onClick={handleNext}
                            >
                                <ChevronRight className="px-1" />
                            </button>
                        </div>
                    </div>
                </ScrollArea>
            </DrawerContent >
        </Drawer >
    );
}

export default WireFrameDrawer;