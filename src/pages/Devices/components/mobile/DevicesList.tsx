import { selectSortedFilteredDevices, useAppSelector } from "@/store";
import { SearchFilter } from "../shared";
import DeviceDialog from "./DeviceDialog";
import SortFilter from "./SortFilter";

const DevicesList = () => {
  const sortedAndFilteredDevices = useAppSelector(selectSortedFilteredDevices);

  return (
    <>
      <div className="mb-[1.25rem] flex flex-col gap-3">
        <SearchFilter />
        <SortFilter />
      </div>
      <div className="flex flex-col gap-2.5">
        {sortedAndFilteredDevices.map((device) => (
          <DeviceDialog key={device.id} {...device} />
        ))}
      </div>
    </>
  );
};

export default DevicesList;
