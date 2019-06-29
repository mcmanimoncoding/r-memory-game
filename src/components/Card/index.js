import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
    <div className="img-container">
      <img 
        alt={"This is image " + props.id} 
        src={props.image}
        onClick={() => props.checkIfClicked(props.id)}
      />
    </div>
  </div>
  );
}

export default Card;
