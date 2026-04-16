"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the vendor management page on initial load
    router.push("/vendor-management");
  }, []);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow w-full max-w-sm">
      <a
        href="/vendor-management"
        className="font-bold text-white text-lg hover:underline"
      >
        Redirect to vendor-management
      </a>
    </div>
  );
}
