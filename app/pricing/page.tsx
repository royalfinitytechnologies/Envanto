import { Suspense } from "react";
import PricingClient from "./PricingClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PricingClient />
    </Suspense>
  );
}