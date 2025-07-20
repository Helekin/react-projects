import { useState } from "react";

import { IMenuItem, IOrdenItem } from "../interfaces";

export default function useOrder() {
  const [order, setOrder] = useState<IOrdenItem[]>([]);

  const addItem = (item: IMenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (itemExist) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );

      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: IMenuItem["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  return {
    order,
    addItem,
    removeItem,
  };
}
