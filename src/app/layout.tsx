import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanstackQueryProvider from "@/components/Provider/TanstackQueryProvider";

export const metadata: Metadata = {
  title: "RBFilm",
  description: "RBFilm, Creator and Contents Director Web Site",
};
interface LayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}
export default function RootLayout({ children, modal }: LayoutProps) {
  return (
    <html lang="ko">
      <body>
        <header>
          <Header />
        </header>
        <main>
          <TanstackQueryProvider>
            {children}
            {modal}
          </TanstackQueryProvider>
        </main>
      </body>
    </html>
  );
}
