export type SortOrder = "asc" | "desc";

export type Sort<T> = {
  sortKey: keyof T;
  sortOrder: SortOrder;
};
