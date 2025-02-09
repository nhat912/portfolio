/* eslint-disable @typescript-eslint/no-unused-vars */
import GeneralSection from "@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/components/commons/generalSection";
import IdentifyingUsersSection from "@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/components/commons/identifyingUsersSection";
import KeyFeaturesSection from "@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/components/commons/keyFeaturesSection";
import UIDesignSection from "@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/components/commons/uiDesignSection";
import UserFlowSection from "@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/components/commons/userFlowSection";
import UserJourneysSection from "@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/components/commons/userJourneysSection";
import { vehicleWashAppMenu } from "@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/constants";
import ProjectLayout from "@/src/components/projectLayout";

interface DesktopVehicleWashAppProps {

}

function DesktopVehicleWashApp(props: DesktopVehicleWashAppProps) {
    return (
        <ProjectLayout
            menu={vehicleWashAppMenu}
        >
            <GeneralSection />
            <IdentifyingUsersSection />
            <KeyFeaturesSection />
            <UserJourneysSection imgSrc="/vehicle-wash-app/user-journeys.webp" />
            <UserFlowSection />
            <UIDesignSection />
        </ProjectLayout>
    );
}

export default DesktopVehicleWashApp;