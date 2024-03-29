import type { Metadata } from "next";
import { ReactNode } from "react";
import Footer from "@/components/Footer/Footer";

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
      <div className="mt-56 w-[80%] mx-auto max-xl:w-[80%] max-2xl:w-[80%]">
        <Footer />
      </div>
    </>
  );
}
