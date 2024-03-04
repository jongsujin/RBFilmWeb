import NavBar from "@/components/NavBar/NavBar";
import ABOUT from "./about/page";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <NavBar tab="HOME" />
      <ABOUT />
    </div>
  );
}
