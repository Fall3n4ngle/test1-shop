import { Device } from "@/store";

type Column = {
  key: keyof Device;
  label: string;
};

export const devicesTableColumns: Column[] = [
  {
    key: "title",
    label: "Product",
  },
  {
    key: "copayment",
    label: "Employee",
  },
  {
    key: "subscriptionPrice",
    label: "Price",
  },
];
