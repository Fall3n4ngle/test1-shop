import { useSortedObjects } from "@/shared/hooks";
import { Sort } from "@/shared/types";
import { Device } from "@/shared/types/Device";
import { useMemo } from "react";

type UseDevicesProps = {
  initialDevices: Device[];
  search: string;
  sort: Sort<Device>;
};

export const useDevices = ({
  initialDevices,
  search,
  sort,
}: UseDevicesProps) => {
  const sortedDevices = useSortedObjects({ devices: initialDevices, sort });

  const sortedAndSearchedDevices = useMemo(
    () =>
      sortedDevices.filter((device) => {
        return device.title.toLowerCase().includes(search.toLowerCase());
      }),
    [sortedDevices, search],
  );

  return sortedAndSearchedDevices;
};
