import React from "react";
import "./index.css";

const Marker = ({ color, name, id }) => {
  return (
    <React.Fragment>
      <div class="pin"></div>
      <div class="pulse"></div>
    </React.Fragment>
  );
};

export default Marker;
