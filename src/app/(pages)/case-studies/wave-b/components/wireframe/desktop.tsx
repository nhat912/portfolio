import ImageItem from "@/src/app/(pages)/case-studies/wave-b/components/image-item";
import ChildSectionLayout from "@/src/components/childSectionLayout";
import QualityImage from "@/src/components/qualityImage";

interface imageItem {
    wfSrc: string;
    hoverWFSrc: string;
    uiSrc: string;
    hoverUISrc: string;
    className: string;
}

const LEFT_IMAGES: imageItem[] = [
    {
        wfSrc: '/case-studies/waveb/wireframe/desktop/WF1-1.1.png',
        hoverWFSrc: '/case-studies/waveb/wireframe/desktop/WF1-1.2.png',
        uiSrc: '/case-studies/waveb/wireframe/desktop/WF1-2.1.png',
        hoverUISrc: '/case-studies/waveb/wireframe/desktop/WF1-2.2.png',
        className: 'h-[1480px]'
    },
    {
        wfSrc: '/case-studies/waveb/wireframe/desktop/WF2-1.1.png',
        hoverWFSrc: '/case-studies/waveb/wireframe/desktop/WF2-1.2.png',
        uiSrc: '/case-studies/waveb/wireframe/desktop/WF2-2.1.png',
        hoverUISrc: '/case-studies/waveb/wireframe/desktop/WF2-2.2.png',
        className: 'h-[826px]'
    },
    {
        wfSrc: '/case-studies/waveb/wireframe/desktop/WF3-1.1.png',
        hoverWFSrc: '/case-studies/waveb/wireframe/desktop/WF3-1.2.png',
        uiSrc: '/case-studies/waveb/wireframe/desktop/WF3-2.1.png',
        hoverUISrc: '/case-studies/waveb/wireframe/desktop/WF3-2.2.png',
        className: 'h-[610px]'
    },
    {
        wfSrc: '/case-studies/waveb/wireframe/desktop/WF4-1.1.png',
        hoverWFSrc: '/case-studies/waveb/wireframe/desktop/WF4-1.2.png',
        uiSrc: '/case-studies/waveb/wireframe/desktop/WF4-2.1.png',
        hoverUISrc: '/case-studies/waveb/wireframe/desktop/WF4-2.2.png',
        className: 'h-[858px]'
    },
]

const RIGHT_IMAGES: imageItem[] = [
    {
        wfSrc: '/case-studies/waveb/wireframe/desktop/WF5-1.1.png',
        hoverWFSrc: '/case-studies/waveb/wireframe/desktop/WF5-1.2.png',
        uiSrc: '/case-studies/waveb/wireframe/desktop/WF5-2.1.png',
        hoverUISrc: '/case-studies/waveb/wireframe/desktop/WF5-2.2.png',
        className: 'h-[606px]'
    },
    {
        wfSrc: '/case-studies/waveb/wireframe/desktop/WF6-1.1.png',
        hoverWFSrc: '/case-studies/waveb/wireframe/desktop/WF6-1.2.png',
        uiSrc: '/case-studies/waveb/wireframe/desktop/WF6-2.1.png',
        hoverUISrc: '/case-studies/waveb/wireframe/desktop/WF6-2.2.png',
        className: 'h-[411px]'
    },
    {
        wfSrc: '/case-studies/waveb/wireframe/desktop/WF7-1.1.png',
        hoverWFSrc: '/case-studies/waveb/wireframe/desktop/WF7-1.2.png',
        uiSrc: '/case-studies/waveb/wireframe/desktop/WF7-2.1.png',
        hoverUISrc: '/case-studies/waveb/wireframe/desktop/WF7-2.2.png',
        className: 'h-[940px]'
    },
    {
        wfSrc: '/case-studies/waveb/wireframe/desktop/WF8-1.1.png',
        hoverWFSrc: '/case-studies/waveb/wireframe/desktop/WF8-1.2.png',
        uiSrc: '/case-studies/waveb/wireframe/desktop/WF8-2.1.png',
        hoverUISrc: '/case-studies/waveb/wireframe/desktop/WF8-2.2.png',
        className: 'h-[312px]'
    },
    {
        wfSrc: '/case-studies/waveb/wireframe/desktop/WF9-1.1.png',
        hoverWFSrc: '/case-studies/waveb/wireframe/desktop/WF9-1.2.png',
        uiSrc: '/case-studies/waveb/wireframe/desktop/WF9-2.1.png',
        hoverUISrc: '/case-studies/waveb/wireframe/desktop/WF9-2.2.png',
        className: 'h-[312px]'
    },
    {
        wfSrc: '/case-studies/waveb/wireframe/desktop/WF10-1.1.png',
        hoverWFSrc: '/case-studies/waveb/wireframe/desktop/WF10-1.2.png',
        uiSrc: '/case-studies/waveb/wireframe/desktop/WF10-2.1.png',
        hoverUISrc: '/case-studies/waveb/wireframe/desktop/WF10-2.2.png',
        className: 'h-[835px]'
    },
]

