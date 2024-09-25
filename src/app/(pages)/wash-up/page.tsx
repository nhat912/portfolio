import { WASHUP_FEATURES } from "@/src/components/washUpPageFooter";
import { redirect } from "next/navigation";

export default function page() {
    return redirect(WASHUP_FEATURES[0].href)
}
