import { WASHUP_FEATURES } from "@/src/lib/wash-up/constants";
import { redirect } from "next/navigation";

export default function Page() {
    return redirect(WASHUP_FEATURES[0].href)
}
