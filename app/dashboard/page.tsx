"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();

  // Lets keep the below code for authentication in future.
  // const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   const isAuth = sessionStorage.getItem("authenticated");

  //   if (!isAuth) {
  //     router.replace("/login");
  //   } else {
  //     setIsReady(true);
  //   }
  // }, []);

  // if (!isReady) {
  //   return <p>Loading...</p>;
  // }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow w-full max-w-sm">
        <h1 className="text-xl font-semibold mb-6 text-center">
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
            variant="secondary"
          >
            Edit Vendor
          </Button>
        </div>
      </div>
    </main>
  );
}
