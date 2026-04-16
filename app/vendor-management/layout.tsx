"use client";

import ButtonGroup from "@/components/layout/ButtonGroup";
import SearchResultsComponent from "@/components/search results/SearchResultsComponent";
import { useAppSelector } from "@/store/hooks";

export default function vendorOnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const showSearchResults = useAppSelector(
    (state) => state.search.showSearchList,
  );
  return (
    <div className="min-h-screen flex flex-1 flex-col items-center justify-start bg-white p-6 pt-3">
      <div className="w-full flex justify-left flex-col mb-4">
        <h1 className="text-black text-[28px] font-semibold mb-4">
          Supplier Management
        </h1>
        <h3 className="text-gray-600 mb-4 text-[18px] font-semibold">
          Input supplier details below to action
        </h3>
        <div className="min-w-full max-w-lg bg-[#EFEFEF] rounded-lg p-6">
          {children}
        </div>
        {showSearchResults && <SearchResultsComponent />}
      </div>
      {!showSearchResults && <ButtonGroup />}
    </div>
  );
}
