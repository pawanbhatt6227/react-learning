import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  //optional chaining
  const info = resData?.card?.data;

  if (!info) return null;

  return (
    <div className="rest-card">
      <img
        className="food-photo"
        //here it is done using string literal
        src={`${CDN_URL}${info.cloudinaryImageId}`}
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

export default RestaurantCard;
