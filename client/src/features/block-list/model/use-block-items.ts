import { useListQuery } from "@/entities/block-list";
import { useDebauncedValue } from "@/shared/lib/react-std";
import { useState } from "react";

export function useBlockItems() {
  const [q, setQ] = useState("");

  const blockListQuery = useListQuery({ q: useDebauncedValue(q, 400) });

  const items = blockListQuery.data?.items ?? [];

  return { items, q, setQ };
}
