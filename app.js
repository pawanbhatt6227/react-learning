import React from "react";
import ReactDOM from "react-dom/client";
// html structure

// <div id="parent"></div>
//     <div id="child">
//         <h1>here is h1</h1>
//         <h2>here is h2</h2>
//     </div>
// </div>

//nesting and siblings
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "here is h1"),
    React.createElement("h2", { key: "h2" }, "here is h2"),
  ]),
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
