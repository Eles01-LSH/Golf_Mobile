import type { Group, Participant } from "../data/programBookData";
import { IconFlag } from "./icons";
import AssociationBadge from "./AssociationBadge";

interface GroupCardProps {
  group: Group;
  participants: Participant[];
}

export default function GroupCard({ group, participants }: GroupCardProps) {
  return (
    <article className="group-card" id={`group-${group.groupNo}`}>
      <div className="group-card__head">
        <span className="group-card__title">
          {group.groupNo}조{group.teeTime ? ` · ${group.teeTime}` : ""}
        </span>
        {group.needsVerification ? <span className="badge badge--warn">확인 필요</span> : null}
      </div>
      <div className="group-card__course">
        <IconFlag width={16} height={16} />
        {group.course ?? "코스 확인 필요"}
      </div>
      <div className="group-card__players">
        {participants.length > 0 ? (
          participants.map((p) => (
            <span key={p.id} className="group-card__player">
              {p.name}
              <AssociationBadge association={p.association} />
            </span>
          ))
        ) : (
          <span className="group-card__player">참가자 명단 확인 필요</span>
        )}
      </div>
    </article>
  );
}
