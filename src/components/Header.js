import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnLineStatus from "../utils/useOnlineStates";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnLineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-pink-100 shadow-lg p-4">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="Logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex space-x-6 text-gray-700 font-semibold">
          <li>
            <span className="text-sm font-bold">
              Online Status: {onlineStatus ? "✅" : "✅"}
            </span>
          </li>
          <li>
            <Link
              className="hover:text-gray-900 transition-colors text-lg font-extrabold uppercase tracking-wider"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-900 transition-colors text-lg font-extrabold uppercase tracking-wider"
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-900 transition-colors text-lg font-extrabold uppercase tracking-wider"
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-900 transition-colors text-lg font-extrabold uppercase tracking-wider"
              to="/grocery"
            >
              Grocery
            </Link>
          </li>
          <li className="font-bold text-xl tracking-wide">
            <Link to="/cart" className="hover:text-gray-900 transition-colors">
              Cart - ({cartItems.length} items)
            </Link>
          </li>
          <li className="font-extrabold tracking-wide">{loggedInUser}</li>
          <button
            className="ml-4 px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all"
            onClick={() => {
              setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
