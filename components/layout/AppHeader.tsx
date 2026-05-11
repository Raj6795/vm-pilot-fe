"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  toggleSideNav,
  openProfileMenu,
  // openLanguageMenu,
  closeAllMenus,
} from "@/store/ui/uiSlice";
import ProfileMenu from "./ProfileMenu";
import { DropdownDownVectorIcon } from "../icons/DropdownDownVectorIcon";
import { GlobeVectorIcon } from "../icons/GlobeVectorIcon";
import { BurgerMenuVectorIcon } from "../icons/BurgerMenuVectorIcon";
// import LanguageMenu from "./LanguageMenu";

export default function AppHeader() {
  const dispatch = useDispatch();
  const {
    isProfileMenuOpen,
    // isLanguageMenuOpen
  } = useSelector((state: RootState) => state.ui);

  return (
    <header className="app-header" onClick={() => dispatch(closeAllMenus())}>
      <div className="flex items-center">
        <button
          className=""
          aria-label="Toggle navigation"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleSideNav());
          }}
        >
          <BurgerMenuVectorIcon />
        </button>

        <div className="logo">
          <img
            src="/img/logo_CW.png"
            alt="Logo"
            className="h-[36px] w-auto pr-2"
          />
        </div>
        <span className="portal-name border-l-2 border-[#005DAB] pl-2 text-[18.85px] font-semibold text-[#005DAB]">
          Replatform ERP
        </span>
      </div>

      <div className="flex w-[25%] justify-end items-center gap-2 pr-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(openProfileMenu());
          }}
          className="w-[162px] flex flex-2 justify-center items-center text-[16px] text-[#005DAB] px-2"
        >
          Welcome, John Doe
          <span className="pl-2">
            <DropdownDownVectorIcon />
          </span>
        </button>

        <span className="region flex justify-center items-center flex-2 text-[#64686C]">
          Warehouse 101
          <span className="pl-1">
            <GlobeVectorIcon />
          </span>
        </span>

        {/* <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(openLanguageMenu());
          }}
          className="flex-1 flex justify-center items-center text-[16px] text-[#005DAB]"
        >
          English
          <span className="pl-2">
            <svg viewBox="0 0 24 24" width="18px" height="18px">
              <path
                d="M6 10l6 6 6-6"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
          </span>
        </button> */}

        {isProfileMenuOpen && <ProfileMenu />}
        {/* {isLanguageMenuOpen && <LanguageMenu />} */}
      </div>
    </header>
  );
}
