import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5434559&lng=77.160477&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  const handleTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRestaurant(filteredList);
  };

  const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <div className="body">
      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div>
          <div className="filter flex">
            <div className="search m-4 p-4 ">
              <input
                type="text"
                className="border border-solid border-black"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button
                className="px-4 py-2 bg bg-green-100 m-4 rounded-lg"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <div className="search m-4 p-4 flex items-center">
              <button
                className="px-4 py-2 bg-gray-50 rounded-lg"
                onClick={handleTopRated}
              >
                Top Rated Restaurants
              </button>
            </div>
            <div className="search m-4 p-4 flex items-center">
              <label> username : </label>
              <input
                className="border border-black p-2"
                value={loggedInUser}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div
            className="res-container"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {filteredRestaurant.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                {restaurant.info.isOpen ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;

