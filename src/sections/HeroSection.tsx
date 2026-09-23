import { useEffect, useRef, useState } from "react";
import { eventInfo } from "../data/programBookData";
import { IconCalendar, IconPin, IconMenu } from "../components/icons";
import heroPhoto from "../assets/goldlakecc.jpg";
import kicaLogo from "../assets/kica_logo.png";

const menuLinks = [
  { id: "about", label: "대회 안내" },
  { id: "schedule", label: "행사 일정" },
  { id: "groups", label: "조 편성" },
  { id: "participants", label: "참가자" },
  { id: "format", label: "경기 방식" },
  { id: "awards", label: "시상 안내" },
  { id: "committee", label: "준비위원회" },
  { id: "sponsors", label: "협찬 내역" },
];

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (panelRef.current?.contains(target) || btnRef.current?.contains(target)) return;
      setOpen(false);
    }
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="hero">
      <img className="hero-photo" src={heroPhoto} alt="골드레이크CC 골프장 전경" />
      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-top">
        <button
          ref={btnRef}
          type="button"
          className="menu-btn"
          aria-haspopup="true"
          aria-expanded={open}
          aria-label="전체 메뉴 열기"
          onClick={() => setOpen((v) => !v)}
        >
          <IconMenu width={18} height={18} />
        </button>
      </div>

      <p className="hero-eyebrow label-font">{eventInfo.editionOrdinal} FRIENDSHIP CUP</p>
      <h1 className="hero-title">
        영·호남
        <br />
        친선골프대회
      </h1>
      <p className="hero-meta">
        <span>
          <IconCalendar width={15} height={15} />
          {eventInfo.dateLabel}
        </span>
        <span>
          <IconPin width={15} height={15} />
          {eventInfo.venueName}
        </span>
      </p>

      <div className="hero-org">
        <img src={kicaLogo} alt="한국정보통신공사협회 광주·전남도회 통우회" />
      </div>

      {open ? (
        <nav className="menu-panel open" ref={panelRef} aria-label="전체 메뉴">
          {menuLinks.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              onClick={(e) => {
                e.preventDefault();
                goTo(m.id);
              }}
            >
              {m.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
