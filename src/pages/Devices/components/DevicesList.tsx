import { useDebounce } from "@/shared/hooks/useDebounce";
import { useState } from "react";
import { devicesList } from "../const/deviceList";
import { useDevices } from "../hooks/useDevices";
import DeviceFilters from "./DevicesFilters";
import DeviceDialog from "./DeviceDialog";
import { Filters } from "../types/filters";
import { sortOptions } from "@/shared/const/sortOptions";

const DevicesList = () => {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    sortBy: sortOptions[0].value,
  });

  const debouncedSearch = useDebounce(filters.search, 500);

  const sortedAndSearchedDevices = useDevices({
    initialDevices: devicesList,
    search: debouncedSearch,
    sortBy: filters.sortBy,
  });

  return (
    <>
      <div className="mb-[1.25rem]">
        <DeviceFilters filters={filters} setFilters={setFilters} />
      </div>
      <div className="flex flex-col gap-2.5">
        {sortedAndSearchedDevices.map((device) => (
          <DeviceDialog key={device.id} {...device} />
        ))}
      </div>
    </>
  );
};

export default DevicesList;
