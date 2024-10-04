import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCardCatogory";

const RestaurantMenu = ()=>{
const {resId} = useParams();
    const resInfo=useRestaurantMenu(resId);

    if (resInfo === null) 
        return (
        <shimmer/>
    )

    const {name,cusines,cludinaryImageId,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[2 ]?.GroupedCard?.cardGroupMap?.REQULAR?.cards[1]?.card?.card;
    const categories=resInfo?.cards[2]?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>
            c.card?.card?.["@type"])
    
    return (

    <div className="text-center">
        <h1 className="border-l my-10 text-2xl">{name}</h1>
        <p>{cusines.join(",")}-{costForTwoMessage}</p>
        {categories.map((category)=>(
            <RestaurantCategory data={category?.card?.card}/>
        ))}
    </div>
    );
};

export default RestaurantMenu;