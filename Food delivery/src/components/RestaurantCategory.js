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
      <div className="w-6/12 mx-auto my-4 bg-white rounded-lg shadow-md transition-all  ">
        <div
          className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 rounded-t-lg hover:bg-gray-100 transition-colors"
          onClick={handleClick}>
          <span className="font-bold text-l">
            {data.title} ({getTotalItemsCount(data)})
          </span>
          <span
            className={`transition-transform duration-300 ${
              showItem ? "rotate-180" : "rotate-0"
            }`}>
            ⬇
          </span>
        </div>
        {/* {Accordian Body} */}
        <div className="border-t border-gray-300">
          {showItem && <ItemList items={data?.itemCards || data?.categories} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
