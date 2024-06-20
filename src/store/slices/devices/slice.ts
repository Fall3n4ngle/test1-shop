import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { intialDevices } from "./const";
import { Device } from "./types";
import { Sort } from "@/shared/types";

interface State {
  data: Device[];
  sort: Sort<Device>;
  search: string;
}

const initialState: State = {
  data: intialDevices,
  sort: {
    sortKey: "title",
    sortOrder: "asc",
  },
  search: "",
};

const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    setSortD: (state, action: PayloadAction<Sort<Device>>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { reducer: devicesReducer, reducerPath: devicesReducerPath } =
  devicesSlice;

export const { setSortD, setSearch } = devicesSlice.actions;
