type SortOrder = "asc" | "desc";

type Sort<T> = {
  sortKey: keyof T;
  sortOrder: SortOrder;
};

type Props<T extends object> = {
  data: T[];
  sort: Sort<T>;
};

export const sortObjects = <T extends object>({ data, sort }: Props<T>) => {
  const { sortKey, sortOrder } = sort;
  const copy = [...data];

  copy.sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];

    if (aValue < bValue) {
      return sortOrder === "asc" ? -1 : 1;
    }

    if (aValue > bValue) {
      return sortOrder === "asc" ? 1 : -1;
    }

    return 0;
  });

  return copy;
};