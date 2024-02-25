import { UiSelectField } from "@/shared/ui/ui-select-field";
import { useAddBlockItemForm } from "../model/use-block-item-form";
import { UiTextField } from "@/shared/ui/ui-textfield";
import { UiButton } from "@/shared/ui/ui-button";
import { AddBlockItemDtoType } from "@/shared/api/generated";

const typeOptions = [
  { label: "Website", value: AddBlockItemDtoType.Website },
  { label: "Keyword", value: AddBlockItemDtoType.KeyWord },
];

export function AddBlockItemForm() {
  const { register, handleSubmit, type } = useAddBlockItemForm();

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <UiSelectField
        className="grow min-w-[200px]"
        options={typeOptions}
        selectProps={{ ...register("type") }}
      />
      <UiTextField
        className="grow"
        inputProps={{
          placeholder: type === "KeyWord" ? "Enter keyword" : "Enter website",
          ...register("data"),
        }}
      />
      <UiButton variant="primary">Add Block Item </UiButton>
    </form>
  );
}
