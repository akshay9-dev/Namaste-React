import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  console.log(resData.info);
  const { loggedInUser } = useContext(UserContext);

  const { name, cuisines, avgRatingString, sla, costForTwo } = resData?.info; //we destructuered all from resData.info.

  return (
    <div
      data-testid="resCard"
      className="relative m-4 p-2 w-[250px] rounded-xl bg-white shadow-lg hover:scale-102 transition duration-300 hover:shadow-xl hover:bg-gray-100 flex flex-col justify-between">
      <img
        className="rounded-lg w-full h-[160px] object-cove"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="text-gray-500 text-sm"> {cuisines.join(", ")}</h4>
      <div className="flex justify-between mt-2 mb-2">
        <h4 className="text-green-600 font-semibold">{avgRatingString} ⭐</h4>
        <h4 className="text-gray-500 text-sm">⏳ {sla?.slaString}</h4>
      </div>

      <h4 className="text-gray-700 ">💰 {costForTwo}</h4>
    </div>
  );
};

/////// Higher order component

//// Input:- RestaurantCard ===> RestrocardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <lable className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted{" "}
        </lable>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
