import { useEffect, useState } from "react";

export interface SelectItemsHook {
  selectedItems: number[];
  setSelectedItems: (value: number[]) => void;
  isItemSelected: (item: number) => boolean;
  selectItem: (item: number) => void;
  isSelectedAll: boolean;
  changeSelectedAll: () => void;
}

export const useSelectItems = (): SelectItemsHook => {
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [isSelectedAll, setSelectedAll] = useState<boolean>(false);

    useEffect(() => {
      if (!isSelectedAll) {
        
      }
  }, [isSelectedAll]);

    const isItemSelected = (item: number) => selectedItems.includes(item);
    const addItem = (item: number) => {
      setSelectedItems([ ...selectedItems, item ]);
    }

    const removeItem = (item: number) => {
      setSelectedItems(selectedItems.filter(v => v !== item));
      setSelectedAll(false);
    }

    const selectItem = (item: number) => {
      if (isItemSelected(item)) {
        removeItem(item);
      } else {
        addItem(item);
      }
    }

    const changeSelectedAll = () => {
      const result = !isSelectedAll
      setSelectedAll(result);
      if (!result) {
        setSelectedItems([]);
      }
    }

    return {
      selectedItems,
      setSelectedItems,
      isItemSelected,
      selectItem,
      isSelectedAll,
      changeSelectedAll
    };
}
