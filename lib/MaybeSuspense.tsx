import { Suspense, SuspenseProps } from "react";

export const MaybeSuspense =
  typeof window === "undefined"
    ? ({ children }: SuspenseProps) => <>{children}</>
    : Suspense;
