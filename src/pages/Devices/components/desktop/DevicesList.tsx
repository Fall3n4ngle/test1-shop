import { Input } from "@/shared/components";
import { devicesList } from "../../const/deviceList";
import { useDevices } from "../../hooks/useDevices";
import { useFilters } from "../../hooks/useFilters";
import DevicesTable from "./DevicesTable";
import { Filters } from "../../types/filters";
import { useCallback } from "react";
import { SearchIcon } from "@/icons";

const DevicesList = () => {
  const { filters, debouncedSearch, setFilters } = useFilters();

  const sortedAndSearchedDevices = useDevices({
    initialDevices: devicesList,
    search: debouncedSearch,
    sort: filters.sort,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }));
  };

  const handleSortChange = useCallback(
    (sort: Filters["sort"]) => {
      setFilters((prev) => ({
        ...prev,
        sort,
      }));
    },
    [setFilters],
  );

  return (
    <>
      <div className="mb-6 flex items-center justify-between bg-background pr-[15px] shadow-shadow-1">
        <Input
          placeholder="Search for a device"
          value={filters.search}
          onChange={handleSearchChange}
        />
        <SearchIcon />
      </div>
      <DevicesTable
        devices={sortedAndSearchedDevices}
        sort={filters.sort}
        onSortChange={handleSortChange}
      />
    </>
  );
};

export default DevicesList;
