import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]); // Added resId as a dependency to re-run the effect when it changes

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
      // Handle the error as needed (e.g., set an error state)
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
