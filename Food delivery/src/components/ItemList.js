import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, isCartView = false }) => {
  console.log("Items Data:", items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action once clicked
    dispatch(addItem(item));
  };

  console.log("dksjfhg:", items);

  return (
    <div mx-auto max-w-4xl p-4>
      {items.map((category) => (
        <div key={category.categoryId} className="mb-6">
          {!isCartView && (
            <h2 className="font-bold m-4 pb-2 pt-2 text-gray-800 bg-green-100">
              {category.title}
            </h2>
          )}
          {category.itemCards.map((item) => (
            <div
              key={item?.card?.info?.id}
              className={`flex text-left justify-between p-4 border-b border-gray-200 bg-white shadow-sm transition-all hover:shadow-md ${
                isCartView ? "bg-gray-50 border border-gray-300" : ""
              }`}>
              {/* For Normal View */}
              {!isCartView ? (
                <>
                  <div className="w-3/4 flex flex-col">
                    <div className="pt-4 pb-2">
                      <span className="font-semibold text-lg text-gray-900">
                        {item?.card?.info?.name}
                      </span>
                      <span className="text-gray-600 ml-2">
                        - ₹
                        {item?.card?.info?.price
                          ? item?.card?.info?.price / 100
                          : item?.card?.info?.defaultPrice / 100}
                        .00
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs">
                      {item?.card?.info?.description}
                    </p>
                  </div>
                  <div className="relative p-4 w-1/4 flex flex-col items-center">
                    <img
                      src={CDN_URL + item?.card?.info?.imageId}
                      className="w-full h-26 object-cover rounded-lg"
                    />
                    <button
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white font-medium rounded-xl py-2 w-24 hover:bg-gray-800 transition-all cursor-pointer"
                      onClick={() => handleAddItem(item)}>
                      Add +
                    </button>
                  </div>
                </>
              ) : (
                /* For Cart View */
                <div className="w-full flex justify-between items-center">
                  {/* Left Side: Name and Price */}
                  <div className="flex flex-col justify-center w-3/4">
                    <span className="font-semibold text-lg text-gray-900">
                      {item?.card?.info?.name}
                    </span>
                    <span className="text-gray-600">
                      - ₹
                      {item?.card?.info?.price
                        ? item?.card?.info?.price / 100
                        : item?.card?.info?.defaultPrice / 100}
                      .00
                    </span>
                  </div>

                  {/* Right Side: Image and Remove Button */}
                  <div className="relative w-1/4 flex flex-col items-center">
                    <img
                      src={CDN_URL + item?.card?.info?.imageId}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <button className="mt-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all">
                      Remove
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
