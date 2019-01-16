import React from "react";

function processClick(props) {
  props.reArrangeCards();
  // props.clickedCharacter(props.id);
  console.log("Clicked card...")
};

var ClickableCard = (props) => (
  <div className="card img-container" onClick={() => processClick(props)}>
    <img src={props.image} alt={props.name} />
  </div>

);

export default ClickableCard;