import type { ScheduleItem } from "../data/programBookData";

function toMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function isNow(item: ScheduleItem, now: Date): boolean {
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const start = toMinutes(item.start);
  const end = item.end ? toMinutes(item.end) : start + 1;
  return nowMinutes >= start && nowMinutes < end;
}

interface ScheduleTimelineProps {
  items: ScheduleItem[];
  eventDate: string; // "2026-09-30"
}

export default function ScheduleTimeline({ items, eventDate }: ScheduleTimelineProps) {
  const now = new Date();
  const isEventDay = now.toISOString().slice(0, 10) === eventDate;

  return (
    <ol className="timeline">
      {items.map((item) => {
        const active = isEventDay && isNow(item, now);
        return (
          <li key={item.id} className={`timeline__row${active ? " is-now" : ""}`}>
            <time className="timeline__time">
              {item.start}
              {item.end ? (
                <>
                  <br />~{item.end}
                </>
              ) : (
                " ~"
              )}
            </time>
            <div className="timeline__dot" aria-hidden="true" />
            <div>
              <h3 className="timeline__title">{item.title}</h3>
              {item.location ? <p className="timeline__loc">{item.location}</p> : null}
              {item.detail ? (
                <div className="timeline__sub">
                  {item.detail.map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
