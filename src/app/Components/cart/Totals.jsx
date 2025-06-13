import React from "react";

const Totals = ({ data }) => {
  return (
    <div className="space-y-2  my-8 text-sm w-full ">
      {data.totals.map((total, index) => {
        return (
          <div key={index} className="flex justify-between items-center px-7">
            <p>{total.title}</p>
            <p>
              <sup>$</sup>
              {total.total}
            </p>
          </div>
        );
      })}
      <div className="space-y-2 text-lg font-semibold w-full">
        <div className="flex justify-between items-center px-6 mt-5">
          <p>{data.total.title}</p>
          <p>
            <sup>$</sup>
            {data.total.total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Totals;
