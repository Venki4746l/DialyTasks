import React from "react";
let data = [
  { id: 1, name: "dress" },
  { id: 2, name: "men" },
  { id: 3, name: "women" },
];

const Products = () => {
    const addtocardhandler=()=>{

    }
  return <div>
    {data.map((item)=><div key={item.id}>
        <h1>{item.name}</h1>
        <button onClick={addtocardhandler}>AddToCard</button>

    </div>)}
  </div>;
};

export default Products;
