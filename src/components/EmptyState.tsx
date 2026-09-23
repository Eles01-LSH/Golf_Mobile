import type { ReactNode } from "react";
import { IconSearch } from "./icons";

interface EmptyStateProps {
  message: string;
  icon?: ReactNode;
}

export default function EmptyState({ message, icon }: EmptyStateProps) {
  return (
    <div className="empty-state" role="status">
      <div className="ic">{icon ?? <IconSearch width={28} height={28} />}</div>
      <p>{message}</p>
    </div>
  );
}
