import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  appMode: false,
  openSearchBar: false,
  newsSlug: null,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setAppMode: (state) => {
      state.appMode = !state.appMode;
      localStorage.setItem("appMode", `${state.appMode}`);
    },
    setIsOpenSearch: (state) => {
      state.openSearchBar = !state.openSearchBar;
    },
    fillAppMode: (state) => {
      let mode = localStorage.getItem("appMode");

      state.appMode = mode === "true" ? true : false;
    },
    fillNewsSlug: (state, action: PayloadAction<any>) => {
      state.newsSlug = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAppMode, fillNewsSlug, fillAppMode, setIsOpenSearch } =
  homeSlice.actions;

export default homeSlice.reducer;
