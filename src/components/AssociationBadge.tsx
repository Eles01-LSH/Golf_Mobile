import type { AssociationKey } from "../data/programBookData";

const variantByAssociation: Record<AssociationKey, string> = {
  초청인사: "badge--guest",
  통우회: "badge--tongwoo",
  정록회: "badge--jeongnok",
  정통회: "badge--jeongtong",
  전통회: "badge--jeontong",
};

export default function AssociationBadge({ association }: { association: AssociationKey }) {
  return <span className={`badge ${variantByAssociation[association]}`}>{association}</span>;
}
