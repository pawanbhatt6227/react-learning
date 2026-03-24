import RestaurantCard from "./RestaurantCard";
import dummyRestaurants from "../utils/mockData";

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="rest-container">
      {/* js to dynamically create many components (fir eg here cards ) make sure to provide keys... */}
      {dummyRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.card.data.id} resData={restaurant} />
      ))}
    </div>
  </div>
);

export default Body;
