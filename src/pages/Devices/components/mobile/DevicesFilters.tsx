import { SearchIcon } from "@/icons";
import { Input, SelectSort } from "@/shared/components";
import { SortOrder } from "@/shared/types";
import {
  selectSort,
  setSortKey,
  useAppDispatch,
  useAppSelector,
} from "@/store";
import { Dispatch, SetStateAction } from "react";

type Props = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const DevicesFilters = ({ search, setSearch }: Props) => {
  const dispatch = useAppDispatch();
  const sort = useAppSelector(selectSort);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSortChange = (value: string) => {
    const [sortKey, sortOrder] = value.split(".");
    dispatch(setSortKey({ sortKey, sortOrder: sortOrder as SortOrder }));
  };

  return (
    <>
      <div className="mb-3 flex items-center justify-between bg-background pr-[15px] shadow-shadow-1">
        <Input
          value={search}
          onChange={handleSearchChange}
          placeholder="Search for a device"
        />
        <SearchIcon />
      </div>
      <SelectSort
        value={`${sort.sortKey}.${sort.sortOrder}`}
        onValueChange={handleSortChange}
      />
    </>
  );
};

export default DevicesFilters;
