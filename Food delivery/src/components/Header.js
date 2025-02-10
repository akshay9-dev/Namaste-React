import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/body">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
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
