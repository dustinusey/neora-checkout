"use client";
import React, { useState } from "react";
import Totals from "./Totals";

import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import CartCard from "./CartCard";
import PromoCode from "./PromoCode";

const Accordion = ({ title, data, cartToggleStatus }) => {
  const [cartToggle, setCartToggle] = useState(cartToggleStatus);
  return (
    <div>
      <div
        onClick={() => {
          setCartToggle(!cartToggle);
        }}
        className="flex justify-between items-center gap-2 rounded-xl bg-zinc-100 py-3 px-5 cursor-pointer hover:bg-zinc-200 duration-200 "
      >
        <p className="cart-title">{title} </p>
        {cartToggle ? <FaChevronDown /> : <FaChevronRight />}
      </div>
      {cartToggle && (
        <>
          <div className="py-3 px-3">
            {data.products.map((product, index) => {
              return <CartCard product={product} key={index} />;
            })}
          </div>
          <div className="px-3">
            <PromoCode />
          </div>

          <Totals data={data} />
        </>
      )}
    </div>
  );
};

export default Accordion;
