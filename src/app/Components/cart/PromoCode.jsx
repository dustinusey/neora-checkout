import React from "react";
import { TbTags } from "react-icons/tb";

const PromoCode = () => {
  return (
    <div className="flex items-center gap-2 py-1 px-5 pr-2 border border-zinc-200 rounded-xl">
      <div className="text-3xl">
        <TbTags />
      </div>
      <input
        className="w-full ml-3 p-3 pl-0 outline-none"
        placeholder="Have a promo code?"
        type="text"
      />
      <button className="rounded-lg py-2 px-4 cursor-pointer hover:bg-zinc-100 font-semibold duration-200">
        Apply
      </button>
    </div>
  );
};

export default PromoCode;
