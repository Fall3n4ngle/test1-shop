import { RootState } from "@/store/store";
import { selectSortedData } from "../utils";
import { createSelector } from "@reduxjs/toolkit";

const selectDevices = (state: RootState) => state.devices.data;
const selectSort = (state: RootState) => state.devices.sort;
const selectSearch = (state: RootState) => state.devices.search;

const selectSortedDevices = selectSortedData({
  selectData: selectDevices,
  selectSort: selectSort,
});

export const selectSortedFilteredDevices = createSelector(
  [selectSortedDevices, selectSearch],
  (devices, search) => {
    if (!search) return devices;
    return devices.filter((device) =>
      device.title.toLowerCase().includes(search.toLowerCase())
    );
  }
)
