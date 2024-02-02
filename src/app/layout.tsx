import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "RBFilm",
  description: "RBFilm, Creator and Contents Director Web Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        {/* <footer>
          {" "}
          <Footer />
        </footer> */}
      </body>
    </html>
  );
}
