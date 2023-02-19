import classNames from "classnames";
import { useMemo } from "react";
import { useWatch } from "react-hook-form";
import { GroupCard } from "../../components/CardGroup";
import { InputField } from "../../components/Input";
import { useMhfEmd } from "../../context/MhfEmdContext";

export interface MonsterEditProps {
    monsterIndex: number;
}

export function MonsterEdit({ monsterIndex }: MonsterEditProps) {
    const { form } = useMhfEmd();
    const monsters = useWatch({ control: form.control, name: 'monsters' });

    const monster = useMemo(() => {
        const data = monsters[monsterIndex];
        console.log('quest: ', data);
        return data;
    }, [monsters, monsterIndex]);

    return (
    <div className="flex flex-row flex-wrap gap-2">
        monster_id: {monster.monster_id}
        monsterIndex: {monsterIndex}

        <GroupCard title="Table" >
            <table
                aria-label="Monsters"
                className="shadow-sm  w-full text-sm text-left"
            >
                <thead className="text-xs uppercase">
                    <tr className="dark:text-white">
                        <th role="columnheader" scope="col" className="px-6 py-4">
                            Table
                        </th>
                        <th role="columnheader" scope="col" className="px-6 py-4">
                            life
                        </th>
                        <th role="columnheader" scope="col" className="px-6 py-4">
                            atk
                        </th>
                        <th role="columnheader" scope="col" className="px-6 py-4">
                            def
                        </th>
                        <th role="columnheader" scope="col" className="px-6 py-4">
                            stagger
                        </th>
                        <th role="columnheader" scope="col" className="px-6 py-4">
                            unk1
                        </th>
                        <th role="columnheader" scope="col" className="px-6 py-4">
                            unk2
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {monster.table.map((table, i) => {
                        return <tr
                            className={classNames("hover:bg-gray-600 cursor-pointer dark:text-white")}
                        >
                            <td className="text-center">{i}</td>
                            <td className="px-1 py-1 ">
                                <InputField
                                    type="number"
                                    className="w-12"
                                    inputClassName="w-full"
                                    name={`monsters.${monsterIndex}.table.${i}.life`}
                                    control={form.control}
                                />
                            </td>
                            <td className="px-1 py-1">
                                <InputField
                                    type="number"
                                    name={`monsters.${monsterIndex}.table.${i}.atk`}
                                    control={form.control}
                                />
                            </td>
                            <td className="px-1 py-1">
                                <InputField
                                    type="number"
                                    name={`monsters.${monsterIndex}.table.${i}.def`}
                                    control={form.control}
                                />
                            </td>
                            <td className="px-1 py-1">
                                <InputField
                                    type="number"
                                    name={`monsters.${monsterIndex}.table.${i}.stagger`}
                                    control={form.control}
                                />
                            </td>
                            <td className="px-1 py-1">
                                <InputField
                                    type="number"
                                    name={`monsters.${monsterIndex}.table.${i}.unk1`}
                                    control={form.control}
                                />
                            </td>
                            <td className="px-1 py-1">
                                <InputField
                                    type="number"
                                    name={`monsters.${monsterIndex}.table.${i}.unk2`}
                                    control={form.control}
                                />
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </GroupCard>
    </div>
  );
}
