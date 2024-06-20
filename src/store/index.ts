export * from "./store";
export * from "./hooks";

export {
  addOrderedDevice,
  selectFirstDevice,
  selectSortedOrderedDevices,
  setSortOD,
  selectFirstTwoDevices,
} from "./slices/orderedDevices";

export {
  selectSortedFilteredDevices,
  setSearch,
  setSortD,
} from "./slices/devices";

export type { Device } from "./slices/devices";
export type { OrderedDevice, OrderStatus } from "./slices/orderedDevices";
