import React from "react";
import ReactDOM from "react-dom";
// import User from './User';
import UserClass from './UserClass';
import UserContext from "../utils/UserContext";



class About extends React.Component{
  constructor(props){
    super(props);

    console.log( " Parent Constructor");
  }
  componentDidMount(){
    console.log("Parent component did mount ");
  }
   render(){
    console.log("parent render");
     return(
      <div>
      <h1>About class component</h1>
      <div>
        loggedIn User
         <UserContext.Consumer>
          {({loggedInUser}) =><h3 className="font-bold" >{loggedInUser}</h3>}
         </UserContext.Consumer>
      </div>
      <h1>These are my food items. </h1>
      <UserClass name={"first"} location={"Delhi"}/>
      </div>
     );
   }
}





/*
Parent constructor
Parent render

-Akshay constructor
-Akshay render


-Elon Constructor
-Elon Render

< DOM UPDATED IN SINGLE BATCH --- >
-Akshay ComponentDidMount
-Elon ComponentDidMount


-Parent componentdidmount
*/

export default About;