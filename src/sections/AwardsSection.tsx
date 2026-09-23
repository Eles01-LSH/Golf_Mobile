import { useId, useState } from "react";
import SectionShell from "../components/SectionShell";
import SectionHeader from "../components/SectionHeader";
import { AwardPrizeRow, AwardTrophyRow, AwardSouvenirRow } from "../components/AwardCard";
import { IconChevronDown } from "../components/icons";
import {
  awardMainPrizeList,
  awardMainPrizeQuantitySum,
  awardLuckyPrizeList,
  awardLuckyPrizeQuantitySum,
  awardTrophyList,
  awardTrophyQuantitySum,
  awardTrophyQuantityMatches,
  awardSouvenirList,
  awardSouvenirQuantitySum,
  awardSouvenirQuantityMatches,
  awardPrizeQuantityMatches,
} from "../data/programBookData";

type Tab = "prize" | "lucky" | "trophy" | "souvenir";

const tabs: { id: Tab; label: string }[] = [
  { id: "prize", label: "상품" },
  { id: "lucky", label: "행운상" },
  { id: "trophy", label: "상패" },
  { id: "souvenir", label: "기념품" },
];

const PREVIEW_COUNT = 8;

export default function AwardsSection() {
  const [tab, setTab] = useState<Tab>("prize");
  const [expanded, setExpanded] = useState(false);
  const listId = useId();

  const selectTab = (t: Tab) => {
    setTab(t);
    setExpanded(false);
  };

  const summary = {
    prize: { sum: awardMainPrizeQuantitySum, count: awardMainPrizeList.length, matches: awardPrizeQuantityMatches },
    lucky: { sum: awardLuckyPrizeQuantitySum, count: awardLuckyPrizeList.length, matches: awardPrizeQuantityMatches },
    trophy: { sum: awardTrophyQuantitySum, count: awardTrophyList.length, matches: awardTrophyQuantityMatches },
    souvenir: {
      sum: awardSouvenirQuantitySum,
      count: awardSouvenirList.length,
      matches: awardSouvenirQuantityMatches,
    },
  }[tab];

  const fullList =
    tab === "prize"
      ? awardMainPrizeList
      : tab === "lucky"
        ? awardLuckyPrizeList
        : tab === "trophy"
          ? awardTrophyList
          : awardSouvenirList;

  const visibleCount = expanded ? fullList.length : Math.min(PREVIEW_COUNT, fullList.length);
  const hiddenCount = fullList.length - visibleCount;

  return (
    <SectionShell id="awards">
      <SectionHeader eyebrow="Awards" title="시상 안내" side={`${summary.sum}개`} />

      <div className="tab-switch" role="tablist" aria-label="시상 구분">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className={tab === t.id ? "active" : ""}
            onClick={() => selectTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={listId}>
        {tab === "prize"
          ? awardMainPrizeList.slice(0, visibleCount).map((item) => <AwardPrizeRow key={item.id} item={item} />)
          : null}
        {tab === "lucky"
          ? awardLuckyPrizeList.slice(0, visibleCount).map((item) => <AwardPrizeRow key={item.id} item={item} />)
          : null}
        {tab === "trophy"
          ? awardTrophyList.slice(0, visibleCount).map((item) => <AwardTrophyRow key={item.id} item={item} />)
          : null}
        {tab === "souvenir"
          ? awardSouvenirList.slice(0, visibleCount).map((item) => <AwardSouvenirRow key={item.id} item={item} />)
          : null}
      </div>

      {fullList.length > PREVIEW_COUNT ? (
        <button
          type="button"
          className="list-more-btn"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "간략히 보기" : `전체 보기 (+${hiddenCount}개)`}
          <IconChevronDown width={16} height={16} style={{ transform: expanded ? "rotate(180deg)" : "none" }} />
        </button>
      ) : null}
    </SectionShell>
  );
}
