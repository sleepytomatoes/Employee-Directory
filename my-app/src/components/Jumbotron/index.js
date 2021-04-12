import React from "react";
import "./style.css";


function Jumbotron(props) {
  return (

    <div className="jumbotron styleJumbo" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        {props.children}
    </div>
  );
}

export default Jumbotron;
