import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = ()=>{
const {resId} = useParams();
    const resInfo=useRestaurantMenu(resId);

    if (resInfo === null) 
        return (
        <shimmer/>
    )

    const {name,cusines,cludinaryImageId,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[2 ]?.GroupedCard?.cardGroupMap?.REQULAR?.cards[1]?.card?.card;
    
    return (

    <div className="menu">
        <h1>{name}</h1>
        <p>{cusines.join(",")}-{costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
            {itemCards.map(item=>(
                <li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
            ))}
            
        </ul>
    </div>
    );
};

export default RestaurantMenu;