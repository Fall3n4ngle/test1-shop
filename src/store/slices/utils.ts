import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Sort } from "@/shared/types";
import { sortObjects } from "@/shared/utils";

type Props<D> = {
  selectData: (state: RootState) => D[];
  selectSort: (state: RootState) => Sort<D>;
};

export const selectSortedData = <D extends object>({
  selectData,
  selectSort,
}: Props<D>) => {
  return createSelector([selectData, selectSort], (data, sort) => {
    return sortObjects<D>({
      sort,
      data,
    });
  });
};
