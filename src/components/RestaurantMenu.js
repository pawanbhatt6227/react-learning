import { useState, useEffect } from "react";
import ShimmerUiBody from "./ShimmerUiBody";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState();
  const [resInfoFilter, setResInfoFilter] = useState();
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    console.log(data);
    const json = await data.json();
    console.log(json);
    const resInfonormal = json?.data;

    setResInfo(resInfonormal);
    setResInfoFilter(resInfonormal);
  };

  if (!resInfo) {
    return <ShimmerUiBody />;
  }

  const { name, cuisines, costForTwo } =
    resInfoFilter?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfoFilter?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} -- {costForTwo} for Two
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((items) => {
          return (
            <li key={items?.card?.info?.name}>
              {items?.card?.info?.name} -- Rs.
              {items?.card?.info?.variantsV?.pricingModels?.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

//we will make this restaurant menu dynamic
