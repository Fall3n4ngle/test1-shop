import { useSortedDevices } from "@/shared/hooks/useSortedDevices";
import { Device } from "@/shared/types/Device";
import { SortValue } from "@/shared/types/SortValue";
import { useMemo } from "react";

type UseDevicesProps = {
  initialDevices: Device[];
  search: string;
  sortBy: SortValue;
};

export const useDevices = ({
  initialDevices,
  search,
  sortBy,
}: UseDevicesProps) => {
  const sortedDevices = useSortedDevices({ devices: initialDevices, sortBy });

  const sortedAndSearchedDevices = useMemo(
    () =>
      sortedDevices.filter((device) => {
        return device.title.toLowerCase().includes(search.toLowerCase());
      }),
    [sortedDevices, search],
  );

  return sortedAndSearchedDevices;
};
