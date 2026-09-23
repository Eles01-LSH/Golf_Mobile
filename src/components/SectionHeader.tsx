import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  side?: ReactNode;
}

export default function SectionHeader({ eyebrow, title, side }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      {side ? <div className="side">{side}</div> : null}
    </div>
  );
}
