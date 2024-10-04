import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import ItemList from "./itemList";
import { useDispatch } from "react-redux";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    };
    
    return <div className="text-center m-6 p-6">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto"></div>
        <button className="p-2 m-2 bg-black text-white rounded-lg"
         onClick={handleClearCart}>
            Clear Cart            
        </button>
        {cartItems.length === 0 && <h1>cart is empty</h1>}
        <ItemList items={cartItems}/>
    </div>
};

export default Cart;