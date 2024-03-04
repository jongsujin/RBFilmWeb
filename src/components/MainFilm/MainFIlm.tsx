import React from "react";

interface FilmDataProps {
  filmUrl: string;
}

function MainFilm({ filmUrl }: FilmDataProps) {
  return (
    <div className="w-full h-[820px] mt-6 mb-[420px]  bg-black bg-opacity-50">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={filmUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default MainFilm;
