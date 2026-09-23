import type { CourseScorecard } from "../data/programBookData";
import { courseTotals } from "../data/programBookData";

export default function CourseScorecardTable({ card }: { card: CourseScorecard }) {
  const totals = courseTotals(card);

  return (
    <div className="scorecard-wrap">
      <div className="scorecard-table-scroll">
        <table className="scorecard-table">
          <tbody>
            <tr>
              <th>Hole</th>
              {card.holes.map((h) => (
                <td key={h.hole}>{h.hole}</td>
              ))}
              <td className="scorecard-total">OUT</td>
            </tr>
            <tr>
              <th>M</th>
              {card.holes.map((h) => (
                <td key={h.hole}>{h.meters}</td>
              ))}
              <td className="scorecard-total">{totals.meters}</td>
            </tr>
            <tr>
              <th>Yd</th>
              {card.holes.map((h) => (
                <td key={h.hole}>{h.yards}</td>
              ))}
              <td className="scorecard-total">{totals.yards}</td>
            </tr>
            <tr>
              <th>Par</th>
              {card.holes.map((h) => (
                <td key={h.hole}>{h.par}</td>
              ))}
              <td className="scorecard-total">{totals.par}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="scorecard-summary">
        {card.englishName}({card.course}) · PAR {totals.par} · {totals.meters}m / {totals.yards}yd
      </p>
    </div>
  );
}
