import DesktopWireFrame from '@/src/app/(pages)/case-studies/wave-b/components/wireframe/desktop';
import MobileWireFrame from '@/src/app/(pages)/case-studies/wave-b/components/wireframe/mobile';
import { isMobileDevice } from '@/src/helpers/isMobileDevice';



export default async function WireFrameSection() {
	const isMobile = await isMobileDevice()

	if (isMobile) {
		return <MobileWireFrame />
	}

	return (
		<DesktopWireFrame />
	);
}
