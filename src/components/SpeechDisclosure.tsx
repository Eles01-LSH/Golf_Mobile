import { useId, useState } from "react";
import type { Speech } from "../data/programBookData";
import { useLightbox } from "../hooks/useLightbox";
import { IconChevronDown } from "./icons";

export default function SpeechDisclosure({ speech }: { speech: Speech }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const { open: openLightbox } = useLightbox();
  const photoAlt = `${speech.authorName} ${speech.authorRole} 사진`;

  return (
    <div className="accordion">
      <div className="speech-trigger">
        {speech.photoUrl ? (
          <button
            type="button"
            className="speaker-label__photo speaker-label__photo--zoomable"
            onClick={() => openLightbox({ src: speech.photoFullUrl ?? speech.photoUrl!, alt: photoAlt })}
            aria-label={`${photoAlt} 크게 보기`}
          >
            <img src={speech.photoUrl} alt="" />
          </button>
        ) : (
          <span className="speaker-label__photo" aria-hidden="true">
            {speech.authorName.slice(0, 1)}
          </span>
        )}

        <button
          type="button"
          className="accordion__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="speaker-label__text">
            <span className="speaker-label__name">{speech.authorName}</span>
            <span className="speaker-label__role">{speech.authorRole}</span>
          </span>
          <IconChevronDown className="accordion__chevron" width={18} height={18} />
        </button>
      </div>

      {open ? (
        <div id={panelId} className="accordion__panel" role="region">
          {speech.fullParagraphs.map((p, i) => (
            <p key={i} style={{ margin: i === 0 ? 0 : "12px 0 0" }}>
              {p}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
