import React from "react";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Title from "@/components/Title/Title";

function PortFolio() {
  return (
    <div>
      <div className="relative mt-20">
        <Banner bannerImage="service0.png" />
      </div>
      <div className="absolute bottom-[-15.5rem] right-0 left-0">
        <NavBar tab="PORTFOLIO" />
        <div className="mt-28 mb-48">
          <Title title="PORTFOLIO" content="포트폴리오" />
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
