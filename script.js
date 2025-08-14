// import React from "react";

// <div>
//     <div>
//         <h1></h1>
//     </div>
// </div>


const parent = React.createElement(
    "div", { id: "parent" },
    [React.createElement(
        "div", { id: "child" },
        [
            React.createElement("h1", { id: "heading1" }, "This is 1st children"),
            React.createElement("h2", { id: "heading2" }, "This is 2nd children"),
            React.createElement("h3", { id: "heading3" }, "This is 3rd children"),
            React.createElement("h4", { id: "heading4" }, "This is 4th children"),
            React.createElement("h5", { id: "heading5" }, "This is 5th children"),
            React.createElement("h6", { id: "heading6" }, "This is 6th children")
        ]
    ),
    React.createElement("div", { id: "div2" },)

    ]
)

// const heading = React.createElement("h1", {id:"heading"}, "Hii How are you ?");

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);