import classNames from "classnames";
import { useMemo, useState } from "react";
import { useWatch } from "react-hook-form";
import { GroupCard } from "../../components/CardGroup";
import { Pagination } from "../../components/Pagination";
import { Select } from "../../components/Select";
import { useMhfEmd } from "../../context/MhfEmdContext";
import { usePaginate } from "../../hooks";
import { monsters, monster_options } from "../../utils";
import { MonsterEdit } from "./MonsterEdit";
import { MonsterRow } from "./MonsterRow";
import { MonstersTable } from "./MonsterTable";

export function MonstersTab() {
    const { form } = useMhfEmd();
    const monstersValue = useWatch({ control: form.control, name: 'monsters' });
    const [selected, setSelected] = useState<null | number>(null);
    const [compared, setCompared] = useState<null | number>(null);
    const [page, setPage] = useState<number>(1);
    const [perPage] = useState<number>(10);
    const [monsterId, setMonsterId] = useState<number | null>(null);

    const monsterRows = useMemo<MonsterRow[]>(() => {
        if (!monstersValue) return [];
        return monstersValue.map<MonsterRow>((monster, i) => ({
            index: i,
            name:  monsters[monster.monster_id],
            monster_id: monster.monster_id
        }));
    }, [monstersValue]);

    console.log('monsters: ', monstersValue);
    const monstersFiltered = useMemo<MonsterRow[]>(() => {
        if (monsterId === null) return monsterRows;

        return monsterRows.filter(monster => {
            if (monsterId) {
                return monster.monster_id === monsterId;
            }

            return true;
        });
    }, [monsterRows, monsterId]);

    const pageMonsters = usePaginate(monstersFiltered, page, perPage);

    return (
        <div className="flex flex-row flex-wrap gap-2">
            <GroupCard title="Filters">
                <Select
                    label="Item Id"
                    options={monster_options}
                    onChange={(value) => setMonsterId(value?.value || null)}
                />
            </GroupCard>
            <GroupCard title="Items" contentClass={classNames("max-h-116 overflow-y-auto")}>
                <Pagination
                    page={page}
                    onChangePage={setPage}
                    total={monstersFiltered.length}
                    perPage={perPage}
                    className="w-full justify-center mb-8"
                />
                <MonstersTable monsters={pageMonsters} onCompare={setCompared} onSelect={setSelected}  />
            </GroupCard>
            <GroupCard title="Edit">
            {/* {selected !== null && <MonsterEdit key={selected} monsterIndex={selected} />} */}

                <div className="flex-1">
                    {selected !== null && <MonsterEdit key={selected} monsterIndex={selected} />}
                </div>
                <div className="flex-1">
                    {compared && <MonsterEdit key={compared} monsterIndex={compared} />}
                </div>
            </GroupCard>
        </div>
    );
}
