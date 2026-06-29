import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-xl md:mr-[10%]">
      <img src="/NotFound.png" alt="Not Found Error" className="w-80" />
      <h1 className="text-4xl">NOT FOUND</h1>
      <p className="text-center">
        Try different keywords or remove search filters
      </p>
    </div>
  );
}

export default NotFound;
