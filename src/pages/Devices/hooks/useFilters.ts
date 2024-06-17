import { useState } from "react";
import { Filters } from "../types/filters";
import { useDebounce } from "@/shared/hooks";

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
