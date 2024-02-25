import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                login:"Dummy",
                location:"Default",
            },
            count: 0,
            count2:2
        };


    }
  async  componentDidMount(){
        const data= await fetch("https://api.github.com/users/sanket622");
        const json= await data.json();
        this.setState({
            userInfo:json,
        });
    console.log(json);
    console.log(this.props.name + " child component did mount");
    this.timer = setInterval(() => {
     console.log(" NAMASTE REACT OP ");
    },1000);
    }
    componentDidUpdate(){
        console.log("component did update");
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("component did unmount");
    }
 render(){
    const{name,location,avatar_url,html_url}= this.state.userInfo;
    const {count} = this.state;
    return(
        <div className="user-card" >
            <h1>count : {count}</h1>
            <button
            onClick={() =>{
                this.setState({
                    count: this.state.count + 1,
                });
            }}
            style={{
    backgroundColor: '#3498db',   // Background color
    color: '#fff',                 // Text color
    padding: '10px',               // Padding
    borderRadius: '5px',           // Border radius
    cursor: 'pointer',             // Cursor style
    border: 'none',                // Remove default button border
    outline: 'none',               // Remove button outline
  }}
            >
              Count Increase
            </button>
            <img src={avatar_url}/>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <h4 style={{ marginRight: '10px', marginBottom: '0' }}>GITHUB PROFILE:</h4>
            <a href={html_url} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
    {html_url}
  </a>
            </div>      
            <h4>Contact:sanketkumar0068@gmail.com</h4>      
        </div>
     );
 };

}
export default UserClass;
/**
 * 
 * --- MOUNTING ---
 * Constructor(dummy)
 * Render (dummy)
 * <HTML DUMMY>
 * Component did mount
 *   <API call>
 *<this.setState-> State variable is updated
 *
 * 
 * ---   UPDATE ---- 
 * 
 * 
 *    render(API data)
 *    <HTML (new api data)
 * componentDid update
 * 
 * 
 */