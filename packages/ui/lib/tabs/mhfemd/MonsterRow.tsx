import classNames from "classnames";
import { ComponentProps } from "react";
import { MdModeEdit } from "react-icons/md";
import { BiGitCompare } from "react-icons/bi";

export interface MonsterRow {
    index: number;
    monster_id: number;
    name: string;
}

interface MonsterRowProps {
    monster: MonsterRow;
    onSelect: (value: number) => void;
    onCompare: (value: number) => void;
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

export const MonsterRow = ({ monster, onSelect, onCompare }: MonsterRowProps) => {

    return <tr
            className={classNames("hover:bg-gray-600 cursor-pointer dark:text-white")}
        >
            <td className="px-6 py-4">{monster.index}</td>
            <td className="px-6 py-4">{monster.monster_id}</td>
            <td className="px-6 py-4">{monster.name}</td>
            <td className="px-6 py-4 flex">
                <ActionButton onClick={() => onCompare(monster.index)}>
                    <BiGitCompare size={16} />
                </ActionButton>
                <ActionButton onClick={() => onSelect(monster.index)}>
                    <MdModeEdit size={16} />
                </ActionButton>
            </td>
    </tr>;
}