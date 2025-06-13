import React from "react";

const PrimaryCTA = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full lg:w-auto bg-zinc-700 text-white rounded-2xl py-3 px-16"
    >
      {title}
    </button>
  );
};

export default PrimaryCTA;
