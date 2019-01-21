import React from "react";

const style = {
  text: {
    "font-size": "1.5rem"
  }
}

var Navbar = (props) => (
    <nav style={style.text} className="navbar navbar-dark bg-dark sticky-top text-white">
      <ul>Memory Gane</ul>
      <ul>{props.message}</ul>  
      <ul>Score: {props.score} | High Score: {props.highScore}</ul>
    </nav>
);

export default Navbar;