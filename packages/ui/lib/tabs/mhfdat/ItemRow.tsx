import classNames from "classnames";
import { ComponentProps, useMemo } from "react";
import { MdModeEdit } from "react-icons/md";
import { BiGitCompare } from "react-icons/bi";
import { itemColors, itemIcons } from "../../utils";
import { Checkbox } from "../../components/Checkbox";
import { SelectItemsHook } from "../../hooks/selectItems";

export interface ItemRow {
    index: number;
    name: string;
    description: string;
    rare: number;
    max_inventory: number;
    icon: number;
    color: number;
}

interface ItemRowProps {
    item: ItemRow;
    onSelect: (value: number) => void;
    onCompare: (value: number) => void;
    selectItems: SelectItemsHook;
}

export const ActionButton = ({ children, ...props }: ComponentProps<"button"> & { children: React.ReactNode }) => 
    <button 
        type="button"
        className={classNames(
            "mx-1 text-slate-900 border  hover:bg-slate-700", 
            "hover:text-white focus:ring-4 focus:outline-none",
            "focus:ring-blue-300 font-medium rounded-full text-sm p-2.5",
            "text-center inline-flex items-center dark:border-blue-500",
            "dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        )}
        {...props}
    >
        {children}
    </button>;

export const ItemRow = ({ item, onSelect, onCompare, selectItems }: ItemRowProps) => {

    const isSelected = useMemo(() => selectItems.isItemSelected(item.index), [item, selectItems]);
    const itemIcon = useMemo(() => {
        const icon = itemIcons.find(v => v.value === item.icon);
        return icon?.label || `Icon ${item.icon}`;
    }, [item.icon]);

    const itemColor = useMemo(() => {
        const color = itemColors.find(v => v.value === item.color);
        return color?.label || `Color ${item.color}`;
    }, [item.icon]);

    return <tr
            className={classNames("hover:bg-gray-700 cursor-pointer dark:text-white")}
        >
            
            <td className="px-6 py-4">
                <Checkbox
                    name="selectAll"
                    label=""
                    onChange={() => selectItems.selectItem(item.index)}
                    value={isSelected}
                />
            </td>
            <td className="px-6 py-4">{item.index}</td>
            <td className="px-6 py-4">{item.name}</td>
            <td className="px-6 py-4">{item.description}</td>
            <td className="px-6 py-4">{item.rare}</td>
            <td className="px-6 py-4">{item.max_inventory}</td>
            <td className="px-6 py-4">{itemIcon}</td>
            <td className="px-6 py-4">{itemColor}</td>
            <td className="px-6 py-4 flex">
                <ActionButton onClick={() => onCompare(item.index)}>
                    <BiGitCompare size={16} />
                </ActionButton>
                <ActionButton onClick={() => onSelect(item.index)}>
                    <MdModeEdit size={16} />
                </ActionButton>
            </td>
    </tr>;
}