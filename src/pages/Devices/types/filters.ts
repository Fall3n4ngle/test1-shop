import { Device, Sort } from "@/shared/types";

export type Filters = {
  search: string;
  sort: Sort<Device>;
};
