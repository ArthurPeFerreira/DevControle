import { ReactNode } from "react";

export function Conteiner({ children }: { children: ReactNode }) {
  return <div className="w-full max-w-7xl mx-auto px-2 mt-1">{children}</div>;
}
