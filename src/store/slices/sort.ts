import { SortOrder } from "@/shared/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    sortKey: "",
    sortOrder: "asc" as SortOrder,
  },
  reducers: {
    setSortKey(
      state,
      action: PayloadAction<{ sortKey: string; sortOrder: SortOrder }>,
    ) {
      state.sortKey = action.payload.sortKey;
      state.sortOrder = action.payload.sortOrder;
    },
  },
});

export const { reducer: sortReducer, reducerPath: sortReducerPath } = sortSlice;
export const { setSortKey } = sortSlice.actions;

export const selectSort = (state: RootState) => state.sort;
