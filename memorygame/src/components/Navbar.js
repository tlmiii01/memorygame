import React from "react";

var Navbar = (props) => (
    <nav className="navbar navbar-light bg-light sticky-top">
      <ul>Memory Gane</ul>
      <ul>{props.message}</ul>  
      <ul>Score: {props.score} | High Score: {props.highScore}</ul>
    </nav>
);

export default Navbar;