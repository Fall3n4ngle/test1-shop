import { SelectSort } from "@/shared/components";
import { SortOrder } from "@/shared/types";
import {
  OrderedDevice,
  setSortOD,
  useAppDispatch,
  useAppSelector,
} from "@/store";

const SortFilter = () => {
  const sort = useAppSelector((state) => state.orderedDevices.sort);
  const dispatch = useAppDispatch();

  const handleSortValueChange = (value: string) => {
    const [sortKey, sortOrder] = value.split(".");

    dispatch(
      setSortOD({
        sortKey: sortKey as keyof OrderedDevice,
        sortOrder: sortOrder as SortOrder,
      }),
    );
  };

  return (
    <SelectSort
      value={`${sort.sortKey}.${sort.sortOrder}`}
      onValueChange={handleSortValueChange}
    />
  );
};

export default SortFilter;
