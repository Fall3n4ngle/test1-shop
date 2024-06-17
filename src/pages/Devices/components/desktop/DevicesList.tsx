import { SearchIcon } from "@/icons";
import { Input } from "@/shared/components";
import { useDebounce } from "@/shared/hooks";
import { selectSortedDevices, useAppSelector } from "@/store";
import { useState } from "react";
import { useDevices } from "../../hooks";
import DevicesTable from "./DevicesTable";

const DevicesList = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const sortedDevices = useAppSelector(selectSortedDevices);

  const sortedAndSearchedDevices = useDevices({
    devices: sortedDevices,
    search: debouncedSearch,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="mb-6 flex items-center justify-between bg-background pr-[15px] shadow-shadow-1">
        <Input
          placeholder="Search for a device"
          value={search}
          onChange={handleSearchChange}
        />
        <SearchIcon />
      </div>
      <DevicesTable devices={sortedAndSearchedDevices} />
    </>
  );
};

export default DevicesList;
