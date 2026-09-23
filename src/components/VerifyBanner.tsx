import type { ReactNode } from "react";
import { IconAlert } from "./icons";

export default function VerifyBanner({ children }: { children: ReactNode }) {
  return (
    <div className="verify-banner" role="note">
      <IconAlert width={20} height={20} />
      <div>
        <strong>확인 필요</strong>
        {children}
      </div>
    </div>
  );
}
