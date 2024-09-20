import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnLineStatus from "../utils/useOnlineStates";



const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");

    const onlineStatus=useOnLineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>b
            </div>
            <div className="nav-item">
                <ul>
                    <li>
                    online status:{onlineStatus ? "online" : "offline"}
                    </li>

                    <li>
                    <Link to="/">Home</Link>
                    </li>

                    <li>
                    <Link to="/about">About Us</Link>
                    </li>

                    <li>
                    <Link to="/contact">contact Us</Link>
                    </li>
                    
                    <li>
                    <Link to="/grocery">Grocery</Link>
                    </li>

                    <li>Cart</li>
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