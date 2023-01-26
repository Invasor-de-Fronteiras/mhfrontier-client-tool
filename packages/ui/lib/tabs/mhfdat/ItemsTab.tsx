import classNames from "classnames";
import { useCallback, useState } from "react";
import { GroupCard } from "../../components/CardGroup";
import { Input } from "../../components/Input";
import { ItemEdit } from "./ItemEdit";
import { ItemsTable } from "./ItemsTable";

export function ItemsTab() {
    const [selected, setSelected] = useState<null | number>(null);
    const [compared, setCompared] = useState<null | number>(null);
    const [query, setQuery] = useState<string | null>(null);

    const onInputChange = useCallback((e: React.FocusEvent<HTMLInputElement, Element>) => {
        setQuery(e.target.value);
    }, [setQuery]);

    return (
        <div className="flex flex-row flex-wrap gap-2">
            <GroupCard title="Filters">
                <Input
                    label="Query"
                    type="text"
                    onBlur={onInputChange}
                />
            </GroupCard>
            <GroupCard title="Items" contentClass={classNames("max-h-96 overflow-y-auto")}>
                <ItemsTable query={query} onCompare={setCompared} onSelect={setSelected}  />
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
