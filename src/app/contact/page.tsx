import React from "react";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Title from "@/components/Title/Title";

function Estimate() {
  return (
    <div className="border h-screen">
      <div className="mb-[600px]">
        <Banner />
      </div>
      <NavBar tab="CONTACT" />
      <div className="mt-28">
        <Title />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h1>텍스트</h1>
          <div>
            <h1>폼</h1>
          </div>
        </div>
        <div>
          <h1>사진1</h1>
          <h1>텍스트</h1>
          <h1>사진2</h1>
        </div>
      </div>
    </div>
  );
}

export default Estimate;
