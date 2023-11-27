import React from "react";

export default function MainContent(props) {
  return (
    <div className="mainCont">
      <img className="theimgs" src={props.img} alt="t-shirt" />
      <p>{props.tel}</p>
      <p style={{ color: "#fca103" }}> --- </p>
      <p>{props.price}</p>
      <button>add to cart</button>
    </div>
  );
}
