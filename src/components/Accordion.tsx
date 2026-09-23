import { useId, useState, type ReactNode } from "react";
import { IconChevronDown } from "./icons";

interface AccordionProps {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className="accordion">
      <button
        type="button"
        className="accordion__trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{title}</span>
        <IconChevronDown className="accordion__chevron" width={18} height={18} />
      </button>
      {open ? (
        <div id={panelId} className="accordion__panel" role="region">
          {children}
        </div>
      ) : null}
    </div>
  );
}
