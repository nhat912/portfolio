import AdminTitle from '@/src/app/(pages)/dakoli/components/admin/admin-title'
import QualityImage from '@/src/components/qualityImage'

export default function FourthSlide() {
    return (
        <div className='flex gap-x-10 justify-between w-[1040px] shrink-0'>
            <div className="w-1/2 h-[620px] relative">
                <QualityImage
                    fill
                    src="/dakoli/admin-4.png"
                    alt="Admin"
                    className="object-cover"
                />
            </div>
            <div className="w-1/2 flex flex-col justify-between">
                <div className="">
                    <AdminTitle />
                    <div className="mt-8 space-y-3">
                        <p className='leading-tight'>
                            Dakoli regularly runs campaigns to promote social contributions. Consumers will not contribute directly but make small donations by purchasing products included in the campaign. Similarly, suppliers can choose to donate a portion of their profits from these products to support such campaigns.
                        </p>
                        <p className='leading-tight'>
                            For each campaign, I added a label showing the event&apos;s start and end times, creating a small, easy-to-see note. The donation amounts and number of donors are clearly recorded and published in the campaign section to ensure transparency.
                        </p>
                    </div>
                </div>
                <div className="">
                    Category management
                </div>
            </div>
        </div>
    )
}
