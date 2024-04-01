import React from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  const deliveryTime = sla?.deliveryTime;
  return (
    <div className="m-4 p-4 w-[235px]  rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-l">{name}</h3>
      {cuisines && <h3>{cuisines.join(", ")}</h3>}
      <h3>{avgRating}</h3>
      <h3>Rs {costForTwo}</h3>
      <h3>{deliveryTime} minutes</h3>
      <h3>User : {loggedInUser}</h3>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg bg-black text-white m-2 p-2 rounded-lg">
          opened
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
