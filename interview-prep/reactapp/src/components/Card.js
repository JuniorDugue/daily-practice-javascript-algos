import React, { useState, useEffect } from "react";
import "../Card.css";

function Card({ frontSide, backSide }) {
  const [isFront, changeFace] = useState(true);

  function handleClick() {
    changeFace((oldState) => !oldState);
  }
  const text = isFront ? frontSide : backSide;
  const sideClass = isFront ? "front" : "back";
  const classList = `flash-card ${sideClass}`;

  return (
    <div className={classList} onClick={handleClick}>
      {text}
    </div>
  );
}

export default Card;
