"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  toggleSideNav,
  openProfileMenu,
  openLanguageMenu,
  closeAllMenus,
} from "@/store/ui/uiSlice";
import ProfileMenu from "./ProfileMenu";
import LanguageMenu from "./LanguageMenu";

export default function AppHeader() {
  const dispatch = useDispatch();
  const { isProfileMenuOpen, isLanguageMenuOpen } = useSelector(
    (state: RootState) => state.ui,
  );

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
          <svg
            viewBox="0 0 100 100"
            width="70px"
            height="60px"
            // preserveAspectRatio="none"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="30"
              y="40"
              width="40"
              height="5"
              rx="3"
              fill="currentColor"
            />
            <rect
              x="30"
              y="50"
              width="40"
              height="5"
              rx="3"
              fill="currentColor"
            />
            <rect
              x="30"
              y="60"
              width="40"
              height="5"
              rx="3"
              fill="currentColor"
            />
          </svg>
        </button>

        <div className="logo">
          <img src="/img/logo_CW.png" alt="Logo" className="h-8 w-auto" />
        </div>
        <span className="portal-name">Vendor Management Portal</span>
      </div>

      <div className="header-right">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(openProfileMenu());
          }}
        >
          John Doe ▾
        </button>

        <span className="region">🌍 Global</span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(openLanguageMenu());
          }}
        >
          EN ▾
        </button>

        {isProfileMenuOpen && <ProfileMenu />}
        {isLanguageMenuOpen && <LanguageMenu />}
      </div>
    </header>
  );
}
