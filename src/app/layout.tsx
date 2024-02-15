import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanstackQueryProvider from "@/components/Provider/TanstackQueryProvider";

export const metadata: Metadata = {
  title: "RBFilm",
  description: "RBFilm, Creator and Contents Director Web Site",
};
export type RootLayoutProps = { children: React.ReactNode };
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        <header>
          <Header />
        </header>
        <main>
          <TanstackQueryProvider>{children}</TanstackQueryProvider>
        </main>
      </body>
    </html>
  );
}
