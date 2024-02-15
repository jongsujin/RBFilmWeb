import type { Metadata } from "next";
import PortFolio from "./page";

export const metadata: Metadata = {
  title: "RBFilm",
  description: "RBFilm, Creator and Contents Director Web Site",
};

export default function PortFolioLayout({
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <PortFolio />
      {modal}
    </>
  );
}
