import { LOGO_URL } from "../utils/constants";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log(useState()); // This will display result of calling the useState() function in our browsers developer console.
  /* 
  ///////// useEffect ///////////
  // When will be t6he useEfect called: It will called after evvery render of the component.
  // case 1: UseEffct without depndency array :useEffect will be called after every render of component. Header component in this case.
  useEffect(() => {
    console.log("useEffect Called");
  });
  // case 2: useEffectwith empty dependency array []: Then useEffect will be called  on initial render (just once).
  useEffect(() => {
    console.log("useEffect Called");
  }, []);
//Case 3: If there is a value inside the dependency array: When the value inside the dependency array changes only then the useEffect will be called that is useEffect is dependent on that value.
useEffect(() => {
  console.log("useEffect Called");
}, [count]);
*/
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-2xl m-2 sm:bg-amber-200 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/body">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact US</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart🛒- ({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}>
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header; // we expoeted the Header file in order to inport it main app.js file.

// JavaScript variables does not work in React if we want to change our component dynamically. Thats why we use local state variable. Eg. const [btnNameReact, setBtnNameReact] = useState("Login");
