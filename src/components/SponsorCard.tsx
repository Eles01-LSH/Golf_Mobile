import type { SponsorEntry } from "../data/programBookData";
import { formatSponsorEntryValue } from "../data/programBookData";

export default function SponsorRow({ entry }: { entry: SponsorEntry }) {
  return (
    <li className="sponsor-row">
      <div className="sponsor-row__who">
        <div className="sponsor-row__company">
          {entry.no}. {entry.name}
        </div>
        {entry.company || entry.role ? (
          <div className="sponsor-row__name">
            {[entry.company, entry.role].filter(Boolean).join(" · ")}
          </div>
        ) : null}
      </div>
      <span className="sponsor-row__amount">{formatSponsorEntryValue(entry)}</span>
    </li>
  );
}
