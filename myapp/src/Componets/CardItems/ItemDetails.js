import React from "react";
import "./Item.css";
import { useState, useEffect } from "react";

const ItemDetails = ({ info, updateqty }) => {
  let { id, name, price, qty } = info;
  const [itemCount, setItemCount] = useState(qty);
  
  const incCount = () => {
    setItemCount(itemCount + 1);
  };

  const decCount = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  };

  useEffect(() => {
    updateqty(id, itemCount);
  }, [itemCount]);

  return (
    <div className="itemContainer">
      <h1>{name}</h1>
      <h1 className="quantity">
        <button onClick={decCount} className="dec">
          -
        </button>
        {itemCount}
        <button onClick={incCount} className="inc">
          +
        </button>
      </h1>
      <h1>total:{price * itemCount}</h1>
    </div>
  );
};

export default ItemDetails;
