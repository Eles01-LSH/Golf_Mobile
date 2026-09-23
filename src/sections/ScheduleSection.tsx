import SectionShell from "../components/SectionShell";
import SectionHeader from "../components/SectionHeader";
import ScheduleTimeline from "../components/ScheduleTimeline";
import { eventInfo, scheduleItems } from "../data/programBookData";

export default function ScheduleSection() {
  return (
    <SectionShell id="schedule">
      <SectionHeader eyebrow="Program" title="행사 일정" side={eventInfo.dateLabel} />
      <ScheduleTimeline items={scheduleItems} eventDate={eventInfo.date} />
    </SectionShell>
  );
}
