import SectionShell from "../components/SectionShell";
import SectionHeader from "../components/SectionHeader";
import { committeeMembers } from "../data/programBookData";

export default function CommitteeSection() {
  return (
    <SectionShell id="committee">
      <SectionHeader eyebrow="Organization" title="준비위원회" />

      <div className="committee-card">
        {committeeMembers.map((m) => (
          <div className="committee-row" key={m.id}>
            <span className="role">{m.role}</span>
            <div className="who">
              <span className="name">{m.name}</span>
              {m.description ? <span className="desc">{m.description}</span> : null}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
