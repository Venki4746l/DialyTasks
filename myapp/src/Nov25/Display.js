import React from "react";
import DetailedImage from "./DetailedImage";
import trandy1 from "../Assets/trandy1.jpg";
import trandy2 from "../Assets/trandy2.jpg";
import trandy3 from "../Assets/trandy3.jpg";
const data = [
  {
    id: 1,
    title: "Colorful Stylish Shirt",
    price: "$123.00",
    offer: "$123.00",
    image: trandy1,
  },
  {
    id: 2,
    title: "Colorful Stylish Shirt",
    price: "$123.00",
    offer: "$123.00",
    image: trandy2,
  },
  {
    id: 3,
    title: "Colorful Stylish Shirt",
    price: "$123.00",
    offer: "$123.00",
    image: trandy3,
  },
];

const Display = () => {
  return (
    <div className="container">
      <div className="row d-flex">
        {data.map((item) => (
          <div className="col-4">
            <DetailedImage key={item.id} itemdetials={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
