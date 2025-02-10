import { CDN_URL } from "../utils/constants";

// This is the inline CSS in React's JSX (style={styleCard}).
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRatingString, sla, costForTwo } = resData?.info; //we destructuered all from resData.info.

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4> {avgRatingString} stars</h4>
      <h4> {costForTwo}</h4>
      <h4> {sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
