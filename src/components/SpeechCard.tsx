import { useId, useState } from "react";
import type { Speech } from "../data/programBookData";
import { useLightbox } from "../hooks/useLightbox";

export default function SpeechCard({ speech }: { speech: Speech }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const initial = speech.authorName.slice(0, 1);
  const { open: openLightbox } = useLightbox();
  const photoAlt = `${speech.authorName} ${speech.authorRole} 사진`;

  return (
    <div className="speech-card">
      <div className="speech-card__head">
        {speech.photoUrl ? (
          <button
            type="button"
            className="speech-card__photo speech-card__photo--zoomable"
            onClick={() => openLightbox({ src: speech.photoFullUrl ?? speech.photoUrl!, alt: photoAlt })}
            aria-label={`${photoAlt} 크게 보기`}
          >
            <img src={speech.photoUrl} alt="" />
          </button>
        ) : (
          <div className="speech-card__photo" aria-hidden="true">
            {initial}
          </div>
        )}
        <div>
          <div className="speech-card__title">{speech.title}</div>
          <div className="speech-card__byline">
            {speech.authorRole} {speech.authorName}
          </div>
        </div>
      </div>

      <div className="speech-card__body">
        {(open ? speech.fullParagraphs : speech.preview).map((line, i) => (
          <p key={i} style={{ margin: i === 0 ? 0 : "10px 0 0" }}>
            {line}
          </p>
        ))}
      </div>

      {speech.fullParagraphs.length > speech.preview.length || !open ? (
        <button
          type="button"
          className="speech-card__more"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "간략히 보기" : "축사 전문 보기"}
        </button>
      ) : null}
    </div>
  );
}
