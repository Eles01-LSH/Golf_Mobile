import type { Group, Participant } from "../data/programBookData";
import AssociationBadge from "./AssociationBadge";

interface ParticipantCardProps {
  participant: Participant;
  group?: Group;
}

export default function ParticipantCard({ participant, group }: ParticipantCardProps) {
  return (
    <li className="participant-card">
      <span className="participant-card__no">{participant.no}</span>
      <div className="participant-card__main">
        <div className="participant-card__name">{participant.name}</div>
        <div className="participant-card__company">{participant.company}</div>
        {group ? (
          <div className="participant-card__meta">
            {group.groupNo}조
            {group.teeTime ? ` · ${group.teeTime}` : ""}
            {group.course ? ` · ${group.course}` : ""}
          </div>
        ) : null}
      </div>
      <AssociationBadge association={participant.association} />
    </li>
  );
}
