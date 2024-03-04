import React from "react";

interface FilmDataProps {
  filmUrl: string;
}

function MainFilm({ filmUrl }: FilmDataProps) {
  return (
    <div className="w-full h-[820px] mt-6 mb-[420px]  bg-black bg-opacity-50">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={filmUrl} type="video/mp4" />
        해당 브라우저에서는 재생할 수 없습니다.
      </video>
    </div>
  );
}

export default MainFilm;
