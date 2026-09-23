import { useEffect, useRef, useState } from "react";
import { IconCalendar, IconGroups, IconPeople, IconTrophy } from "./icons";

const tabs = [
  { id: "schedule", label: "일정", icon: IconCalendar },
  { id: "groups", label: "조 편성", icon: IconGroups },
  { id: "participants", label: "참가자", icon: IconPeople },
  { id: "awards", label: "시상안내", icon: IconTrophy },
];

export default function TabBar() {
  const [active, setActive] = useState(tabs[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = tabs
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => Boolean(el));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="tabbar-wrap">
      <div className="tabbar" role="tablist" aria-label="섹션 이동">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={active === id}
            className={`tab${active === id ? " active" : ""}`}
            onClick={() => goTo(id)}
          >
            <Icon width={18} height={18} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
