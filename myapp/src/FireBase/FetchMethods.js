import React from "react";
import { useState, useEffect } from "react";
import PostMEthod from "./PostMEthod";

const FetchMethods = () => {
  const [data, setData] = useState([]);

  useEffect( () => async function  getData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const cartitem = await response.json();
    setData(cartitem);
  }, []);
  console.log(data)

  return (
    <>
      <div>
        {data.map((item) => (
          <div key={item.id} className="d-flex">
            <h1>{item.id}</h1>
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
      <div>
        <button>Add New</button>
      </div>
      <PostMEthod  />
    </>
  );
};

export default FetchMethods;
