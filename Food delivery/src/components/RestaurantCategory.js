import { useState } from "react";
import ItemList from "./ItemList";

// This is to het the total number if item list
const getTotalItemsCount = (data) => {
  return data.categories
    ? data.categories.reduce(
        (total, category) => total + (category.itemCards?.length || 0),
        0
      )
    : data.itemCards?.length || 0;
};

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  //   console.log(data);
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* {Header} */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg  ">
        <div
          className="flex justify-between cursor-pointer p-4"
          onClick={handleClick}>
          <span className="font-bold text-l">
            {data.title} ({getTotalItemsCount(data)})
          </span>
          <span>⬇</span>
        </div>
        {/* {Accordian Body} */}
        {showItem && <ItemList items={data?.itemCards || data?.categories} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
