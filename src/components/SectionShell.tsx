import type { ReactNode } from "react";

interface SectionShellProps {
  id: string;
  children: ReactNode;
}

export default function SectionShell({ id, children }: SectionShellProps) {
  return (
    <section id={id} className="section-block">
      <div className="page">{children}</div>
    </section>
  );
}
