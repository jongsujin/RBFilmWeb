import React from "react";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";

function Estimate() {
  return (
    <div className="border mr-[154px] ml-[154px]">
      <Banner />
      <NavBar tab="CONTACT" />
      <h1>견적 페이지</h1>
    </div>
  );
}

export default Estimate;
