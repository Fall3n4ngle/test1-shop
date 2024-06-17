import { useState } from "react";
import { useDebounce } from "@/shared/hooks";

export const useFilters = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  return {
    search,
    debouncedSearch,
    setSearch,
  };
};
