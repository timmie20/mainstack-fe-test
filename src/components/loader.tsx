import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center">
        <img
          src="/loading.gif"
          alt="Loading..."
          className="size-30 object-contain"
        />
        <p className="mt-3 text-gray-600 text-sm font-medium">
          Loading all data...
        </p>
      </div>
    </div>
  );
}
