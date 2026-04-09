"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function PricingClient() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch logic
  }, []);

  return (
    <div>
      Pricing Page
    </div>
  );
}