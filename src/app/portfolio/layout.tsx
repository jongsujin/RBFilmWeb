import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "RBFilm",
  description: "RBFilm, Creator and Contents Director Web Site",
};
type PortFolioLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};
export default function PortFolioLayout({
  children,
  modal,
}: PortFolioLayoutProps) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
