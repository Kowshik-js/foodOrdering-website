import {useEffect} from "react";
import { useState } from "react";

const useOnLineStatus=()=>{
    const {onlineStatus, setOnlineStatus}=useState(true);
    //check online
    useEffect(()=>{
    

        window.addEventListener("offline",()=>{
            setOnlineStatus(false); 
        });
        window.addEventListener("online",()=>{
            setOnlineStatus(true); 
        });
    },[]);
    
    //check offline
    return onlineStatus
};
export default useOnLineStatus;