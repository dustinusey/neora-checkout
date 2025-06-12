"use client";
import { useContext, useState } from "react";
import { FaShare } from "react-icons/fa";
import { AppState } from "../page";
import Accordion from "./Accordion";

const Cart = () => {
  const { todaysCart, edgeCart, nextMonthsCart } = useContext(AppState);
  return (
    <div className="ml-auto text-zinc-800">
      <div className="mb-5 rounded-xl flex items-center gap-2 justify-between py-4 px-8 bg-white ">
        <div>
          <p>Your cart is ready to share!</p>
          <p className="text-sm opacity-50">
            Items will be saved in your cart for 14 days.
          </p>
        </div>
        <button className="rounded-lg py-2 px-4 cursor-pointer bg-zinc-100 hover:bg-zinc-200 duration-200">
          <FaShare />
        </button>
      </div>
      <div className="min-w-[500px] bg-white p-6 rounded-xl ml-auto text-zinc-800 space-y-6">
        {/* share callout */}

        {/* todays cart */}
        <Accordion
          title={`Today's Order (${todaysCart.products.length})`}
          data={todaysCart}
          cartToggleStatus={true}
        />
        {/* edge cart */}
        <Accordion
          title={`Next Month's Edge Order (${edgeCart.products.length})`}
          data={edgeCart}
          cartToggleStatus={false}
        />
        {/* next month's cart */}
        <Accordion
          title={`Next Month's Order (${nextMonthsCart.products.length})`}
          data={nextMonthsCart}
          cartToggleStatus={false}
        />
      </div>
    </div>
  );
};

export default Cart;