function DesktopWireFrame() {
    return (
        <>
            <ChildSectionLayout value="Wireframe/ Final UI" className="container">
                <div className="space-y-5">
                    <p>
                        Based on the sketched sitemap, we created wireframes for the
                        following pages in order: the homepage, NFT information
                        page, user information page, and blog. Given the limited
                        time, this sequence was chosen to prioritize our resources
                        on crafting an exceptional homepage. Additionally, we
                        believe that the homepage and NFT information page are the
                        most critical components of the project.
                    </p>
                    <p>
                        After finalizing the wireframe for all the pages, we began developing a design system, though it was more of a collection of component combinations that we anticipated needing during the UI development process. The final step was to create a complete UI based on the established layouts.
                    </p>
                    <p className="text-primary font-bold">
                        Hovering to the wireframe to see what will happen!
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-10 pb-10 border-b-2 border-pj">
                    <div className="space-y-10 col-span-1">
                        {LEFT_IMAGES.map(img => (
                            <ImageItem key={img.uiSrc} {...img} />
                        ))}
                    </div>
                    <div className="space-y-10 col-span-1">
                        {RIGHT_IMAGES.map(img => (
                            <ImageItem key={img.uiSrc} {...img} />
                        ))}
                    </div>
                </div>
                <div className="mt-10 space-y-5">
                    <p>
                        Initially, we planned to develop a mobile application version of WaveB for iOS. However, due to time and resource constraints, we opted to design a responsive version for iOS instead, as it is simpler and less time-consuming to complete.
                    </p>
                    <p>
                        For the mobile version, we designed UIs for all screens. However, to keep the case study concise, I will only showcase a few key screens. If you&apos;re interested in seeing other screens, feel free to let me know!
                    </p>
                </div>
            </ChildSectionLayout>
            <div className="flex items-center justify-center gap-10">
                <div className="w-[209px] h-[421px] relative">
                    <QualityImage
                        fill
                        alt="bogs"
                        src="/case-studies/waveb/wireframe/desktop/footer-1.png"
                        className=''
                    />
                </div>
                <div className="w-[247px] h-[499px] relative">
                    <QualityImage
                        fill
                        alt="bogs"
                        src="/case-studies/waveb/wireframe/desktop/footer-2.png"
                        className=''
                    />
                </div>
                <div className="w-[286px] h-[577px] relative">
                    <QualityImage
                        fill
                        alt="bogs"
                        src="/case-studies/waveb/wireframe/desktop/footer-3.png"
                        className=''
                    />
                </div>
                <div className="w-[247px] h-[499px] relative">
                    <QualityImage
                        fill
                        alt="bogs"
                        src="/case-studies/waveb/wireframe/desktop/footer-4.png"
                        className=''
                    />
                </div>
                <div className="w-[209px] h-[421px] relative">
                    <QualityImage
                        fill
                        alt="bogs"
                        src="/case-studies/waveb/wireframe/desktop/footer-5.png"
                        className=''
                    />
                </div>
            </div>
        </>
    );
}

export default DesktopWireFrame;