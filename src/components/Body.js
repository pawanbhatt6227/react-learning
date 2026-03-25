import RestaurantCard from "./RestaurantCard";
import dummyRestaurants from "../utils/mockData";
import { useState } from "react";

//state variable -- super powerful variable
//hook - a normal js function given to us by react --prebuilt utility function

//normal js variable

const Body = () => {
  let [dummyCopy, setDummyCopy] = useState(dummyRestaurants);

  return (
    <div className="body">
      <div
        className="filter"
        onClick={() => {
          //filter logic

          //state filter logic using method setDummyCopy
          setDummyCopy(
            dummyCopy.filter((res) => res.card.data.avgRating > 3.8),
          );

          //js filter logic
          // dummyCopy = dummyCopy.filter((res) => res.card.data.avgRating > 3.8);
          // console.log(dummyCopy);
        }}
      >
        <button className="filter-btn">top Rated Restaurant</button>
      </div>
      <div className="rest-container">
        {/* js to dynamically create many components (fir eg here cards ) make sure to provide keys... */}
        {dummyCopy.map((restaurant) => (
          <RestaurantCard key={restaurant.card.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
