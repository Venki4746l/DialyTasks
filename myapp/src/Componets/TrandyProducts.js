import React from 'react'
import Singleproduct from './Singleproduct';
const data = [
    {
      id: 1,
      imgSrc: "https://technext.github.io/eshopper/img/product-1.jpg",
      title: "Colorful Stylish Shirt",
      price: 123.0,
      cross_price: 123,
    },
    {
      id: 2,
      imgSrc: "https://technext.github.io/eshopper/img/product-2.jpg",
      title: "Colorful Stylish Shirt",
      price: 123,
      cross_price: 123,
    },
    {
      id: 3,
      imgSrc: "https://technext.github.io/eshopper/img/product-3.jpg",
      title: "Colorful Stylish Shirt",
      price: 123,
      cross_price: 123,
    },
    {
      id: 4,
      imgSrc: "https://technext.github.io/eshopper/img/product-4.jpg",
      title: "Colorful Stylish Shirt",
      price: 123,
      cross_price: 123,
    },
    {
      id: 5,
      imgSrc: "https://technext.github.io/eshopper/img/product-5.jpg",
      title: "Colorful Stylish Shirt",
      price: 123,
      cross_price: 123,
    },
    {
      id: 6,
      imgSrc: "https://technext.github.io/eshopper/img/product-6.jpg",
      title: "Colorful Stylish Shirt",
      price: 123,
      cross_price: 123,
    },
    {
      id: 7,
      imgSrc: "https://technext.github.io/eshopper/img/product-7.jpg",
      title: "Colorful Stylish Shirt",
      price: 123,
      cross_price: 123,
    },
    {
      id: 8,
      imgSrc: "https://technext.github.io/eshopper/img/product-8.jpg",
      title: "Colorful Stylish Shirt",
      price: 123,
      cross_price: 123,
    },
  ];

const trandyProducts = () => {
  return (
    <div>
      {data.map((item)=><Singleproduct key={item.id} productDetails={item} />)}
    </div>
  )
}

export default trandyProducts
