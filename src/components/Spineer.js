import React from "react";
import spinner from "../images/spinner.gif";
const Spineer = () => {
  return (
    <img
      src={spinner}
      style={{
        width: "200px",
        margin: "auto",
        display: "block",
      }}
      alt="Loading"
    />
  );
};

export default Spineer;
