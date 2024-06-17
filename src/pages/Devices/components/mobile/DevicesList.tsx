import { useState } from "react";
import { devicesList } from "../../const/deviceList";
import { useDevices } from "../../hooks";
import DeviceDialog from "./DeviceDialog";
import DeviceFilters from "./DevicesFilters";
import { useDebounce } from "@/shared/hooks";

const DevicesList = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const sortedAndSearchedDevices = useDevices({
    devices: devicesList,
    search: debouncedSearch,
  });

  return (
    <>
      <div className="mb-[1.25rem]">
        <DeviceFilters search={search} setSearch={setSearch} />
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
