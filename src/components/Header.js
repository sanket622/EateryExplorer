import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const initialButtonText = "Login";
  const [btnNameReact, setbtnNameReact] = useState(initialButtonText);

  useEffect(() => {}, [initialButtonText]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg m-1 mb-1 sm:bg-yellow-50 lg:bg-green-50 ">
      <div className="logo-container">
        <img className="w-46" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-3">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-3">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about"> About us</Link>
          </li>
          <li className="px-3">
            <Link to="/contact"> Contact us</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3">cart</li>
          <button
            className="login"
            onClick={() => {
              setbtnNameReact((prevText) =>
                prevText === "Login" ? "Logout" : "Login"
              );
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-3 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
