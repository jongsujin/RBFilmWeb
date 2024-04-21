import React from "react";

function Skeleton() {
  return (
    <div className="animate-pulse space-y-2">
      <div className="bg-skeletonHighlight  w-[429px] h-[15rem] max-sm:w-[170px] max-sm:h-[96px] max-md:w-[247px] max-md:h-[139px] max-xl:w-[220px] max-xl:h-[124px] max-2xl:w-[313px] max-2xl:h-[176px] xxl:w-[840px] xxl:h-[472.5px] rounded" />
    </div>
  );
}

export default Skeleton;
