import { useCallback, useEffect, useState, type ReactNode } from "react";
import { IconClose } from "./icons";
import { LightboxContext, type LightboxPhoto } from "../hooks/useLightbox";

export function PhotoLightboxProvider({ children }: { children: ReactNode }) {
  const [photo, setPhoto] = useState<LightboxPhoto | null>(null);

  const open = useCallback((p: LightboxPhoto) => setPhoto(p), []);
  const close = useCallback(() => setPhoto(null), []);

  useEffect(() => {
    if (!photo) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [photo, close]);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {photo ? (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={photo.alt}
          onClick={close}
        >
          <button type="button" className="lightbox-close" onClick={close} aria-label="닫기">
            <IconClose width={22} height={22} />
          </button>
          <img
            src={photo.src}
            alt={photo.alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="lightbox-caption">{photo.alt}</p>
        </div>
      ) : null}
    </LightboxContext.Provider>
  );
}
