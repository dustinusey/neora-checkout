"use client";

import React, { createContext } from "react";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

export const AppState = createContext();

const todaysCart = {
  products: [
    {
      productTitle: "Product Title",
      productPrice: "00.00",
      productQty: "1",
      productSD: "Short product description",
    },
    {
      productTitle: "Product Title",
      productPrice: "00.00",
      productQty: "1",
      productSD: "Short product description",
    },
    {
      productTitle: "Product Title",
      productPrice: "00.00",
      productQty: "1",
      productSD: "Short product description",
    },
  ],
  totals: [
    { title: "Products", total: "00.00" },
    { title: "Estimated Shipping", total: "00.00" },
    { title: "Handling Fee", total: "00.00" },
    { title: "Estimated Tax", total: "00.00" },
  ],
  total: {
    title: "Estimated Total",
    total: "000.00",
  },
};
const edgeCart = {
  products: [
    {
      productTitle: "Product Title",
      productPrice: "00.00",
      productQty: "1",
      productSD: "16oz",
    },
  ],
  totals: [
    { title: "Products", total: "00.00" },
    { title: "Estimated Shipping", total: "00.00" },
    { title: "Handling Fee", total: "00.00" },
    { title: "Estimated Tax", total: "00.00" },
  ],
  total: {
    title: "Estimated Total",
    total: "000.00",
  },
};
const nextMonthsCart = {
  products: [
    {
      productTitle: "Product Title",
      productPrice: "00.00",
      productQty: "1",
      productSD: "16oz",
    },
    {
      productTitle: "Product Title",
      productPrice: "00.00",
      productQty: "1",
      productSD: "16oz",
    },
  ],
  totals: [
    { title: "Products", total: "00.00" },
    { title: "Estimated Shipping", total: "00.00" },
    { title: "Handling Fee", total: "00.00" },
    { title: "Estimated Tax", total: "00.00" },
  ],
  total: {
    title: "Estimated Total",
    total: "000.00",
  },
};

const page = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-6 w-full justify-start items-start m-auto px-8 ">
      <AppState.Provider value={{ todaysCart, edgeCart, nextMonthsCart }}>
        <Checkout />
        <Cart />
      </AppState.Provider>
    </div>
  );
};

export default page;
