import { useAddBlockItemMutation } from "@/entities/block-list";
import { AddBlockItemDtoType } from "@/shared/api/generated";
import { useForm } from "react-hook-form";

export function useAddBlockItemForm() {
  const { handleSubmit, register, watch, reset } = useForm<{
    data: string;
    type: AddBlockItemDtoType;
  }>({ defaultValues: { type: AddBlockItemDtoType.Website } });

  const AddBlockItemMutation = useAddBlockItemMutation();

  const type = watch("type");

  return {
    handleSubmit: handleSubmit((data) => {
      AddBlockItemMutation.mutate(data, {
        onSuccess() {
          reset();
        },
      });
    }),
    register,
    type,
  };
}
