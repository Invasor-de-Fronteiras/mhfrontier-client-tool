import classNames from "classnames";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useWatch } from "react-hook-form";
import { toast } from 'react-toastify';
import { Button } from "../../components/Button";
import { GroupCard } from "../../components/CardGroup";
import { Input } from "../../components/Input";
import { Pagination } from "../../components/Pagination";
import { useMhfDat } from "../../context/MhfDatContext";
import { useTool } from "../../context/ToolContext";
import { usePaginate } from "../../hooks";
import { useSelectItems } from "../../hooks/selectItems";
import { Item } from "../../utils";
import { ItemEdit } from "./ItemEdit";
import { ItemRow } from "./ItemRow";
import { ItemsTable } from "./ItemsTable";

export function ItemsTab() {
    const { form } = useMhfDat();
    const { exportToJson, importJson } = useTool();
    const items = useWatch({ control: form.control, name: 'items' });
    const [selected, setSelected] = useState<null | number>(null);
    const [compared, setCompared] = useState<null | number>(null);
    const [page, setPage] = useState<number>(1);
    const [perPage] = useState<number>(10);
    const [query, setQuery] = useState<string | null>(null);
    const [itemId, setItemId] = useState<number | null>(null);
    const selectItems = useSelectItems();

    const exportItems = async () => {
        const exportedItems: Item[] = [];
        selectItems.selectedItems
            .sort((a, b) => a - b)
            .forEach(v => {
                if (items[v]) exportedItems.push(items[v]);
            });

        await exportToJson(exportedItems, { title: 'Export items to json', defaultName: 'items.json' });
    }

    const importItems = async () => {
        try {
            const result = await importJson({ title: 'Import items from json' });
            if (!result) return;
            const importedItems = JSON.parse(result) as Item[];

            importedItems.forEach(v => {
                form.setValue(`items.${v.item_id}`, v);
            });
            toast.success('Items imported successfully!');
        } catch (error) {
            toast.error(`Failed to import items: ${error}`);
        }
    }

    useEffect(() => {
        if (selectItems.isSelectedAll) {
            selectItems.setSelectedItems(items.map(v => v.item_id));
        }
    }, [selectItems.isSelectedAll]);

    const onInputChange = useCallback((e: React.FocusEvent<HTMLInputElement, Element>) => {
        setQuery(e.target.value);
    }, [setQuery]);

    const onInputNumberChange = useCallback((e: React.FocusEvent<HTMLInputElement, Element>) => {
        console.log(e.target.value);
        if (!e.target.value) {
            setItemId(null);
            return;
        }

        setItemId(parseInt(e.target.value, 10));
    }, [setQuery]);

    const itemRows = useMemo<ItemRow[]>(() => {
        if (!items) return [];
        return items.map<ItemRow>((item, i) => ({
            index: i,
            color: item.item_props.color,
            rare: item.item_props.rare,
            max_inventory: item.item_props.max_inventory,
            icon: item.item_props.icon,
            name: item.name,
            description: item.description
        }));
    }, [items]);

    const itemsFiltered = useMemo<ItemRow[]>(() => {
        if (!query && itemId === null) return itemRows;

        return itemRows.filter(item => {
            if (itemId) {
                return item.index === itemId;
            }

            if (query) {
                return RegExp(query).test(item.name);
            }

            return true;
        });
    }, [itemRows, query, itemId]);

    const pageItems = usePaginate(itemsFiltered, page, perPage);

    return (
        <div className="flex flex-row flex-wrap gap-2">
            <GroupCard title="Filters">
                <Input
                    label="Query"
                    type="text"
                    onBlur={onInputChange}
                />
                <Input
                    label="Item Id"
                    type="number"
                    onBlur={onInputNumberChange}
                />
                <div className="flex pt-4 items-center">
                    <Button type="button" className="mr-2" onClick={importItems} >Import items</Button>
                    <Button type="button" disabled={selectItems.selectedItems.length === 0} onClick={exportItems}>Export items</Button>
                </div>
            </GroupCard>
            <GroupCard title="Items" contentClass={classNames("max-h-116 overflow-y-auto")}>
                <Pagination
                    page={page}
                    onChangePage={setPage}
                    total={itemsFiltered.length}
                    perPage={perPage}
                    className="w-full justify-center mb-8"
                />
                <ItemsTable items={pageItems} onCompare={setCompared} onSelect={setSelected} selectItems={selectItems}  />
            </GroupCard>
            <GroupCard title="Edit">
                <div className="flex-1">
                    {selected && <ItemEdit key={selected} itemIndex={selected} />}
                </div>
                <div className="flex-1">
                    {compared && <ItemEdit key={compared} itemIndex={compared} />}
                </div>
            </GroupCard>
        </div>
    );
}
