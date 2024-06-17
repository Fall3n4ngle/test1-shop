import { SelectSort } from "@/shared/components";
import { Input } from "@/shared/components/ui";
import { Device } from "@/shared/types";
import { SortOrder } from "@/shared/types/Sort";
import { Dispatch, SetStateAction } from "react";
import { Filters } from "../../types/filters";
import { SearchIcon } from "@/icons";

type Props = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
};

const DevicesFilters = ({ filters, setFilters }: Props) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }));
  };

  const handleSortChange = (value: string) => {
    const [sortKey, sortOrder] = value.split(".");

    setFilters((prev) => ({
      ...prev,
      sort: {
        sortKey: sortKey as keyof Device,
        sortOrder: sortOrder as SortOrder,
      },
    }));
  };

  return (
    <>
      <div className="mb-3 flex items-center justify-between bg-background pr-[15px] shadow-shadow-1">
        <Input
          value={filters.search}
          onChange={handleSearchChange}
          placeholder="Search for a device"
        />
        <SearchIcon />
      </div>
      <SelectSort
        value={`${filters.sort.sortKey}.${filters.sort.sortOrder}`}
        onValueChange={handleSortChange}
      />
    </>
  );
};

export default DevicesFilters;
