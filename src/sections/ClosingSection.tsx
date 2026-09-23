import { eventInfo } from "../data/programBookData";
import { IconTrophy } from "../components/icons";

export default function ClosingSection() {
  return (
    <footer className="closing">
      <IconTrophy className="closing-mark" width={30} height={30} />
      <p className="closing-name label-font">YEONGHONAM FRIENDSHIP CUP</p>
      <p className="closing-yr label-font">
        {eventInfo.editionLabel} · {eventInfo.date.slice(0, 4)}
      </p>
    </footer>
  );
}
