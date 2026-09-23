import type { AwardPrizeEntry, AwardTrophyEntry, AwardSouvenirEntry } from "../data/programBookData";
import { IconTrophy } from "./icons";

export function AwardPrizeRow({ item }: { item: AwardPrizeEntry }) {
  return (
    <div className={`award-row${item.highlight ? " highlight" : ""}`}>
      <span className="award-row__name">
        {item.highlight ? <IconTrophy className="trophy" width={18} height={18} /> : null}
        {item.name}
      </span>
      <span className="award-row__detail">
        {item.product}
        <span className="award-row__count">
          {item.quantity}개{item.note ? ` · ${item.note}` : ""}
        </span>
      </span>
    </div>
  );
}

export function AwardTrophyRow({ item }: { item: AwardTrophyEntry }) {
  return (
    <div className="award-row">
      <span className="award-row__name">{item.name}</span>
      <span className="award-row__detail">
        상패 및 부상
        <span className="award-row__count">{item.quantity}개</span>
      </span>
    </div>
  );
}

export function AwardSouvenirRow({ item }: { item: AwardSouvenirEntry }) {
  return (
    <div className="award-row">
      <span className="award-row__name">{item.provider}</span>
      <span className="award-row__detail">
        {item.product}
        <span className="award-row__count">
          {item.quantity}개{item.note ? ` · ${item.note}` : ""}
        </span>
      </span>
    </div>
  );
}
