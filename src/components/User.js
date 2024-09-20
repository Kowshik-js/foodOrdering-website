import { useEffect, useState} from "react";
const User=({name})=>{
    useEffect(()=>{

    
    },[]);


    return(
        <div
        clasName="user-card">
            <h2>Name:{name} </h2>
            <h3>Location:Karnataka</h3>
            <h4>Contact:kowshikjs487@gmail.com</h4>
    </div>
    );
};
export default User;