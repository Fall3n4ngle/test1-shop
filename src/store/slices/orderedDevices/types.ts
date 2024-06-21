import { Device } from "../devices/types";

export type OrderStatus = "Use" | "Return" | "Ordered" | "Delivered";

export interface OrderedDevice
  extends Omit<Device, "copayment" | "description"> {
  quanity: number;
  status: OrderStatus;
  deliveryDate: Date;
  orderedAt: Date;
}
