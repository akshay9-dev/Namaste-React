import RestaurantCard, { withPromotedLabel } from "./RestaurantCard.js";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

// not using key (not acceptable) < indes as key (not recommanded) < unique id (best practice)

const Body = () => {
  // useState () : local State variable - super powerful variable:
  const [ListOfRestaurants, setListOfRestaurant] = useState([]); // this means we created the variable ListOfRestaurant and we give it array [] in useState{[]}. for updating in state variable we use second parameter here that is setListOfRestaurant in this case. We cannot modify the ListOfRestaurant directely like normal variable. thats why we use setListOfRestaurant method to update it. We can update our UI using state variable but we cannot do it using normal variable. This is called as render. Whenever a state variable updates react re renders the component. The logic of updating the UI is known asre rendering. React is really fast at DOM operation thats why is super fast. It keeps the data layer in si=ync with the UI layer.6
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  //   //Normal JS variable:
  //   let listOfRestaurants = []; This is same as above. Just craeted using useState.
  // listOfRestaurant = ["Abc"]; This is how we update the variable in nornal JS variable

  // useEffect(): Handles the side effect(APi calls,eventL:isteners).
  // It takes 2 arguments one is call back function and 2nd is dependency array. useEffect is used when we want to do something after rendering the component then we write it inside the useEffect about what to do after rendering thecomponent.

  const [searchText, setSearchText] = useState();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log(ListOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  /*  
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };
*/

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      // console.log("Full API Response: ", json); // Check if data is coming correctly

      // Debugging: Check if the specific property exists
      // console.log(
      //   "Fetched Restaurants: ",
      //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );

      setListOfRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        {" "}
        Looks like you are offline!!! Please check your internet connection
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  // Conditional rendering: A rendering based on some condition called as contional rendering.
  //   if (ListOfRestaurants.length === 0) {
  //     return <Shimmer />;
  //   } // We can write it in return as well like this: ListOfRestaurants.length === 0 ? <Shimmer /> :

  return ListOfRestaurants.length === 0 || !ListOfRestaurants ? (
    <Shimmer /> // Conditional rendering we used ternary operator(?) here..
  ) : (
    <div className="body mx-5">
      <div className="filter flex justify-center items-center mt-6 ">
        <div className="search flex items-center space-x-4  p-4 rounded-lg ">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black rounded-full w-140 p-2 pl-4"
            value={searchText}
            placeholder="Search for your favorite food..."
            onChange={(e) => {
              console.log(e);
              setSearchText(e.target.value);
            }} // fir search text
          />
          <button
            className="py-2 px-6 bg-green-300 m-4 rounded-full hover:bg-green-400 transition "
            onClick={() => {
              //Filter the restaurant cards and update the UI.
              // I will need search text
              console.log(searchText);

              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}>
            Search
          </button>
        </div>

        {/* <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => {
              const filterList = ListOfRestaurants.filter(
                (res) => parseFloat(res.info.avgRatingString) > 4
              );
              setListOfRestaurant(filterList); //  we pass the filteredList to setListOfRestaurant. for upadating the array that is ListOfRestaurant. And when we click the list will filter the restaurant.
            }}>
            Top Rated Restaurants
          </button>
        </div> */}
        {/* <div>
          <label>UserName :</label>
          <input
            className="border border-black mt-11 p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}></input>
        </div> */}
      </div>
      <div className="res-container flex flex-wrap">
        {
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}>
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
          // This above map method iterated over each object of restaurant inside resList array and maps it. Remember always that whenevey you using map method that i whenever your looping on to anything you have to always give a key over here. Why it is important? Becauses when suppose we dont provide unique key to the component the when a new component is added, card in this case then react will reload/render/updates all the cmponents. and if the unique key or id is provided then react only updates/render/reload that component. it will be really time consuming when we have more than 100 cards/components. remember the key should be unique. React uniquely identifies the component when key is provided.

          // We can use the index as a key here but it is not recommanded by react itself. Use it only if you dont have unique ID.
          //resList.map((restaurant, index) => (
          //  <RestaurantCard key={index} resData={restaurant} />
        }
      </div>
      <div className="text-center m-10 mb-20">
        <button className="px-6 py-2 bg-green-400  text-white rounded-lg border-2 border-green-600 hover:bg-green-600 transition-all">
          Load More +
        </button>
      </div>
    </div>
  );
};
//<RestaurantCard resName="Splash Mount" cuisine="Biryani, North Indian, Asian"/> This is call passing props to th components directely in order to make a component dynamic.

export default Body;

//Whenever state variables update, react triggers reconciliation cycle(re-renders the component)

/*above code should be like below
 {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant?.info} />
              ) : (
                <RestaurantCard resData={restaurant?.info} />
              )}

*/
