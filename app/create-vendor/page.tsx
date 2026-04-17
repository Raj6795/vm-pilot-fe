"use client";

import SupplierAddressesCard from "@/components/forms/create-form/SupplierAddressesCard";
import SupplierDetailsCard from "@/components/forms/create-form/SupplierDetailsCard";

export default function CreateVendor() {
  return (
    <div className="w-full px-4 py-6 text-black flex flex-col items-start gap-6">
      <SupplierDetailsCard />
      <SupplierAddressesCard />
    </div>
  );
}
