import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnLineStatus from "../utils/useOnlineStates";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const[filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText,setSearchText]=useState();

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async()=>{
    const data=await fetch( 
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    

    setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
    setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };

  
  const onlineStatus=useOnLineStatus();
  if(onlineStatus===false)
  {
    return(
      <h1>
        look at your internet connection
      </h1>
    );
  }


  

  // if(listOfRestaurants.length===0){
  //   return <Shimmer/>;
  // listOfRestaurants.length===0 ? (<Shimmer/>) :}

   
  return listOfRestaurants.length === 0 ? (<Shimmer />) :(
    <div className="body">
      <div className="filter flex">

        <div className="search m-4 p-4">
          <input type="text"
           placeholder="Search"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
          onClick={()=>{
            console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setfilteredRestaurant(filteredRestaurant);
          }}

          >Search</button>

        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredRestaurant(filteredList);;
          }}
        >
          Top Rated Restaurants
        </button>
        </div>       
      </div>


      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />

          // <Link to={"/restaurants/" + restaurant.data.id}>
          // <RestaurantCard  resData={restaurant} /></Link> 
        ))}
      </div>
    </div>
  );
};
export default Body;
