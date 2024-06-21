import { OrderStatus } from "@/store";

const map: Record<OrderStatus, { backgorundColor: string; textColor: string }> =
  {
    Use: {
      backgorundColor: "#E4F0D0",
      textColor: "#069E2D",
    },
    Return: {
      backgorundColor: "#FFD4D4",
      textColor: "#B80C09",
    },
    Delivered: {
      backgorundColor: "#BFDADD",
      textColor: "#198D99",
    },
    Ordered: {
      backgorundColor: "#FEE5CB",
      textColor: "#E37500",
    },
  };

export const getStatusColor = (status: OrderStatus) => {
  const foundItem = map[status];

  if (!foundItem) {
    return { textColor: "#000000", backgorundColor: "#FFFFFF" };
  }

  return {
    textColor: foundItem.textColor,
    backgorundColor: foundItem.backgorundColor,
  };
};
