import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const ProductsShowing = () => {
  const [items, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "BMW Pencil",
        /* other product data */
      }),
    })
      .then((res) => res.json())
      .then((data)=>setData([...items,data]));
  }, []);
 
  return (
    <div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/carts">
        <h1>Carts</h1>
      </Link>
      <div>
        {items.map((item, key) => (
          <div key={key}>
            <h1>{item.title}</h1>

           
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsShowing;
