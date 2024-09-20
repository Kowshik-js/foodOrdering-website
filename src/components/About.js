import User from "./User"
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props)
    {
        super(props);
        //console.log("parent constructor");//1 calls
    }

componentDidMount(){
    //console.log("parent component mounted");//6 calls
}

    render(){
        //console.log("parent render");//2nd calls
        return (
            <div>
                <h1>Kowshik J S</h1>
                <h2>This is namaste React</h2>
                <UserClass name={"kowshik J S (class)"}/>
              
            </div>
        );
    }
}
export default About;


/*

when there are multiple childrens:

parent constructor
parent render

akshay constructor
akshay render
elon constructoe
elon render
akshay child component did mount
elon component did mount
parent conponent did mount
*/
