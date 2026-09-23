import { useId, useState } from "react";
import SectionShell from "../components/SectionShell";
import SectionHeader from "../components/SectionHeader";
import SponsorRow from "../components/SponsorCard";
import { IconChevronDown } from "../components/icons";
import {
  sponsorEntriesByGroup,
  sponsorGroupCashSum,
  sponsorGroupItemValueSum,
  sponsorGrandTotal,
  formatSponsorEntryValue,
  type SponsorGroup,
} from "../data/programBookData";

const groups: SponsorGroup[] = ["광주·전남도회 현금 협찬", "광주·전남도회 물품 협찬", "외부 협찬"];
const PREVIEW_COUNT = 8;

function groupTotalLabel(group: SponsorGroup): string {
  const cash = sponsorGroupCashSum(group);
  const items = sponsorGroupItemValueSum(group);
  if (cash > 0 && items > 0) {
    return `현금 ${cash.toLocaleString("ko-KR")}원 · 물품가액 ${items.toLocaleString("ko-KR")}원`;
  }
  if (items > 0) return `협찬가액 ${items.toLocaleString("ko-KR")}원`;
  return `${cash.toLocaleString("ko-KR")}원`;
}

export default function SponsorsSection() {
  const [group, setGroup] = useState<SponsorGroup>(groups[0]);
  const [expanded, setExpanded] = useState(false);
  const listId = useId();

  const selectGroup = (g: SponsorGroup) => {
    setGroup(g);
    setExpanded(false);
  };

  const fullList = sponsorEntriesByGroup(group);
  const visibleCount = expanded ? fullList.length : Math.min(PREVIEW_COUNT, fullList.length);
  const shown = fullList.slice(0, visibleCount);
  const hiddenCount = fullList.length - shown.length;

  return (
    <SectionShell id="sponsors">
      <SectionHeader eyebrow="Sponsors" title="협찬 내역" />

      <div className="sponsor-summary">
        <div className="sponsor-summary__label">총 협찬가액</div>
        <div className="sponsor-summary__amount">{sponsorGrandTotal.toLocaleString("ko-KR")}원</div>
        <div className="sponsor-summary__meta">
          광주·전남도회 현금 {sponsorEntriesByGroup("광주·전남도회 현금 협찬").length}건 · 물품{" "}
          {sponsorEntriesByGroup("광주·전남도회 물품 협찬").length}건 · 외부 협찬{" "}
          {sponsorEntriesByGroup("외부 협찬").length}건
        </div>
      </div>

      <div className="tab-switch" role="tablist" aria-label="협찬 구분" style={{ marginTop: 20 }}>
        {groups.map((g) => (
          <button
            key={g}
            type="button"
            role="tab"
            aria-selected={group === g}
            className={group === g ? "active" : ""}
            onClick={() => selectGroup(g)}
          >
            {g.replace("광주·전남도회 ", "").replace(" 협찬", "")}
          </button>
        ))}
      </div>

      <p className="section-lede" style={{ margin: "0 0 14px", textAlign: "left" }}>
        {group} · {groupTotalLabel(group)}
      </p>

      <div id={listId}>
        <ul className="sponsor-list sponsor-list--mobile-only">
          {shown.map((entry) => (
            <SponsorRow key={entry.id} entry={entry} />
          ))}
        </ul>
        <div className="sponsor-table-wrap">
          <table className="sponsor-table">
            <thead>
              <tr>
                <th>순번</th>
                <th>성명 / 구분</th>
                <th>직함 · 비고</th>
                <th>협찬 내용</th>
              </tr>
            </thead>
            <tbody>
              {shown.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.no}</td>
                  <td>
                    {entry.name}
                    {entry.company ? ` (${entry.company})` : ""}
                  </td>
                  <td>{[entry.role, entry.note].filter(Boolean).join(" · ")}</td>
                  <td>{formatSponsorEntryValue(entry)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {fullList.length > PREVIEW_COUNT ? (
        <button
          type="button"
          className="list-more-btn"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "간략히 보기" : `전체 보기 (+${hiddenCount}건)`}
          <IconChevronDown width={16} height={16} style={{ transform: expanded ? "rotate(180deg)" : "none" }} />
        </button>
      ) : null}
    </SectionShell>
  );
}
