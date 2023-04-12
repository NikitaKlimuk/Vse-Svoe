import { createSlice } from "@reduxjs/toolkit";

export interface CatalogState {
  categories: object;
}

const initialState: CatalogState = {
  categories: [],
};

export const catalogSlice = createSlice({
  name: "catalogSlice",
  initialState,
  reducers: {
    getAllCategories(state, action) {},
  },
});

// Action creators are generated for each case reducer function
export const { getAllCategories } = catalogSlice.actions;

export default catalogSlice.reducer;
