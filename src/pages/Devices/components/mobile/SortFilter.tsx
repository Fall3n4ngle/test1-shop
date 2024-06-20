import { SelectSort } from "@/shared/components";
import { SortOrder } from "@/shared/types";
import { useAppDispatch, useAppSelector, setSortD, Device } from "@/store";

const SortFilter = () => {
  const dispatch = useAppDispatch();
  const sort = useAppSelector((state) => state.devices.sort);

  const handleSortChange = (value: string) => {
    const [sortKey, sortOrder] = value.split(".");

    dispatch(
      setSortD({
        sortKey: sortKey as keyof Device,
        sortOrder: sortOrder as SortOrder,
      }),
    );
  };

  return (
    <SelectSort
      value={`${sort.sortKey}.${sort.sortOrder}`}
      onValueChange={handleSortChange}
    />
  );
};

export default SortFilter;
