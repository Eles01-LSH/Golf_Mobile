import { createContext, useContext } from "react";

export interface LightboxPhoto {
  src: string;
  alt: string;
}

export interface LightboxContextValue {
  open: (photo: LightboxPhoto) => void;
}

export const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox(): LightboxContextValue {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within PhotoLightboxProvider");
  return ctx;
}
