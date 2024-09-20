import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
          userInfo:{
            name: "Dummy",
            location:"default",
           
          }
        };
        console.log("child constructor");//3 calls
    }

async componentDidMount(){
    //console.log("child component mount");//5 calls
    const data=await fetch("https://api.github.com/users/kowshik");
    const json=await data.json();

    this.setState({
        userInfo:json,
    });

}

    componentDidUpdate(){
        console.log("child component mount");
    }
    componentWillUnmount(){
        console.log("unmount");
    }

    


    render(){
        const {name,location,avatar_url}=this.state.userInfo;
        //console.log("child render");//4 calls
        return(
            <div clasName="user-card">
            <h2>Name:{name} </h2> 
            <h3>Location:{location}</h3>
            <img src={avatar_url}/>
            <h4>Contact:kowshikjs487@gmail.com</h4>
          </div>      
            
        );
        
    }
}
export default UserClass;