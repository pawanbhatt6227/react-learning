import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Error from "./Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Footer = () => <div className="footer"></div>;

const AppLayout = () => (
  <div className="mainContainer">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId", //note that this resId(:<dynamic content> -- making path dynamic) is dynamic means it can be changed with the id of the restaurant
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
  ,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
