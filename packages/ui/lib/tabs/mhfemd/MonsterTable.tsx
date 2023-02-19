import React from "react";
import { MonsterRow } from './MonsterRow';

interface MonstersTableProps {
    monsters: MonsterRow[];
    onSelect: (value: number | null) => void;
    onCompare: (value: number | null) => void;
}

export function MonstersTable({ onSelect, onCompare, monsters }: MonstersTableProps) {
    return (
        <table
            aria-label="Monsters"
            className="shadow-sm  w-full text-sm text-left"
        >
            <caption>click on which item you want to edit or compare</caption>
            <thead className="text-xs uppercase">
                <tr className="dark:text-white">
                    <th role="columnheader" scope="col" className="px-6 py-4">
                        Position
                    </th>
                    <th role="columnheader" scope="col" className="px-6 py-4">
                        Monster Id
                    </th>
                    <th role="columnheader" scope="col" className="px-6 py-4">
                        Name
                    </th>
                    <th role="columnheader" scope="col" className="px-6 py-4">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {monsters.map((monster) => {
                    return <MonsterRow
                        key={`${monster.index}`}
                        monster={monster}
                        onCompare={onCompare}
                        onSelect={onSelect}
                    />
                })}
            </tbody>
        </table>
    );
}