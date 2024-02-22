import React from "react";

function ClientItem() {
  return (
    <div className="flex flex-col items-center mb-24">
      <div className="w-48 h-48 rounded-full bg-white shadow-photo shadow-gray" />
      <div className="w-12 h-1 bg-white mt-6" />
      <p className="text-headline1 mt-6">제시 뉴욕</p>
    </div>
  );
}

export default ClientItem;
