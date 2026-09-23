import { useId, useMemo, useState } from "react";
import SectionShell from "../components/SectionShell";
import SectionHeader from "../components/SectionHeader";
import SearchBar from "../components/SearchBar";
import GroupCard from "../components/GroupCard";
import EmptyState from "../components/EmptyState";
import VerifyBanner from "../components/VerifyBanner";
import AssociationBadge from "../components/AssociationBadge";
import CourseScorecardTable from "../components/CourseScorecardTable";
import { IconChevronDown } from "../components/icons";
import {
  groups,
  groupsDataAvailable,
  participants,
  normalize,
  findGroupByParticipantId,
  getGroupParticipants,
  courseScorecards,
  type Course,
} from "../data/programBookData";

const PREVIEW_COUNT = 4;

export default function GroupsSection() {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [infoCourse, setInfoCourse] = useState<Course>("힐");
  const listId = useId();

  const activeCard = courseScorecards.find((c) => c.course === infoCourse)!;

  const normalizedQuery = normalize(query);

  const matchedParticipants = useMemo(() => {
    if (!normalizedQuery) return [];
    return participants.filter((p) => normalize(p.name).includes(normalizedQuery));
  }, [normalizedQuery]);

  const shownGroups = expanded ? groups : groups.slice(0, PREVIEW_COUNT);
  const hiddenCount = groups.length - shownGroups.length;

  return (
    <SectionShell id="groups">
      <SectionHeader eyebrow="Tee Time" title="조 편성" side={`총 ${groups.length}개 조`} />

      <p className="sub-label">코스 정보</p>
      <div className="tab-switch" role="tablist" aria-label="코스 선택">
        {courseScorecards.map((c) => (
          <button
            key={c.course}
            type="button"
            role="tab"
            aria-selected={infoCourse === c.course}
            className={infoCourse === c.course ? "active" : ""}
            onClick={() => setInfoCourse(c.course)}
          >
            {c.englishName}({c.course})
          </button>
        ))}
      </div>
      <CourseScorecardTable card={activeCard} />

      {!groupsDataAvailable ? (
        <VerifyBanner>
          <span>
            조 편성표 원본 이미지가 아직 전달되지 않아 각 조의 티오프 시간·코스·참가자 배정을
            비워두었습니다. 원본을 받는 대로 채워 넣으면 아래 검색·필터 기능이 자동으로
            동작합니다.
          </span>
        </VerifyBanner>
      ) : null}

      <div style={{ marginBottom: 12 }}>
        <SearchBar
          id="group-search"
          value={query}
          onChange={setQuery}
          placeholder="참가자 이름으로 조 찾기"
        />
      </div>

      {normalizedQuery ? (
        <div style={{ marginBottom: 24 }}>
          {matchedParticipants.length === 0 ? (
            <EmptyState message={`'${query}'와(과) 일치하는 참가자가 없습니다.`} />
          ) : (
            <ul className="participant-list">
              {matchedParticipants.map((p) => {
                const group = findGroupByParticipantId(p.id);
                return (
                  <li key={p.id} className="participant-card">
                    <div className="participant-card__main">
                      <div className="participant-card__name">{p.name}</div>
                      <div className="participant-card__company">{p.company}</div>
                      <div className="participant-card__meta">
                        {group
                          ? `${group.groupNo}조 · ${group.teeTime ?? "시간 확인 필요"} · ${group.course ?? "코스 확인 필요"}`
                          : "조 편성 확인 필요"}
                      </div>
                    </div>
                    <AssociationBadge association={p.association} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ) : (
        <>
          <div style={{ marginTop: 18 }} id={listId}>
            {shownGroups.map((g) => (
              <GroupCard key={g.id} group={g} participants={getGroupParticipants(g)} />
            ))}
          </div>

          {groups.length > PREVIEW_COUNT ? (
            <button
              type="button"
              className="list-more-btn"
              aria-expanded={expanded}
              aria-controls={listId}
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? "간략히 보기" : `전체 조 보기 (+${hiddenCount}개 조)`}
              <IconChevronDown
                width={16}
                height={16}
                style={{ transform: expanded ? "rotate(180deg)" : "none" }}
              />
            </button>
          ) : null}
        </>
      )}
    </SectionShell>
  );
}
