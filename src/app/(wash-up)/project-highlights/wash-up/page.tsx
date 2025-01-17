import { WASHUP_FEATURES } from "@/src/utils";
import { redirect } from "next/navigation";

export default function Page() {
    return redirect(WASHUP_FEATURES[0].href)
}
