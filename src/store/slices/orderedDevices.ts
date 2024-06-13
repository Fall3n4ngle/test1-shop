import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { formatDate } from "@/shared/utils/formatDate";

export type OrderedDevice = {
  id: number;
  title: string;
  image: string;
  subsciptionPrice: number;
  orderedAt: Date;
  quanity: number;
};

const orderedDevicesSlice = createSlice({
  name: "orderedDevices",
  initialState: {
    devices: [] as OrderedDevice[],
  },
  reducers: {
    addOrderedDevice: (
      state,
      action: PayloadAction<Omit<OrderedDevice, "quanity">>,
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

      state.devices.push({ ...newDevice, quanity: 1 });
    },
  },
});

export const { addOrderedDevice } = orderedDevicesSlice.actions;
export const { reducer: devicesReducer, reducerPath: devicesReducerPath } =
  orderedDevicesSlice;

export const selectDevices = (state: RootState) => state.orderedDevices.devices;
export const selectFirstDevice = (state: RootState) => selectDevices(state)[0];