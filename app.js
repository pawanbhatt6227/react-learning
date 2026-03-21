import React from "react";
import ReactDOM from "react-dom/client";

//jsx -- converted to react element by BABEL ...

const jsxHeading = (
  <h2 id="newHeading" className="newclass" tabIndex="1">
    "Hello World from jsx"
  </h2>
);
const heading = React.createElement("h1", { id: "hello" }, "hello World");

const final = (
  <div>
    {jsxHeading}
    {heading}
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(final);
