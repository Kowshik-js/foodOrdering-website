import React, {lazy, Suspense,useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom"; 
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/cart";


const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {
    const [userName, setUserName]=useState();
    useEffect(()=>{
    const data={
        name:"Kowshik J S"
    };
    setUserName(data.name);
    },[]);


    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
        </UserContext.Provider>
        </Provider>
    );
};

const appRouter= createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
                {
                    path: "/",
                    element: <Body/>
                },
                {  
                    path: "/about",
                    element: <About/>
                },
                {
                    path: "/contact",
                    element: <Contact/>
                },
                {
                    path:"/restaurants/:resId",
                    element:<RestaurantMenu/>,
                },
                {
                    path: "/grocery",
                    element:(
                    <Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery/>
                    </Suspense>
                    ),
                },
                {
                    path:"/cart",
                    element:<Cart/>
                }
        ],
        errorElement:<Error/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
