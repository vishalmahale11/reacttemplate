import React from "react";
import IMAGE from "./finalLogoRdp.png";
import { ClickCounter } from "./counter";

// Inline SVG content
const svgContent = (
  <svg viewBox="0 0 100 100" width="100">
    <path d="M 0,0 L 50,50 L 100,0 Z" fill="#61dafb" />
    <path d="M 0,50 L 50,0 L 100,50 Z" fill="#4caf50" />
    <path d="M 50,0 L 50,100 Z" fill="#ffeb3b" />
  </svg>
);

export const App = () => { 
  return (
    <>
      <h1>
       Hello vishak React Application With Own Configuration With Webpack, React and
        Typescript - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="img" style={{ width: "100px", height: "100px" }} />
      {svgContent}
      <ClickCounter /> 
    </>
  );
};
 