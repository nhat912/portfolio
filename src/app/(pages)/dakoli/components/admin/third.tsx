'use client'

import AdminTitle from '@/src/app/(pages)/dakoli/components/admin/admin-title'
import QualityImage from '@/src/components/qualityImage'
import { cn } from '@/src/lib/utils'
import { useState } from 'react'

const LIST = [
    {
        title: 'Customer',
        img: '/dakoli/admin-3.1.png',
        content: (
            <>
                <p className='leading-tight'>
                    I recommend a symmetrical layout for tables like this to improve readability and ease of data comparison for admins. Icons will replace tasks to save space and minimize distractions while tracking data. Some less essential tasks will also be hidden in the action column for a cleaner view.
                </p>
                <p className='leading-tight'>
                    In addition to providing pagination for each page, admins can customize the number of rows displayed on the table. This ensures that the table&apos;s content is presented clearly and effectively, adapting to different device sizes.
                </p>
            </>
        ),
    },
    {
        title: 'Seller',
        img: '/dakoli/admin-3.2.png',
        content: (
            <>
                <p className='leading-tight'>
                    I noticed that this table includes several different statuses, but assigning each status its color seemed unnecessary. Instead, I grouped the statuses into three levels: red for high priority, yellow for medium, and green for normal. Additionally, the &quot;deactivated&quot; status, which requires less attention, is represented by grey.
                </p>
                <p className='leading-tight'>
                    Admins have responded positively to this simplified color scheme, finding it more effective than assigning each status its different color seemed.
                </p>
            </>
        ),
    },
    {
        title: 'Employee',
        img: '/dakoli/admin-3.3.png',
        content: (
            <>
                <p className='leading-tight'>
                    On the &quot;Employee Management&quot; page, there are only two statuses: active and deactivated. Instead of reusing the status labels from the previous table, I implemented a toggle switch to represent the status. This switch allows managers to directly grant permissions or quickly deactivate an employee.
                </p>
            </>
        ),
    },
]

export default function ThirdSlide() {
    const [current, setCurrent] = useState(0)

    return (
        <div className='flex gap-x-10 justify-between w-[1040px] shrink-0'>
            <div className="w-1/2 h-[620px] relative">
                {current === 0 &&
                    <QualityImage
                        fill
                        src="/dakoli/admin-3.1.png"
                        alt="Admin"
                        className="object-cover"
                    />
                }
                {current === 1 &&
                    <QualityImage
                        fill
                        src="/dakoli/admin-3.2.png"
                        alt="Admin"
                        className="object-cover"
                    />
                }
                {current === 2 &&
                    <QualityImage
                        fill
                        src="/dakoli/admin-3.3.png"
                        alt="Admin"
                        className="object-cover"
                    />
                }
            </div>
            <div className="w-1/2 flex flex-col justify-between">
                <div className="">
                    <AdminTitle />
                    <div className="mt-8 space-y-5">
                        <div className="flex gap-x-5 font-semibold">
                            {LIST.map((item, index) => (
                                <button
                                    type="button"
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={cn('font-sembold', index === current ? 'bg-gradient' : 'bg-transparent')}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>
                        <div className="space-y-3">
                            {LIST[current].content}
                        </div>
                    </div>
                </div>
                <div className="">
                    Category management
                </div>
            </div>
        </div>
    )
}
