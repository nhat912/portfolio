import AdminTitle from '@/src/app/(pages)/dakoli/components/admin/admin-title'
import Image from 'next/image'

export default function SecondSlide() {
    return (
        <div className='flex gap-x-10 justify-between w-[1040px] shrink-0'>
            <div className="w-1/2 h-[620px] relative">
                <Image
                    fill
                    src="/dakoli/admin-2.png"
                    alt="Admin"
                    className="object-cover"
                />
            </div>
            <div className="w-1/2 flex flex-col justify-between">
                <div className="">
                    <AdminTitle />
                    <div className="mt-8 space-y-3">
                        <p className='leading-tight'>
                            This is a tiered product management tool. The admin needs to assign each product to relevant categories, starting with four test categories. When a seller wants to list a product for sale, they must select the appropriate categories from the admin-created list, it will make it easier for buyers to find the products they need.
                        </p>
                        <p className='leading-tight'>
                            My idea is to organize categories from large to small, displayed from left to right. When a level 1 category is selected, the corresponding level 2 category will appear, and so on for the subsequent levels. Admins can edit or delete categories by clicking the edit icon next to each one. However, I don&apos;t allow users to bulk deletion, as it could significantly impact the platform&apos;s product categories.
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
