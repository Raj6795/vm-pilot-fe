"use client";

import ButtonGroup from "@/components/layout/ButtonGroup";
import SearchResultsComponent from "@/app/components/search results/SearchResultsComponent";
import { useAppSelector } from "@/store/hooks";

export default function vendorOnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const showSearchResults = useAppSelector((state) => state.ui.showSearchList);
  return (
    <div className="min-h-screen w-full flex flex-1 flex-col items-center justify-start bg-white p-6 pt-3">
      <div className="main-content-header w-full flex justify-between">
        <div className="main-content-header-left flex flex-15 justify-start items-center gap-[18px]">
          <h2 className="main-content-header text-[22px] font-semibold">
            Supplier Management App
          </h2>
          <img
            src="/svg/refresh_icon.svg"
            alt="refresh-btn"
            className="h-[16.66px] w-[16.66px]"
          />
          <p className="text-[12px] text-[#79747E] font-bold">
            Last Updated 10:301am - 08/02/25
          </p>
        </div>
        <div className="main-content-header-right flex flex-1 justify-end items-center gap-[11px] border-l-2 border-[#D9D9D9] mr-1">
          <img src="/svg/minimise_icon.svg" alt="minimise icon" />
          <img src="/svg/collapse_icon.svg" alt="minimise icon" />
          <img src="/svg/close_icon.svg" alt="minimise icon" />
        </div>
      </div>
      <div className="w-full flex justify-left flex-col bg-[#FAFAFA] mt-3 border-2 border-[#D9D9D9] rounded-[10px] p-[40px]">
        <h3 className="text-[#002242] mb-[28px] text-[24px] font-semibold">
          Input Supplier details below and choose action
        </h3>
        <div className="w-full bg-[#FFFFFF] rounded-[9px] p-[40px] border-2 border-[#D9D9D9] shadow-[0px_3px_8px_#0000001F]">
          {children}
        </div>
        {showSearchResults && <SearchResultsComponent />}
      </div>
      {!showSearchResults && <ButtonGroup />}
    </div>
  );
}
