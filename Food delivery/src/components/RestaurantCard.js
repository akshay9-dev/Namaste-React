import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);

  const { name, cuisines, avgRatingString, sla, costForTwo } = resData?.info; //we destructuered all from resData.info.

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4> {avgRatingString} stars</h4>
      <h4> {costForTwo}</h4>
      <h4> {sla?.slaString}</h4>
      <h4> User: {loggedInUser}</h4>
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
