import { useAppSelector } from "@/store";
import { selectSortedOrderedDevices } from "@/store/slices/orderedDevices";
import DeviceCard from "./DeviceCard";
import SortFilter from "./SortFilter";

const DevicesList = () => {
  const sortedOrderedDevices = useAppSelector(selectSortedOrderedDevices);

  return (
    <>
      <div className="mb-6">
        <SortFilter />
      </div>
      <div className="flex flex-col gap-3">
        {sortedOrderedDevices.map(({ id, ...device }) => (
          <DeviceCard key={id} {...device} />
        ))}
      </div>
    </>
  );
};

export default DevicesList;
