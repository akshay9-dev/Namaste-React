import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("Items Data:", items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action once clicked
    dispatch(addItem(item));
  };

  console.log("dksjfhg:", items);

  return (
    <div>
      {items.map((category) => (
        <div key={category.categoryId}>
          <h2 className="font-bold">{category.title}</h2>
          {items.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="p-2 m-2 border-gray-200 border-b-1 text-left flex justify-between">
              <div className="w-9/12">
                <div className="py-2">
                  <span className="font-semibold">
                    {item?.card?.info?.name}
                  </span>
                  <span>
                    - ₹
                    {item?.card?.info?.price
                      ? item?.card?.info?.price / 100
                      : item?.card?.info?.defaultPrice}
                  </span>
                </div>
                <p className="text-xs">{item?.card?.info?.description}</p>
              </div>
              <div className="w-3/12 p-4">
                <div>
                  <button
                    className=" mx-11 my-20  absolute  px-4 py-2 bg-black text-white rounded-lg shadow-md cursor-pointer "
                    onClick={() => handleAddItem(item)}>
                    Add +
                  </button>
                </div>
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  className="w-full h-26 object-cover "
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
