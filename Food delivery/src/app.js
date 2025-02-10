import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
        element: <About />, // this will load about page
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId", // :resId is the dynamic path
        element: <RestaurantMenu />,
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
