import AdminTitle from '@/src/app/(pages)/dakoli/components/admin/admin-title'
import Image from 'next/image'

export default function FirstSlide() {
    return (
        <div className='flex gap-x-10 justify-between w-[1040px] shrink-0'>
            <div className="w-1/2 h-[620px] relative">
                <Image
                    fill
                    src="/dakoli/admin-1.png"
                    alt="Admin"
                    className="object-cover"
                />
            </div>
            <div className="w-1/2 flex flex-col justify-between">
                <div className="">
                    <AdminTitle />
                    <div className="mt-8 space-y-3">
                        <p className='leading-tight'>
                            This is the homepage interface I designed based on the customer&apos;s request. At the top of the dashboard page (including the others), I will add a prominent title that corresponds to the tab the user selects from the menu. This will help users clearly understand their current location, enhancing their navigation experience.
                        </p>
                        <p className='leading-tight'>
                            Moreover, I have organized the data into separate blocks, each displaying a real-time index. Users can interact with these blocks to track fluctuations in more detail. The chart below will automatically update according to the selected data block, and as shown the line chart illustrates the total revenue over time.
                        </p>
                        <p className='leading-tight'>
                            The data on the chart will not be fully displayed to avoid clutter and hard to track. Instead, users can hover over a point on the line chart to view the corresponding data, and they can pin multiple points for comparison as needed.
                        </p>
                    </div>
                </div>
                <div className="">
                    Dashboard
                </div>
            </div>
        </div>
    )
}
