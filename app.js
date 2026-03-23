import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -logo
 *  -nav items
 * Body
 *  -Search
 *  -RestaurantContainer
 *    -RestaurantCard
 *        --img
 *        --Name of the restaurant, cuisine, delivery time, etc.
 * Footer
 *  -Copyright
 *  -Links
 *  -Contact
 *  -Address
 */
const Header = () => (
  <div className="header">
    <div id="logo-container">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61mn-ENOT3CmofBeorQdW8lJZxU7o80tjrA&s"
        alt="logo of company"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const RestaurantCard = ({
  name = "Unknown Restaurant",
  cuisine = "Cuisine not available",
  rate = "N/A",
  time = "N/A",
  img = "https://via.placeholder.com/300x200?text=No+Image",
}) => {
  return (
    <div className="rest-card">
      <img className="food-photo" src={img} alt={name} />
      <h2>{name}</h2>
      <p>{cuisine}</p>
      <p>{rate}</p>
      <p>{time}</p>
    </div>
  );
};

const RestaurantCardObj = (props) => {
  const { resData } = props;

  //optional chaining
  const info = resData?.card?.data;

  if (!info) return null;

  return (
    <div className="rest-card">
      <img
        className="food-photo"
        //here it is done using string literal
        src={`https://cdn.swiggy.com/${info.cloudinaryImageId}`}
        alt={info.name}
      />
      <h2>{info.name}</h2>
      <p>{info.cuisines.join(", ")}</p>
      <p>⭐ {info.avgRating}</p>
      <p>⏱️ {info.sla?.deliveryTime} mins</p>
      <p>💸 {info.costForTwo}</p>
      {info.aggregatedDiscountInfoV3 && (
        <p>
          🔥 {info.aggregatedDiscountInfoV3.header}{" "}
          {info.aggregatedDiscountInfoV3.subHeader}
        </p>
      )}
      {!info.isOpen && <p style={{ color: "red" }}>Closed</p>}
    </div>
  );
};

//json object eg for api
const dummyRestaurants = [
  {
    card: {
      data: {
        id: "101",
        name: "Burger King",
        cloudinaryImageId: "burger123",
        cuisines: ["Burgers", "Fast Food"],
        avgRating: 4.1,
        sla: { deliveryTime: 25 },
        costForTwo: "₹300 for two",
        isOpen: true,
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
      },
    },
  },
  {
    card: {
      data: {
        id: "102",
        name: "KFC",
        cloudinaryImageId: "kfc456",
        cuisines: ["Chicken", "Fast Food"],
        avgRating: 4.3,
        sla: { deliveryTime: 28 },
        costForTwo: "₹400 for two",
        isOpen: true,
        aggregatedDiscountInfoV3: {
          header: "15% OFF",
          subHeader: "UPTO ₹40",
        },
      },
    },
  },
  {
    card: {
      data: {
        id: "103",
        name: "Biryani Blues",
        cloudinaryImageId: "biryani789",
        cuisines: ["Biryani", "North Indian"],
        avgRating: 4.5,
        sla: { deliveryTime: 35 },
        costForTwo: "₹500 for two",
        isOpen: false,
        aggregatedDiscountInfoV3: {
          header: "25% OFF",
          subHeader: "UPTO ₹60",
        },
      },
    },
  },
  {
    card: {
      data: {
        id: "104",
        name: "Pizza Palace",
        cloudinaryImageId: "pizza321",
        cuisines: ["Pizza", "Italian"],
        avgRating: 4.0,
        sla: { deliveryTime: 30 },
        costForTwo: "₹350 for two",
        isOpen: true,
      },
    },
  },
];

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="rest-container">
      <RestaurantCard
        img="https://img.freepik.com/free-psd/roasted-chicken-dinner-platter-delicious-feast_632498-25445.jpg?semt=ais_hybrid&w=740&q=80"
        name="Meghana foods"
        cuisine="Biryani, North Indian, Asian"
        rate="4.4 star"
        time="38 mins"
      />

      <RestaurantCard
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_sIUlcF8c0GxHGgCc8epATqMuJoc5AGwUVQ&s"
        name="Spice Garden"
        cuisine="South Indian, Chinese"
        rate="4.2 star"
        time="30 mins"
      />

      {/* js to dynamically create many components (fir eg here cards ) make sure to provide keys... */}
      {dummyRestaurants.map((restaurant) => (
        <RestaurantCardObj key={restaurant.card.data.id} resData={restaurant} />
      ))}
    </div>
  </div>
);

const Footer = () => <div className="footer"></div>;

const AppLayout = () => (
  <div className="mainContainer">
    <Header />
    <Body />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
