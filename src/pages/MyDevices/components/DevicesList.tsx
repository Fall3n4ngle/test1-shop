import { useAppSelector, selectDevices } from "@/store";
import DeviceCard from "./DeviceCard";
import { Sort } from "@/shared/components";
import { useState } from "react";
import { sortOptions } from "@/shared/const";
import { SortValue } from "@/shared/types";
import { useSortedDevices } from "@/shared/hooks";

const DevicesList = () => {
  const devices = useAppSelector(selectDevices);
  const [sortBy, setSortBy] = useState<SortValue>(sortOptions[0].value);

  const sortedDevices = useSortedDevices({
    devices,
    sortBy,
  });

  return (
    <>
      <div className="mb-6">
        <Sort value={sortBy} onValueChange={setSortBy} />
      </div>
      <div className="flex flex-col gap-3">
        {sortedDevices.map(({ id, ...device }) => (
          <DeviceCard key={id} {...device} />
        ))}
      </div>
    </>
  );
};

export default DevicesList;
