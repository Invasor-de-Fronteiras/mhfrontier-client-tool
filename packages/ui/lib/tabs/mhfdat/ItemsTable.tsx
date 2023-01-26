import { useMemo } from "react";
import { useWatch } from "react-hook-form";
import { useMhfDat } from "../../context/MhfDatContext";
import { ItemRow } from "./ItemRow";

interface ItemsTableProps {
    query: string | null;
    onSelect: (value: number | null) => void;
    onCompare: (value: number | null) => void;
}

export function ItemsTable({ onSelect, onCompare, query }: ItemsTableProps) {
    const { form } = useMhfDat();
    const items = useWatch({ control: form.control, name: 'items' });

    const itemRows = useMemo<ItemRow[]>(() => {
        if (!items) return [];
        return items.map<ItemRow>((item, i) => ({
            index: i,
            color: item.item_props.color,
            rare: item.item_props.rare,
            max_inventory: item.item_props.max_inventory,
            icon: item.item_props.icon,
            name: item.name,
        }));
    }, [items]);

    const itemsFiltered = useMemo<ItemRow[]>(() => {
        if (!query) return itemRows;

        return itemRows.filter(item => {
            if (!query) return true;

            return RegExp(query).test(item.name);
        });
    }, [itemRows, query]);

    return (
        <table
            aria-label="Quests"
            className="shadow-sm  w-full text-sm text-left"
        >
            <caption>click on which item you want to edit or compare</caption>
            <thead className="text-xs uppercase">
                <tr className="dark:text-white">
                    <th role="columnheader" scope="col" className="px-6 py-4">
                        Position
                    </th>
                    <th role="columnheader" scope="col" className="px-6 py-4">
                        Name
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
                {itemsFiltered.slice(0, 100).map((item) => {
                    return <ItemRow
                        key={`${item.index}`}
                        item={item}
                        onCompare={onCompare}
                        onSelect={onSelect}
                    />
                })}
            </tbody>
        </table>
    );
}