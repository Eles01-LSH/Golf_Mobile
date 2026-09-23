import type { ComponentType } from "react";
import SectionShell from "../components/SectionShell";
import SectionHeader from "../components/SectionHeader";
import { gameInfoCards, gameRules, specialEvent } from "../data/programBookData";
import {
  IconGroups,
  IconPin,
  IconClock,
  IconFlag,
  IconUtensils,
  IconTrophy,
  IconExternalLink,
} from "../components/icons";

const iconByLabel: Record<string, ComponentType<{ width?: number; height?: number }>> = {
  "참가 규모": IconGroups,
  "경기 장소": IconPin,
  "경기 시간": IconClock,
  "조 편성": IconFlag,
  "점심 및 저녁만찬": IconUtensils,
};

export default function FormatSection() {
  return (
    <SectionShell id="format">
      <SectionHeader eyebrow="Format" title="경기 진행 안내" />
      <div className="info-card-list">
        {gameInfoCards.map((c) => {
          const Icon = iconByLabel[c.label] ?? IconFlag;
          return (
            <div className="info-card" key={c.id}>
              <span className="ic">
                <Icon width={18} height={18} />
              </span>
              <div>
                <div className="label">{c.label}</div>
                <div className="value">{c.value}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 30 }}>
        <SectionHeader eyebrow="Rules" title="경기 규칙" />
        <ol className="rule-list">
          {gameRules.map((rule, i) => (
            <li className="rule-item" key={i}>
              <span className="num">{i + 1}</span>
              <p>{rule}</p>
            </li>
          ))}
        </ol>
      </div>

      <a
        className="special-event special-event--link"
        href={specialEvent.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconTrophy className="special-event__ic" width={22} height={22} />
        <div className="special-event__body">
          <p className="special-event__title">{specialEvent.title}</p>
          <p className="special-event__headline">{specialEvent.headline}</p>
          <p className="special-event__detail">{specialEvent.detail}</p>
        </div>
        <span className="special-event__cta">
          자세히 보기
          <IconExternalLink className="special-event__external" width={17} height={17} />
        </span>
      </a>
    </SectionShell>
  );
}
