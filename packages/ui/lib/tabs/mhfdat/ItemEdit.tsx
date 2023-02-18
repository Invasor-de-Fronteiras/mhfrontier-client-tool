import { useMemo } from "react";
import { useWatch } from "react-hook-form";
import { GroupCard } from "../../components/CardGroup";
import { InputField } from "../../components/Input";
import { SelectField } from "../../components/Select";
import { TextAreaField } from "../../components/TextArea";
import { UnknownField } from "../../components/UnknownFields";
import { useMhfDat } from "../../context/MhfDatContext";
import { itemColors, itemIcons } from "../../utils";

export interface ItemEditProps {
    itemIndex: number;
}

export function ItemEdit({ itemIndex }: ItemEditProps) {
    const { form } = useMhfDat();
    const items = useWatch({ control: form.control, name: 'items' });

    const item = useMemo(() => {
        const data = items[itemIndex];
        console.log('quest: ', data);
        return data;
    }, [items, itemIndex]);

    return (
    <div className="flex flex-row flex-wrap gap-2">
        <GroupCard title="Main" contentClass="grid grid-cols-4">
            <InputField
                label="Name"
                type="string"
                className="col-span-2"
                name={`items.${itemIndex}.name`}
                control={form.control}
            />
            <InputField
                label="Rare"
                type="number"
                className="col-span-2"
                name={`items.${itemIndex}.item_props.rare`}
                control={form.control}
            />
            <SelectField
                label="Icon"
                options={itemIcons}
                className="mt-3 mr-3 col-span-2"
                isClearable
                onClearValue={1}
                control={form.control}
                name={`items.${itemIndex}.item_props.icon`}
            />
            <SelectField
                label="Color"
                options={itemColors}
                className="mt-3 mr-3 col-span-2"
                isClearable
                onClearValue={0}
                control={form.control}
                name={`items.${itemIndex}.item_props.color`}
            />
            <InputField
                label="Max inventory"
                type="number"
                className="col-span-2"
                name={`items.${itemIndex}.item_props.max_inventory`}
                control={form.control}
            />
            <TextAreaField
                label="Description"
                type="string"
                className="col-span-2"
                name={`items.${itemIndex}.description`}
                control={form.control}
            />
        </GroupCard>
        <GroupCard title="Props">
            <UnknownField
                name="Header"
                path={`items.${itemIndex}.item_props`}
                data={item.item_props}
                control={form.control}
                initialHide
            />
        </GroupCard>
    </div>
  );
}
