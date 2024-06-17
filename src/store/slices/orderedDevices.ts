import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { formatDate } from "@/shared/utils/formatDate";
import { OrderStatus } from "@/shared/types";
import { getDateInFuture, getRandomStatus } from "../utils";

export type OrderedDevice = {
  id: number;
  title: string;
  image: string;
  subscriptionPrice: number;
  orderedAt: Date;
  quanity: number;
  status: OrderStatus;
  deliveryDate: Date;
};

const orderedDevicesSlice = createSlice({
  name: "orderedDevices",
  initialState: {
    devices: [] as OrderedDevice[],
  },
  reducers: {
    addOrderedDevice: (
      state,
      action: PayloadAction<
        Omit<OrderedDevice, "quanity" | "status" | "deliveryDate">
      >,
    ) => {
      const newDevice = action.payload;

      const existingDevice = state.devices.find((device) => {
        if (
          device.title === newDevice.title &&
          formatDate(device.orderedAt, ".") ===
            formatDate(newDevice.orderedAt, ".")
        ) {
          return true;
        }

        return false;
      });

      if (existingDevice) {
        existingDevice.quanity += 1;
        return;
      }

      const randomStatus = getRandomStatus();
      const deliveryDate = getDateInFuture(3);

      state.devices.push({
        ...newDevice,
        quanity: 1,
        status: randomStatus,
        deliveryDate,
      });
    },
  },
});

export const { addOrderedDevice } = orderedDevicesSlice.actions;
export const { reducer: devicesReducer, reducerPath: devicesReducerPath } =
  orderedDevicesSlice;

export const selectDevices = (state: RootState) => state.orderedDevices.devices;
export const selectFirstDevice = (state: RootState) => selectDevices(state)[0];
export const selectFirstTwoDevices = (state: RootState) =>
  selectDevices(state).slice(0, 2);
