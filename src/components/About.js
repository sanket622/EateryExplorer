import React from "react";
import UserClass from './UserClass';
import UserContext from "../utils/UserContext";


class About extends React.Component{
  constructor(props){
    super(props);
  }

   render(){
     return(
      <div>
          <UserClass name={"first"} location={"Delhi"}/>
         <UserContext.Consumer>
          {({loggedInUser}) =><h3 className="font-bold" ><p><span style={{color:'red'}}>LoggedInUser : </span>{loggedInUser}</p></h3>}
         </UserContext.Consumer><br></br>
      </div>
     );
   }
}

export default About;