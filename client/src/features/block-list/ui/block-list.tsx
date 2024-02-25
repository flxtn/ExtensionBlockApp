import { UiTextField } from "@/shared/ui/ui-textfield";
import { useBlockItems } from "../model/use-block-items";
import { BlockItem } from "./block-item";

export function BlockList({className}: {className?: string}) {
  const { q, setQ, items } = useBlockItems();

  const isEmptyList = items.length === 0

  return (
    <div className={className}>
      <UiTextField
        className="mb-2"
        label="Search.."
        inputProps={{ value: q, onChange: (e) => setQ(e.target.value) }}
      />
      <div className="rounded-xl bg-slate-100/50 px-10 py-6 flex flex-col gap-3">
        {isEmptyList && <div className="text-xl py-1 text-center">List is empty..</div>}
        {items.map(item => <BlockItem key={item.id} {...item} />)}
      </div>
    </div>
  );
}
