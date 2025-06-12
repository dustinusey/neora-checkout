import React from "react";

const CartCard = ({ product }) => {
  return (
    <div className="w-full space-y-10 ">
      <div className="flex items-start justify-start gap-2 my-5">
        {/* image */}
        <div className="w-[85px] h-[65px] bg-zinc-500/25 rounded-lg mr-3"></div>

        {/* info */}
        <div className="flex flex-col">
          <p className="font-bold">{product.productTitle}</p>
          <p className="opacity-50 text-sm">{product.productSD}</p>
          <p className="opacity-75 text-sm">QTY: {product.productQty}</p>
        </div>

        {/* price */}
        <p className="ml-auto font-semibold text-lg text-zinc-600">
          <sup>$</sup>
          {product.productPrice}
        </p>
      </div>
    </div>
  );
};

export default CartCard;
