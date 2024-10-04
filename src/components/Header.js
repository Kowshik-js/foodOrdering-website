import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import useOnLineStatus from "../utils/useOnlineStates";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");

    const onlineStatus=useOnLineStatus();

    const {loggedInUser}=useContext(UserContext);
    console.log(loggedInUser);

    //subscribing to the store using useSelector
    const cartItems=useSelector((store)=>store.cart.items);


    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sn:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                    online Status:{onlineStatus ? "✅" : "✅ "}
                    </li>

                    <li className="px-4">
                    <Link to="/">Home</Link>
                    </li>

                    <li className="px-4">
                    <Link to="/about">About Us</Link>
                    </li>

                    <li className="px-4">
                    <Link to="/contact">contact Us</Link>
                    </li>
                    
                    <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                    </li>

                    <li className="px-4 font-bold text-xl">
                    <Link to="/cart">cart-</Link>
                    ({cartItems.length} items)
                    </li>

                    <li className="px-4 font-bold">{loggedInUser}</li>
                    <button className="login"
                    onClick={()=>{
                       btnNameReact === "Login"
                       ? setbtnNameReact("Logout")
                       : setbtnNameReact("Login");
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