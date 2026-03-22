import React from "react";
import ReactDOM from "react-dom/client";

//React Components
//class based components -- old -- legacy projects only
//functional components -- new -- make all things in this master this

const jsxElement = <h3>Hello world from element</h3>;

//functional components
const HeadingSubComponent = () => (
  <h2> hello World from functional subcomponent</h2>
);
const HeadingComponent = () => {
  return (
    <>
      <h1>Hello world from functional Components</h1>
      <HeadingSubComponent />
      {jsxElement}
      <p>{100 + 200}</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
