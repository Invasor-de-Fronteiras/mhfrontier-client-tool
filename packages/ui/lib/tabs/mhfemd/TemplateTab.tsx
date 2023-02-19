import classNames from "classnames";
import { useWatch } from "react-hook-form";
import { Button } from "../../components/Button";
import { GroupCard } from "../../components/CardGroup";
import { useMhfDat } from "../../context/MhfDatContext";
import { Item } from "../../utils";

export function DatTemplateTab() {
    const { form } = useMhfDat();
    const items = useWatch({ control: form.control, name: 'items' });

    const applyAllIconsTemplate = () => {
        for (let i = 0; i <= 36; i+=1) {
            const index = i + 1;

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (items[index].item_props[`unk${i}`] !== undefined) {
                form.setValue(`items.${index}.item_props.icon`, 37);
                form.setValue(`items.${index}.item_props.color`, 0);
                form.setValue(`items.${index}.name`, `unk${i}`);
                
                form.setValue(`items.${index}.item_props.unk4`, 0);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                form.setValue(`items.${index}.item_props.unk${i}`, 1);
            }
        }
    }

    const readAllItemsTemplate = () => {
        // const icons: Record<number, number> = {};
        const selectedItems: Item[] = [];

        items.forEach(item => {
            // icons[item.item_props.icon] = item.item_props.icon;
            if ([41].includes(item.item_props.icon)) {
                selectedItems.push(item);
            }
        });

        console.log(selectedItems.sort((a, b) => a.item_props.icon - b.item_props.icon).map(v => `Icon ${v.item_props.icon}: ${v.name}`).join('\n'));
    }

  return (
    <div className="flex flex-row flex-wrap gap-2">
      <GroupCard title="Templates" >
        <table
            aria-label="Quest monsters"
            className="shadow-sm  w-full text-sm text-left"
        >
            <thead className="text-xs uppercase">
                <tr className="dark:text-white">
                    <th role="columnheader" scope="col" className="px-6 py-4">
                        Template
                    </th>
                    <th role="columnheader" scope="col" className="px-6 py-4">
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className={classNames("hover:bg-emerald-300 cursor-pointer")}>
                    <td className="px-6 py-4" scope="row">
                        <Button
                            type="button"
                            onClick={applyAllIconsTemplate}
                        >
                            Apply All Icons
                        </Button>
                    </td>
                    <td className="px-6 py-4">
                        <p>Template for Apply All Icons</p>
                    </td>
                </tr>
                <tr className={classNames("hover:bg-emerald-300 cursor-pointer")}>
                    <td className="px-6 py-4" scope="row">
                        <Button
                            type="button"
                            onClick={readAllItemsTemplate}
                        >
                            Read All Icons
                        </Button>
                    </td>
                    <td className="px-6 py-4">
                        <p>Template for Apply All Icons</p>
                    </td>
                </tr>
            </tbody>
        </table>
      </GroupCard>
    </div>
  );
}
