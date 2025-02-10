import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

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

  const [searchText, setSearchText] = useState(" ");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // Conditional rendering: A rendering based on some condition called as contional rendering.
  //   if (ListOfRestaurants.length === 0) {
  //     return <Shimmer />;
  //   } // We can write it in return as well like this: ListOfRestaurants.length === 0 ? <Shimmer /> :

  return ListOfRestaurants.length === 0 ? (
    <Shimmer /> // Conditional rendering we used ternary operator(?) here..
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            console.log(e);
            setSearchText(e.target.value);
          }} // fir search text
        />
        <button
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
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = ListOfRestaurants.filter(
              (res) => res.info.avgRatingString > 4
            );
            setListOfRestaurant(filterList); //  we pass the filteredList to setListOfRestaurant. for upadating the array that is ListOfRestaurant. And when we click the list will filter the restaurant.
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
          // This above map method iterated over each object of restaurant inside resList array and maps it. Remember always that whenevey you using map method that i whenever your looping on to anything you have to always give a key over here. Why it is important? Becauses when suppose we dont provide unique key to the component the when a new component is added, card in this case then react will reload/render/updates all the cmponents. and if the unique key or id is provided then react only updates/render/reload that component. it will be really time consuming when we have more than 100 cards/components. remember the key should be unique. React uniquely identifies the component when key is provided.

          // We can use the index as a key here but it is not recommanded by react itself. Use it only if you dont have unique ID.
          //resList.map((restaurant, index) => (
          //  <RestaurantCard key={index} resData={restaurant} />
        }
      </div>
    </div>
  );
};
//<RestaurantCard resName="Splash Mount" cuisine="Biryani, North Indian, Asian"/> This is call passing props to th components directely in order to make a component dynamic.

export default Body;

//Whenever state variables update, react triggers reconciliation cycle(re-renders the component)
