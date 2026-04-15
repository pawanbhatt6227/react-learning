import RestaurantCard from "./RestaurantCard";
import dummyRestaurants from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import ShimmerUiBody from "./ShimmerUiBody";

//whenever state variable changes react triggers a reconciiation cycle(rerenders the component)
const Body = () => {
  const [dummyCopy, setDummyCopy] = useState([]);
  const [dummyFilterCopy, setDummyFilterCopy] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  //fetching data from api -- ie fetch the json files from the api.
  //please note that if we fetch datafrom api we keep it in two places one where we can filter
  // the original data according to need and other to save the data as it is no change in it...
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=34.08500&lng=74.80600&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();

    console.log(json);

    //.find stops at first match only doesnt find all
    //optional chaining the better way of getting the data
    const restaurantArray =
      json?.data?.cards?.find(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setDummyCopy(restaurantArray);
    setDummyFilterCopy(restaurantArray);
  };

  if (dummyFilterCopy.length === 0) {
    return <ShimmerUiBody />;
  }

  return (
    <div className="body">
      <div className="searchBar">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-box"
          onClick={() => {
            //filter the restaurant cards and update the ui
            //Search text
            const searchFilter = dummyCopy.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            setDummyFilterCopy(searchFilter);
            setSearchText("");
          }}
        >
          Search
        </button>
      </div>

      {/* FILTER BUTTON */}
      <button
        className="filter-btn"
        onClick={() => {
          //filter logic

          //state filter logic using method setDummyCopy
          setDummyFilterCopy(
            dummyCopy.filter((res) => res.info.avgRating > 4.2), //filternig from original data
          );
        }}
      >
        top Rated Restaurant
      </button>

      {/* RESET BUTTON */}
      <button
        className="reset-btn"
        onClick={() => {
          setDummyFilterCopy(dummyCopy);
        }}
      >
        Reset
      </button>

      {/* CONTAINER CONTAINING CARDS */}
      <div className="rest-container">
        {/* js to dynamically create many components (fir eg here cards ) make sure to provide keys... */}
        {dummyFilterCopy.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
