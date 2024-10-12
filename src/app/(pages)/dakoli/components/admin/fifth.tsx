import AdminTitle from '@/src/app/(pages)/dakoli/components/admin/admin-title'
import Image from 'next/image'

export default function FifthSlide() {
    return (
        <div className='flex gap-x-10 justify-between w-[1040px] shrink-0'>
            <div className="w-1/2 h-[620px] relative">
                <Image
                    fill
                    src="/dakoli/admin-5.png"
                    alt="Admin"
                    className="object-cover"
                />
            </div>
            <div className="w-1/2 flex flex-col justify-between">
                <div className="">
                    <AdminTitle />
                    <div className="mt-8 space-y-3">
                        <p className='leading-tight'>
                            The owner requires a feature to easily customize key sections of their website, such as the FAQ, banner, footer, logo, and more. To meet this need, I have developed a page that allows the owner to enter and edit information with ease. For example, the footer section on the left can be easily modified by typing text or adding a link or image. Other sections follow the same format as this example.
                        </p>
                    </div>
                </div>
                <div className="">
                    Donation
                </div>
            </div>
        </div>
    )
}
