import { OrderStatus } from "@/shared/types";

const statuses: OrderStatus[] = ["Use", "Return", "Ordered", "Delivered"];

export const getRandomStatus = () => {
  const randomIndex = Math.floor(Math.random() * 3) + 1;
  return statuses[randomIndex];
};
