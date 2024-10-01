import ChildSectionLayout from "@/src/components/childSectionLayout";
import { isMobileDevice } from "@/src/helpers/isMobileDevice";
import Image from "next/image";
import { Fragment } from "react";

export default async function SomeUxPoints() {
    const isMobile = await isMobileDevice()

    const content = () => {
        if (isMobile) {
            return (
                <Fragment>
                    <div className="text-primary text-base font-bold">
                        Device information
                    </div>
                    <p>
                        For this feature, we aim to develop a device management solution to address issues such as device damage while the responsible person cannot be identified. To resolve this, technicians will be required to scan the QR code printed on the left side of the device each time it is used. This process will help record usage history to manage facilities.
                    </p>
                    <p>
                        At that time scanning QR codes was not required. Therefore, I was asked to add an option for technicians to manually turn the device on or off while still encouraging the use of the QR code.
                    </p>

                    <div className="relative w-full h-[300px]">
                        <Image
                            fill
                            src='/technician-order/device-info.png'
                            alt='Device information'
                        />
                    </div>

                    <p className="text-primary font-semibold">
                        Hence, my proposed design solution makes QR code scanning the default option. If a technician prefers to switch to manual control, they must open a pop-up and make a selection. This approach increases the number of steps required for manual control, thereby promoting the default QR code option.
                    </p>
                </Fragment>
            )
        }

        return (
            <div className="flex items-stretch justify-between gap-x-10">
                <div className="w-full h-[812px] relative">
                    <Image
                        fill
                        src='/technician-order/desk-device-info.png'
                        alt='Device information'
                        className="object-cover"
                    />
                </div>
                <div className="w-[625px] relative grow-0 shrink-0">
                    <Image
                        width={377}
                        height={812}
                        src='/technician-order/some-ux-points.png'
                        alt='Device information'
                        className="object-cover absolute left-1/2 -translate-x-1/2 z-0"
                    />
                    <div className="z-10 absolute">
                        <div className="text-primary text-base font-bold">
                            Device information
                        </div>
                        <div className="space-y-3 mt-4">
                            <p>
                                For this feature, we aim to develop a device management solution to address issues such as device damage while the responsible person cannot be identified. To resolve this, technicians will be required to scan the QR code printed on the left side of the device each time it is used. This process will help record usage history to manage facilities.
                            </p>
                            <p>
                                At that time scanning QR codes was not required. Therefore, I was asked to add an option for technicians to manually turn the device on or off while still encouraging the use of the QR code.
                            </p>
                        </div>
                        <p className="mt-4 text-primary font-semibold">
                            Hence, my proposed design solution makes QR code scanning the default option. If a technician prefers to switch to manual control, they must open a pop-up and make a selection. This approach increases the number of steps required for manual control, thereby promoting the default QR code option.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <ChildSectionLayout value="Some UX points" className="container">
            <div className="space-y-4 lg:space-y-8">
                <p>
                    At the start, we require technicians to briefly review the information displayed in the left UI. This screen will display information about the order, including the order code, device operations, customer details, and other relevant information.
                </p>

                {content()}

                <p className="text-primary font-semibold">
                    Moreover, to be able to accept orders, the technician must scroll to the bottom of the screen and click the &apos;Start&apos; button. This ensures that they review the information at least once.
                </p>
            </div>
        </ChildSectionLayout>
    )
}
