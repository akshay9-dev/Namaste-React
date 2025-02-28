import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";

const RestaurantMenu = () => {
  //useParams hook is used for accesing dynamic route parameters from URL.
  const { resId } = useParams();

  //This will fetch the data from our custom created hook useRestaurantMenu. In order to make this component follow single responsibility principe that is just to display the data.

  const resInfo = useRestaurantMenu(resId);

  console.log("INFO:", resInfo);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  //This will filter out the categories fromn the restaurant menu
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  // console.log(categories);

  //   if (resInfo === null) return <Shimmer /> ; // This we can write it in return as well. If resInfo === null return <shimmer/> else return the below code.( ? ____ : this is turnary operator)

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} -{costForTwoMessage}
      </p>
      {/* {categories} */}
      {categories.map((category, index) => (
        //Contrioll;ed component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
