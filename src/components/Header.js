import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnLineStatus from "../utils/useOnlineStates";



const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");

    const onlineStatus=useOnLineStatus();

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sn:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                    online Status:{onlineStatus ? "online" : "offline"}
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

                    <li className="px-4">Cart</li>
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