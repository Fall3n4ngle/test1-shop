import { RootState } from "@/store/store";
import { selectSortedData } from "../utils";

export const selectOrderedDevices = (state: RootState) =>
  state.orderedDevices.data;
const selectOrderedDevicesSort = (state: RootState) =>
  state.orderedDevices.sort;

export const selectSortedOrderedDevices = selectSortedData({
  selectData: selectOrderedDevices,
  selectSort: selectOrderedDevicesSort,
});

export const selectFirstDevice = (state: RootState) =>
  selectOrderedDevices(state)[0];
export const selectFirstTwoDevices = (state: RootState) =>
  selectOrderedDevices(state).slice(0, 2);
