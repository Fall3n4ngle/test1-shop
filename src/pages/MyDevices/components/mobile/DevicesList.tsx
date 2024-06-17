import { useAppSelector, selectDevices } from "@/store";
import DeviceCard from "./DeviceCard";
import { useState } from "react";
import { useSortedObjects } from "@/shared/hooks";
import { Sort as SortType } from "@/shared/types";
import { OrderedDevice } from "@/store/slices/orderedDevices";
import { SelectSort } from "@/shared/components";
import { SortOrder } from "@/shared/types";

const DevicesList = () => {
  const devices = useAppSelector(selectDevices);
  const [sort, setSort] = useState<SortType<OrderedDevice>>({
    sortKey: "title",
    sortOrder: "asc",
  });

  const sortedDevices = useSortedObjects({
    devices,
    sort,
  });

  const handleSortValueChange = (value: string) => {
    const [sortKey, sortOrder] = value.split(".");

    setSort({
      sortKey: sortKey as keyof OrderedDevice,
      sortOrder: sortOrder as SortOrder,
    });
  };

  return (
    <>
      <div className="mb-6">
        <SelectSort
          value={`${sort.sortKey}.${sort.sortOrder}`}
          onValueChange={handleSortValueChange}
        />
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
