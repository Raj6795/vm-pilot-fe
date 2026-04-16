import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchState = {
  showSearchList: boolean;
};

const initialState: SearchState = {
  showSearchList: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setShowSearchList(state, action: PayloadAction<boolean>) {
      state.showSearchList = action.payload;
    },
  },
});

export const { setShowSearchList } = searchSlice.actions;

export default searchSlice.reducer;
