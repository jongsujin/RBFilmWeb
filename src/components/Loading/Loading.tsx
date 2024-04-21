import React from "react";
import Lottie from "react-lottie-player";
import loading from "./loading.json";

function Loading() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Lottie
        loop
        animationData={loading}
        style={{ width: 150, height: 150 }}
      />
    </div>
  );
}

export default Loading;
