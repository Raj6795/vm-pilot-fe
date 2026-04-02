"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="bg-white p-6 rounded-lg shadow w-full max-w-sm">
        <h1 className="text-xl font-semibold mb-6 text-center text-gray-600">
          Choose an action
        </h1>

        <div className="space-y-4">
          <Button
            onClick={() => router.push("/vendor-management/create-vendor")}
            variant="primary"
          >
            Create Vendor
          </Button>

          <Button
            onClick={() => router.push("/vendor-management/edit-vendor")}
            variant="primary"
          >
            Edit Vendor
          </Button>

          <Button
            onClick={() => router.push("/vendor-management/search-vendor")}
            variant="primary"
          >
            Search Vendor
          </Button>
        </div>
      </div>
    </main>
  );
}
