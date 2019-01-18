import React from "react";

const style = {
  cardStyle: {
    height: "200px",
    width: "200px"
  }
}

function processClick(props) {
  props.reArrangeCards();
  // console.log(props.id);
  props.clickedCharacters(props.id);
  // console.log("Clicked card...")
};

var ClickableCard = (props) => (
  <div className="card img-container" onClick={() => processClick(props)}>
    <img style={style.cardStyle} src={props.image} alt={props.name} />
  </div>

);

export default ClickableCard;