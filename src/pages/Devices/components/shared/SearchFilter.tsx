import { SearchIcon } from "@/icons";
import { Input } from "@/shared/components";
import { useDebounce } from "@/shared/hooks";
import { useAppDispatch } from "@/store";
import { useEffect, useState } from "react";
import { setSearch as setSearchAction } from "@/store/slices/devices";

const SearchFilter = () => {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    dispatch(setSearchAction(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  return (
    <div className="flex items-center justify-between bg-background pr-[15px] shadow-shadow-1">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a device"
      />
      <SearchIcon />
    </div>
  );
};

export default SearchFilter;
