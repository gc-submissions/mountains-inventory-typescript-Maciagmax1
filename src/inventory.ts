import InventoryItem from "../models/InventoryItem";

const inventory: InventoryItem[] = [
  {
    product: {
      name: "motor",
      price: 10,
    },
    quantity: 10,
  },
  {
    product: {
      name: "sensor",
      price: 12.5,
    },
    quantity: 4,
  },
  {
    product: {
      name: "LED",
      price: 1,
    },
    quantity: 20,
  },
];

const calcInventoryValue = (array: InventoryItem[]): number => {
  if (array.length > 0) {
    let total: number = 0;
    array.forEach((item) => (total += item.product.price * item.quantity));
    return total;
  } else {
    return 0;
  }
};

// const inventoryTotalValue = calcInventoryValue(inventory)
// const inventoryTotalValue = calcInventoryValue([]);
// console.log(inventoryTotalValue);

export { calcInventoryValue };
