"use client";

import SuffixAddressCard from "@/components/forms/create-form/SuffixAddressCard";
import SuffixContactCard from "@/components/forms/create-form/SuffixContactCard";
import SuffixDetailsCard from "@/components/forms/create-form/SuffixDetailsCard";
import SuffixNotesCard from "@/components/forms/create-form/SuffixNotesCard";
import SupplierAddressesCard from "@/components/forms/create-form/SupplierAddressesCard";
import SupplierDetailsCard from "@/components/forms/create-form/SupplierDetailsCard";

export default function CreateVendor() {
  return (
    <div className="w-full px-4 py-6 text-[#1E1E1E] flex flex-col items-start gap-6">
      <SupplierDetailsCard />
      <SupplierAddressesCard />
      <div className="w-full px-4 py-6 flex flex-col items-start gap-6 bg-[#EFEFEF]">
        <SuffixDetailsCard />
        <SuffixNotesCard />
        <SuffixAddressCard />
        <SuffixContactCard />
      </div>
    </div>
  );
}
