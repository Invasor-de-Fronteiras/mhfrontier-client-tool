import React from "react";
import { Checkbox } from "../../components/Checkbox";
import { SelectItemsHook } from "../../hooks/selectItems";
import { ItemRow } from "./ItemRow";

interface ItemsTableProps {
    items: ItemRow[];
    onSelect: (value: number | null) => void;
    onCompare: (value: number | null) => void;
    selectItems: SelectItemsHook;
}

export function ItemsTable({ onSelect, onCompare, items, selectItems }: ItemsTableProps) {
    return (
        <table
            aria-label="Quests"
            className="shadow-sm  w-full text-sm text-left"
        >
            <caption>click on which item you want to edit or compare</caption>
            <thead className="text-xs uppercase">
                <tr className="dark:text-white">
                    <th role="columnheader" scope="col" className="px-6 py-4">
                        <Checkbox
                            name="selectAll"
                            label=""
                            onChange={selectItems.changeSelectedAll}
                            value={selectItems.isSelectedAll}
                        />
                    </th>
                    <th role="columnheader" scope="col" className="px-6 py-4">
                        Position
                    </th>
                    <th role="columnheader" scope="col" className="px-6 py-4">
                        Name
                    </th>
                    <th role="columnheader" scope="col" className="px-6 py-4">
                        Description
                    </th>
                    <th role="columnheader" scope="col" className="px-6 py-4">
                        Rare
                    </th>
                    <th role="columnheader" scope="col" className="px-6 py-4">
                        Max Iventory
                    </th>
                    <th role="columnheader" scope="col" className="px-6 py-4">
                        Icon
                    </th>
                    <th role="columnheader" scope="col" className="px-6 py-4">
                        Color
                    </th>
                    <th role="columnheader" scope="col" className="px-6 py-4">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => {
                    return <ItemRow
                        key={`${item.index}`}
                        item={item}
                        onCompare={onCompare}
                        onSelect={onSelect}
                        selectItems={selectItems}
                    />
                })}
            </tbody>
        </table>
    );
}