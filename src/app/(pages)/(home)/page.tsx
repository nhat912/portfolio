import DesktopHomePage from "@/src/app/(pages)/(home)/components/desktop/desktop-home-page";
import MobileHomePage from "@/src/app/(pages)/(home)/components/mobile/mobile-home-page";
import { isMobileDevice } from "@/src/helpers/isMobileDevice";

export default async function Page() {
  const isMobile = await isMobileDevice()

  if (isMobile) {
    return <MobileHomePage />
  }

  return (
    <DesktopHomePage />
  );
}
