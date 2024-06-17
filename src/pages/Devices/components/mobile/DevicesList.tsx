import { devicesList } from "../../const/deviceList";
import { useDevices, useFilters } from "../../hooks";
import DeviceDialog from "./DeviceDialog";
import DeviceFilters from "./DevicesFilters";

const DevicesList = () => {
  const { filters, debouncedSearch, setFilters } = useFilters();

  const sortedAndSearchedDevices = useDevices({
    initialDevices: devicesList,
    search: debouncedSearch,
    sort: filters.sort,
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
