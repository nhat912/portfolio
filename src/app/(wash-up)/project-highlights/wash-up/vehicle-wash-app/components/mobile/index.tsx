import GeneralSection from "@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/components/commons/generalSection";
import IdentifyingUsersSection from "@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/components/commons/identifyingUsersSection";
import KeyFeaturesSection from "@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/components/commons/keyFeaturesSection";
import UIDesignSection from "@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/components/commons/uiDesignSection";
import UserFlowSection from "@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/components/commons/userFlowSection";
import UserJourneysSection from "@/src/app/(wash-up)/project-highlights/wash-up/vehicle-wash-app/components/commons/userJourneysSection";

function MobileVehicleWashApp() {
    return (
        <>
            <GeneralSection />
            <IdentifyingUsersSection />
            <KeyFeaturesSection />
            <UserJourneysSection imgSrc="/vehicle-wash-app/mobi-user-journeys.webp" />
            <UserFlowSection />
            <UIDesignSection />
        </>
    );
}

export default MobileVehicleWashApp;