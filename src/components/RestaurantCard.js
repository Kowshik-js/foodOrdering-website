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
        <div className="m-4 p-4 w-[250px]" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="rest-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{costForTwo}</h3>
            <h3>{sla?.slaString}</h3>
        </div>
    );
};

export default RestaurantCard;
