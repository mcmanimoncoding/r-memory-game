import React from "react";
import "./score.css";

function Score(props) {
  return( <h3 className="score">{props.topScore}</h3> 
  )
}

export default Score;
