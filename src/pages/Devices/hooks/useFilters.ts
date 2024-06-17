import { useState } from "react";
import { useDebounce } from "@/shared/hooks";
import { Filters } from "../types/Filters";

export const useFilters = () => {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    sort: {
      sortKey: "title",
      sortOrder: "asc",
    },
  });

  const debouncedSearch = useDebounce(filters.search, 500);

  return {
    filters,
    debouncedSearch,
    setFilters,
  };
};
