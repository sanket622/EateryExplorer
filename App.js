{/* <div id = "parent">
    <div id = "child">
       <h1>I am h1 tag</h1>
       <h2>I am h2 tag</h2>
    </div>
    <div id = "child2">
       <h1>I am h1 tag</h1>
       <h2>I am h2 tag</h2>
    </div>
</div>
ReactElement(object) => HTML(Browser understands)
 */}

// createElement creates an object while it is rendering onto the DOM it converts itself into HTML and puts up into the DOM 

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Hi I am an h1 tag"),
        React.createElement("h2", {}, "Hi I am an h2 tag")
        ]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "Hi I am an h1 tag"),
        React.createElement("h2", {}, "Hi I am an h2 tag")
        ]),
    ]);

// const heading = React.createElement(
//     "h1", { id: "heading", syz: "abc" },
//     "Hello world from React"
// );

console.log(parent);  //object and this object is a react element.

const root = ReactDOM.createRoot(document.getElementById("root"));

// when u do root.render it will just replace everything inside root 
// with whatever is being passed from react.
root.render(parent);