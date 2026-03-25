let dummyRestaurants = [
  {
    card: {
      data: {
        id: "101",
        name: "Burger King",
        cloudinaryImageId: "burger123",
        cuisines: ["Burgers", "Fast Food"],
        avgRating: 3.8,
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
        avgRating: 3.7,
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

export default dummyRestaurants;
