import { useState } from "react";
import SectionShell from "../components/SectionShell";
import SectionHeader from "../components/SectionHeader";
import CourseScorecardTable from "../components/CourseScorecardTable";
import { courseScorecards, type Course } from "../data/programBookData";

export default function GroupsSection() {
  const [infoCourse, setInfoCourse] = useState<Course>("힐");

  const activeCard = courseScorecards.find((c) => c.course === infoCourse)!;

  return (
    <SectionShell id="groups">
      <SectionHeader eyebrow="Course" title="코스 정보" />

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
    </SectionShell>
  );
}
