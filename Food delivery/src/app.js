import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
// import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
// import Grocery from "./components/Grocery.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

// Belows are the name of some concepts which has same meaning. It is used to split the main bundeled index.js file into different or more than 1 file so that our app loads faster and we can load the component only when we need it or only when we click it/visit it.
//Chunking
//Code Splitting
//Dynamic Bundling
//Lazy Loading: loads the page only when we click it.
// On demand loading: nothing but lazy loading.loads page on demand.
//Dynamic Import: same as above

//Instead of importing Grocery component like usual we can import it like below.
const Grocery = lazy(() => import("./components/Grocery.js"));

const About = lazy(() => import("./components/About.js")); // this  will make About a lazy loading

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //Authentication
  useEffect(() => {
    // Make an API call and send username and passwork
    const data = {
      name: "Akshay Shahane",
    };

    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// For routing we create a configuration to render it on  the page
const appRouter = createBrowserRouter([
  {
    path: "/", // if my path is just "/" at the end then,
    element: <AppLayout />,
    children: [
      {
        path: "/body", // If my path is "/about" then load my about page
        element: <Body />, // this will load about page
      },
      {
        path: "/about", // If my path is "/about" then load my about page
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <About />
          </Suspense>
        ), // this will load about page
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId", // :resId is the dynamic path
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ], // Load my home page that is AppLayout
    errorElement: <Error />, // This will throw an custom error that we have created.
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />); This we do earlier just for home page.
root.render(<RouterProvider router={appRouter} />);

// to make the component dnamic we have a concept in react known as prop. Prop is nothing but the properties. We know that component in React is nothing but the javascript function at the end similarlky prp is nothing bt the arguments that we pass to the function. When we want to pass some data to the component dynamically then we pass it as a props(i.e arguments to the function).

//////// Config driven UI ////////////
//what is congif driven UI search about It. It is imp in system design interview. It is bbasically different UI according to the location. Search about it.
