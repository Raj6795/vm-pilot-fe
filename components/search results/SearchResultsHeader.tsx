"use client";

import Button from "../ui/Button";
import { useAppDispatch } from "@/store/hooks";
import { setShowSearchList } from "@/store/slices/searchSlice";
import { useRouter } from "next/navigation";

export default function SearchResultsHeader() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-between">
      <h2 className="flex-1 text-[24px] font-semibold text-[#5A5A5A] font-weight-[500]">
        (50) Similar Records Found
      </h2>
      <div className="flex-1 flex items-center justify-center gap-6 pl-8">
        <Button
          variant="secondary"
          className=" flex-8 px-4 py-2 rounded"
          onClick={() => router.push("create-vendor")}
        >
          + Create New Supplier
        </Button>
        <Button className="flex-8 px-4 py-2 rounded">Re-run Search</Button>
        <Button
          variant="secondary"
          className="flex-1 px-4 py-2 rounded"
          onClick={() => dispatch(setShowSearchList(false))}
        >
          X
        </Button>
      </div>
    </div>
  );
}
