import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  orderedDevicesReducer,
  orderedDevicesReducerPath,
} from "./slices/orderedDevices";
import { devicesReducer, devicesReducerPath } from "./slices/devices";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [devicesReducerPath]: devicesReducer,
    [orderedDevicesReducerPath]: orderedDevicesReducer,
  }),
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
