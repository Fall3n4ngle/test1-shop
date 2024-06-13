import { useMemo } from "react";
import { SortValue } from "@/shared/types";

type BaseDevice = {
  title: string;
  subsciptionPrice: number;
};

type UseSortedDevicesProps<T extends BaseDevice> = {
  devices: T[];
  sortBy: SortValue;
};

export const useSortedDevices = <T extends BaseDevice>({
  devices,
  sortBy,
}: UseSortedDevicesProps<T>) => {
  const sortedDevices = useMemo(
    () => sortDevices(devices, sortBy),
    [devices, sortBy],
  );

  return sortedDevices;
};

const sortDevices = <T extends BaseDevice>(devices: T[], sortBy: SortValue) => {
  const copy = [...devices];

  if (sortBy === "alphabetical.asc") {
    copy.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortBy === "alphabetical.desc") {
    copy.sort((a, b) => b.title.localeCompare(a.title));
  }

  if (sortBy === "price.asc") {
    copy.sort((a, b) => a.subsciptionPrice - b.subsciptionPrice);
  }

  if (sortBy === "price.desc") {
    copy.sort((a, b) => b.subsciptionPrice - a.subsciptionPrice);
  }

  return copy;
};
