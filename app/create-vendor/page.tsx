"use client";

import Button from "@/components/ui/Button";
import CollapsibleCard from "@/components/ui/CollapsibleCard";
import Select from "@/components/ui/Select";

export default function CreateVendor() {
  return (
    <div className="w-full px-4 py-6 text-black flex flex-col items-start">
      <CollapsibleCard title="Supplier Details">
        <div className="flex flex-col gap-4">
          <div className="flex gap-[17px]">
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-[#5A5A5A] text-base">
                Supplier Name (Possible Auto-Update)
              </p>
              <p className="text-[#1E1E1E] text-base font-semibold px-4 py-3 border-2 border-[#383838] rounded-[2px]">
                Good Foods INC
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-[#767676] text-base">Legacy Name</p>
              <p className="text-[#909090] text-base font-semibold px-[6px] py-3">
                Good Foods INC
              </p>
            </div>
          </div>
          <div className="flex justify-start gap-10 pr-[225px]">
            <div className="flex flex-col flex-1">
              <p className="text-[#767676]">Supplier #</p>
              <p className="text-[#1E1E1E] pl-2 py-2 font-semibold">1234</p>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-[#767676]">SAP</p>
              <p className="text-[#1E1E1E] pl-2 py-2 font-semibold">NA</p>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-[#767676]">AP</p>
              <p className="text-[#1E1E1E] pl-2 py-2 font-semibold">NA</p>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-[#767676]">Company</p>
              <p className="text-[#1E1E1E] pl-2 py-2 font-semibold">USA</p>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-[#5A5A5A] font-semibold">Payment Currency</p>
              <Select>
                <option value="">Select Currency</option>
                <option value="INR">INR</option>
                <option value="USD">USD</option>
              </Select>
            </div>
          </div>
          <div className="flex justify-end">
            <Button className="px-8 py-2 border-2 border-[#757575] bg-white text-[#303030]!">
              Copy details from existing supplier
            </Button>
          </div>
        </div>
      </CollapsibleCard>
    </div>
  );
}
