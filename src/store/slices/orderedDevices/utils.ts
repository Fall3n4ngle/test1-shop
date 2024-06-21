import { OrderStatus } from "./types";

export function getDateInFuture(days: number) {
  const now = new Date();
  const futureTime = now.getTime() + days * 24 * 60 * 60 * 1000;
  return new Date(futureTime);
}

const statuses: OrderStatus[] = ["Use", "Return", "Ordered", "Delivered"];

export const getRandomStatus = () => {
  const randomIndex = Math.floor(Math.random() * 3) + 1;
  return statuses[randomIndex];
};
