import React from "react";

const style = {
  logo: {
    height: "8rem",
    width: "25rem"
  },
  dragonball: {
    background: "#F99102"
  }
}

const Jumbotron = () => (
  <div style={style.dragonball} className="jumbotron">
    <div className="text-center">
      <img style={style.logo} src="https://vignette.wikia.nocookie.net/dragonball-zeron/images/9/95/HQ_DragonBall_Z_logo.png/revision/latest?cb=20130130143427" />
      <h1 className="mt-3">Memory Game</h1>
    </div>
  </div>
);

export default Jumbotron;