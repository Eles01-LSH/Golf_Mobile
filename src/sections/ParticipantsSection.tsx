import { useId, useMemo, useState } from "react";
import SectionShell from "../components/SectionShell";
import SectionHeader from "../components/SectionHeader";
import SearchBar from "../components/SearchBar";
import ParticipantCard from "../components/ParticipantCard";
import EmptyState from "../components/EmptyState";
import { IconChevronDown } from "../components/icons";
import {
  participants,
  associationMeta,
  normalize,
  findGroupByParticipantId,
  type AssociationKey,
} from "../data/programBookData";

type AssociationFilter = AssociationKey | "all";

const PREVIEW_COUNT = 8;

export default function ParticipantsSection() {
  const [assoc, setAssoc] = useState<AssociationFilter>("all");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const listId = useId();

  const normalizedQuery = normalize(query);
  const hasQuery = normalizedQuery.length > 0;

  const filtered = useMemo(() => {
    return participants.filter((p) => {
      if (assoc !== "all" && p.association !== assoc) return false;
      if (!normalizedQuery) return true;
      const haystack = normalize(`${p.name}${p.company}${p.association}`);
      return haystack.includes(normalizedQuery);
    });
  }, [assoc, normalizedQuery]);

  const selectAssoc = (a: AssociationFilter) => {
    setAssoc(a);
    setExpanded(false);
  };

  // 검색 중일 때는 항상 전체 결과를 펼쳐서 보여주고, 그냥 둘러볼 때만 미리보기로 접어둔다.
  const effectiveExpanded = expanded || hasQuery;
  const visible = effectiveExpanded ? filtered : filtered.slice(0, PREVIEW_COUNT);
  const hiddenCount = filtered.length - visible.length;

  return (
    <SectionShell id="participants">
      <SectionHeader eyebrow="Participants" title="참가자 명단" side={`총 ${participants.length}명`} />

      <div className="chip-row" role="group" aria-label="소속 회 선택">
        <button
          type="button"
          className={`chip-btn${assoc === "all" ? " active" : ""}`}
          onClick={() => selectAssoc("all")}
          aria-pressed={assoc === "all"}
        >
          전체
        </button>
        {(Object.keys(associationMeta) as AssociationKey[]).map((a) => (
          <button
            key={a}
            type="button"
            className={`chip-btn${assoc === a ? " active" : ""}`}
            onClick={() => selectAssoc(a)}
            aria-pressed={assoc === a}
          >
            {a} ({associationMeta[a].count})
          </button>
        ))}
      </div>

      <div style={{ margin: "12px 0 18px" }}>
        <SearchBar
          id="participant-search"
          value={query}
          onChange={setQuery}
          placeholder="성명, 회사명, 소속 회로 검색"
        />
      </div>

      {filtered.length === 0 ? (
        <EmptyState message="검색 결과가 없습니다. 다른 이름이나 회사명으로 찾아보세요." />
      ) : (
        <>
          <ul className="participant-list" id={listId}>
            {visible.map((p) => (
              <ParticipantCard key={p.id} participant={p} group={findGroupByParticipantId(p.id)} />
            ))}
          </ul>

          {!hasQuery && filtered.length > PREVIEW_COUNT ? (
            <button
              type="button"
              className="list-more-btn"
              aria-expanded={effectiveExpanded}
              aria-controls={listId}
              onClick={() => setExpanded((v) => !v)}
            >
              {effectiveExpanded ? "간략히 보기" : `전체 명단 보기 (+${hiddenCount}명)`}
              <IconChevronDown
                width={16}
                height={16}
                style={{ transform: effectiveExpanded ? "rotate(180deg)" : "none" }}
              />
            </button>
          ) : null}
        </>
      )}
    </SectionShell>
  );
}
