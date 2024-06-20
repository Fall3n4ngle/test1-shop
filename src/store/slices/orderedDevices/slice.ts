import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderedDevice } from "./types";
import { Sort } from "@/shared/types";
import { formatDate } from "@/shared/utils";
import { getDateInFuture, getRandomStatus } from "./utils";

interface State {
  data: OrderedDevice[];
  sort: Sort<OrderedDevice>;
}

const initialState: State = {
  data: [],
  sort: {
    sortKey: "title",
    sortOrder: "asc",
  },
};

const orderedDevicesSlice = createSlice({
  name: "orderedDevices",
  initialState,
  reducers: {
    addOrderedDevice: (
      state,
      action: PayloadAction<
        Omit<OrderedDevice, "quanity" | "status" | "deliveryDate">
      >,
    ) => {
      const newDevice = action.payload;

      const existingDevice = state.data.find((device) => {
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

      state.data.push({
        ...newDevice,
        quanity: 1,
        status: randomStatus,
        deliveryDate,
      });
    },
    setSortOD: (state, action: PayloadAction<Sort<OrderedDevice>>) => {
      state.sort = action.payload;
    },
  },
});

export const { addOrderedDevice, setSortOD } = orderedDevicesSlice.actions;
export const {
  reducer: orderedDevicesReducer,
  reducerPath: orderedDevicesReducerPath,
} = orderedDevicesSlice;
