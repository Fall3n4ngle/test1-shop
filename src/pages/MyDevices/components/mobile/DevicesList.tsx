import { SelectSort } from "@/shared/components";
import { SortOrder } from "@/shared/types";
import {
  selectSort,
  setSortKey,
  useAppDispatch,
  useAppSelector,
} from "@/store";
import { selectSortedOrderedDevices } from "@/store/slices/orderedDevices";
import DeviceCard from "./DeviceCard";

const DevicesList = () => {
  const sortedOrderedDevices = useAppSelector(selectSortedOrderedDevices);
  const sort = useAppSelector(selectSort);
  const dispatch = useAppDispatch();

  const handleSortValueChange = (value: string) => {
    const [sortKey, sortOrder] = value.split(".");
    dispatch(setSortKey({ sortKey, sortOrder: sortOrder as SortOrder }));
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
        {sortedOrderedDevices.map(({ id, ...device }) => (
          <DeviceCard key={id} {...device} />
        ))}
      </div>
    </>
  );
};

export default DevicesList;
