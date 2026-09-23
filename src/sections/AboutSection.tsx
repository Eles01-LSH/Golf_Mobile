import SectionShell from "../components/SectionShell";
import SectionHeader from "../components/SectionHeader";
import Accordion from "../components/Accordion";
import SpeechCard from "../components/SpeechCard";
import SpeechDisclosure from "../components/SpeechDisclosure";
import {
  historyIntro,
  historyMilestones,
  historyFullText,
  hostSpeech,
  congratulatorySpeeches,
} from "../data/programBookData";

export default function AboutSection() {
  return (
    <SectionShell id="about">
      <SectionHeader eyebrow="History" title="대회 안내" />
      <p className="section-lede">{historyIntro}</p>

      <ol className="timeline">
        {historyMilestones.map((m) => (
          <li key={m.id} className="timeline__row">
            <time className="timeline__time">{m.year}</time>
            <div className="timeline__dot" aria-hidden="true" />
            <div>
              <p className="timeline__loc" style={{ marginTop: 0 }}>
                {m.text}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <Accordion title="전체 내용 보기">
        {historyFullText.split("\n\n").map((p, i) => (
          <p key={i} style={{ margin: i === 0 ? 0 : "12px 0 0" }}>
            {p}
          </p>
        ))}
      </Accordion>

      <div style={{ marginTop: 36 }}>
        <SectionHeader eyebrow="Welcome" title="대회사 · 축사" />

        <SpeechCard speech={hostSpeech} />

        <p className="sub-label">축사 ({congratulatorySpeeches.length})</p>
        <div className="speech-list">
          {congratulatorySpeeches.map((speech) => (
            <SpeechDisclosure key={speech.id} speech={speech} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
