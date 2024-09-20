import {useEffect} from "react";
import {MENU_API} from "../utils/constants";

const useRestaurantMenu=(resId)=>{
    const [ressId,setResInfo]=useState(null);
//fetch data
useEffect(()=>{
    fetchData();
},[]);

const fetchData=async ()=>{
    const data=await fetch (MENU_API + ressId);
    const json=await data.json();
    setResInfo(json.data);
    
};


    return resInfo;
}
export default useRestaurantMenu;