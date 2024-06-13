import searchIcon from "@/assets/search.svg";
import Sort from "@/shared/components/Sort";
import { Input } from "@/shared/components/ui";
import { SortValue } from "@/shared/types/SortValue";
import { Filters } from "../types/filters";

type Props = {
  filters: Filters;
  setFilters: (newFilters: Filters) => void;
};

const DevicesFilters = ({ filters, setFilters }: Props) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ search: e.target.value, sortBy: filters.sortBy });
  };

  const handleSortByChange = (value: SortValue) => {
    setFilters({ search: filters.search, sortBy: value });
  };

  return (
    <>
      <div className="mb-3 flex items-center justify-between bg-background pr-[15px] shadow-shadow-1">
        <Input
          value={filters.search}
          onChange={handleSearchChange}
          placeholder="Search for a device"
        />
        <img src={searchIcon} alt="search" />
      </div>
      <Sort value={filters.sortBy} onValueChange={handleSortByChange} />
    </>
  );
};

export default DevicesFilters;
