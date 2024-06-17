import { useMemo } from "react";
import { sortObjects } from "../utils";
import { Sort } from "../types";

type UseSortedDevicesProps<T extends object> = {
  devices: T[];
  sort: Sort<T>;
};

export const useSortedObjects = <T extends object>({
  devices,
  sort,
}: UseSortedDevicesProps<T>) => {
  const sortedDevices = useMemo(
    () => sortObjects({ data: devices, sort }),
    [devices, sort],
  );

  return sortedDevices;
};
