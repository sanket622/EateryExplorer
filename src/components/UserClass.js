import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                login: "Dummy",
                location: "Default",
            },
        };


    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/sanket622");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
    }
    render() {
        const { name, location, avatar_url, html_url } = this.state.userInfo;
        return (
            <div className="min-h-screen flex items-center justify-center">
            <div className="user-card bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-2xl font-bold text-indigo-600 mb-4">
                WELCOME TO MY GITHUB PROFILE:
              </h4>
              <img src={avatar_url} className="mx-auto mb-4 rounded-full" />
              <h2 className="text-xl">Name: {name}</h2>
              <h3 className="text-lg">Location: {location}</h3>
              <div className="flex justify-center items-center space-x-2 mt-2">
                <h2 className="text-xl">GITHUB LINK:</h2>
                <a
                  href={html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 underline"
                >
                  {html_url}
                </a>
              </div>
              <h4 className="text-md mt-4">Contact Email Id: sanketkumar0068@gmail.com</h4>
            </div>
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