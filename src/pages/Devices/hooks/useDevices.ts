import { Device } from "@/shared/types/Device";
import { useMemo } from "react";

type UseDevicesProps = {
  devices: Device[];
  search: string;
};

export const useDevices = ({ devices, search }: UseDevicesProps) => {
  const sortedAndSearchedDevices = useMemo(
    () =>
      devices.filter((device) => {
        return device.title.toLowerCase().includes(search.toLowerCase());
      }),
    [devices, search],
  );

  return sortedAndSearchedDevices;
};
