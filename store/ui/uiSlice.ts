import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isSideNavOpen: boolean;
  isProfileMenuOpen: boolean;
  isLanguageMenuOpen: boolean;
  showSearchList: boolean;
}

const initialState: UIState = {
  isSideNavOpen: false,
  isProfileMenuOpen: false,
  isLanguageMenuOpen: false,
  showSearchList: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSideNav(state) {
      state.isSideNavOpen = !state.isSideNavOpen;
    },
    openProfileMenu(state) {
      state.isProfileMenuOpen = true;
      state.isLanguageMenuOpen = false;
    },
    closeProfileMenu(state) {
      state.isProfileMenuOpen = false;
    },
    openLanguageMenu(state) {
      state.isLanguageMenuOpen = true;
      state.isProfileMenuOpen = false;
    },
    closeLanguageMenu(state) {
      state.isLanguageMenuOpen = false;
    },
    closeAllMenus(state) {
      state.isProfileMenuOpen = false;
      state.isLanguageMenuOpen = false;
    },
    setShowSearchList(state, action: PayloadAction<boolean>) {
      state.showSearchList = action.payload;
    },
  },
});

export const {
  toggleSideNav,
  openProfileMenu,
  closeProfileMenu,
  openLanguageMenu,
  closeLanguageMenu,
  closeAllMenus,
  setShowSearchList,
} = uiSlice.actions;

export default uiSlice.reducer;
