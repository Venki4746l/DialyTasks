import React, { useState } from "react";
import ItemDetails from "./ItemDetails";

import "./Item.css";

const CardItems = () => {
  const intialdata = [
    { id: 1, name: "biscket", price: 10, qty: 1 },
    { id: 2, name: "soap", price: 20, qty: 1 },
    { id: 3, name: "colgate", price: 30, qty: 1 },
  ];
  const [cardDetails, setcardDetails] = useState(intialdata);
  const updataQuanity = (updateInfo, count) => {
    const newState = cardDetails.map((oject) => {
      if (updateInfo.id === oject.id) {
        return { ...oject, qty: count };
      }
      return oject;
    });
    setcardDetails(newState);
  };
  const res = cardDetails.reduce(
    (total, currentValue) =>
      (total = total + currentValue.price * currentValue.qty),
    0
  );

  return (
    <center>
      {cardDetails.map((info) => (
        <ItemDetails key={info.id} updateqty={updataQuanity} info={info} />
      ))}
      <h1>Total:{res}</h1>
    </center>
  );
};
  

export default  CardItems ;
