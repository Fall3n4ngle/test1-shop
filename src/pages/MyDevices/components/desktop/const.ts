import { OrderedDevice } from "@/store";

type Column = {
  key: keyof OrderedDevice;
  label: string;
};

export const devicesTableColumns: Column[] = [
  {
    key: "title",
    label: "Device",
  },
  {
    key: "orderedAt",
    label: "Order Date",
  },
  {
    key: "deliveryDate",
    label: "Delivery Date",
  },
  {
    key: "status",
    label: "Status",
  },
];
