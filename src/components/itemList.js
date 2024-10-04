import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";



const ItemList=({Items,dummy})=>{
const dispatch=useDispatch();
const handleAddItem=()=>{
    //dispatch an action
    dispatch(addItem("pizza"))
}



    return(
        <div>
            catagory List
        </div>
    )
}
export default ItemList;