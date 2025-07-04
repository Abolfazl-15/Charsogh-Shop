import React from "react";
import NewShop from "./NewShop";
import ProductSlider from "./ProductSlider";

const AllShop = () => {
  return (
    <div className="flex flex-col mr-auto ml-auto xl:w-[1200px]">
      <ProductSlider />
      <NewShop />
    </div>
  );
};

export default AllShop;
