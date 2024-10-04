import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    } = resData?.info;

    // Define the logo URL using cloudinaryImageId
    

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img
                className="rounded-lg"
                alt="rest-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{costForTwo}</h3>
            <h3>{sla?.slaString}</h3>
        </div>
    );
};

// const withPromatedLabel=(RestaurantCard)=>{
//     return ()=>{
//         return(
//             <div>
//                 <label>promoted</label>
//                 <RestaurantCard/>
//             </div>
//         )
//     }
// }

export default RestaurantCard; 
