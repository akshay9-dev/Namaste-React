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
    <div className="flex justify-between items-center shadow-2xl p-2 bg-gray-50 px-30">
      <div className="logo-container">
        <img className="w-20 rounded-3xl" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-6">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="hover:text-blue-600 transition-all">
            <Link to="/body">Home</Link>
          </li>
          <li className="font-bold hover:text-green-600 transition-all">
            <Link to="/cart">Cart🛒- ({cartItems.length} items)</Link>
          </li>
          <button
            className="login hover:text-blue-600 transition-all"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header; // we expoeted the Header file in order to inport it main app.js file.

// JavaScript variables does not work in React if we want to change our component dynamically. Thats why we use local state variable. Eg. const [btnNameReact, setBtnNameReact] = useState("Login");
