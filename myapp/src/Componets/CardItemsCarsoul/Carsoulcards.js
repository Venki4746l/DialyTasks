import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import options from "./vendorResponsive";
const data = [
  {
    id: 1,
    imgSrc: "https://technext.github.io/eshopper/img/product-1.jpg",
    title: "womens skirts",
    price: 456,
    cross_price: 800,
  },
  {
    id: 2,
    imgSrc: "https://technext.github.io/eshopper/img/product-2.jpg",
    title: "kids Stylish Shirt",
    price: 999,
    cross_price: 1200,
  },
  {
    id: 3,
    imgSrc: "https://technext.github.io/eshopper/img/product-3.jpg",
    title: "men Stylish Shirt",
    price: 678,
    cross_price: 1399,
  },

  {
    id: 4,
    imgSrc: "https://technext.github.io/eshopper/img/product-4.jpg",
    title: "Colorful Top",
    price: 230,
    cross_price: 568,
  },
  {
    id: 5,
    imgSrc: "https://technext.github.io/eshopper/img/product-5.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 444,
  },
  {
    id: 6,
    imgSrc: "https://technext.github.io/eshopper/img/product-6.jpg",
    title: "men court",
    price: 567,
    cross_price: 1233,
  },
  {
    id: 7,
    imgSrc: "https://technext.github.io/eshopper/img/product-7.jpg",
    title: "ladies full dress",
    price: 123,
    cross_price: 193,
  },
  {
    id: 8,
    imgSrc: "https://technext.github.io/eshopper/img/product-8.jpg",
    title: "Kids wear",
    price: 673,
    cross_price: 1110,
  },
  {
    id: 1,
    imgSrc: "https://technext.github.io/eshopper/img/product-1.jpg",
    title: "womens skirts",
    price: 456,
    cross_price: 800,
  },
  {
    id: 2,
    imgSrc: "https://technext.github.io/eshopper/img/product-2.jpg",
    title: "kids Stylish Shirt",
    price: 999,
    cross_price: 1200,
  },
  {
    id: 3,
    imgSrc: "https://technext.github.io/eshopper/img/product-3.jpg",
    title: "men Stylish Shirt",
    price: 678,
    cross_price: 1399,
  },

  {
    id: 4,
    imgSrc: "https://technext.github.io/eshopper/img/product-4.jpg",
    title: "Colorful Top",
    price: 230,
    cross_price: 568,
  },
  {
    id: 5,
    imgSrc: "https://technext.github.io/eshopper/img/product-5.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 444,
  },
  {
    id: 6,
    imgSrc: "https://technext.github.io/eshopper/img/product-6.jpg",
    title: "men court",
    price: 567,
    cross_price: 1233,
  },
  {
    id: 7,
    imgSrc: "https://technext.github.io/eshopper/img/product-7.jpg",
    title: "ladies full dress",
    price: 123,
    cross_price: 193,
  },
  {
    id: 8,
    imgSrc: "https://technext.github.io/eshopper/img/product-8.jpg",
    title: "Kids wear",
    price: 673,
    cross_price: 1110,
  },
];

const Carsoulcards = () => {
  return (
    <div className="container-fluid m-3 ">
      <OwlCarousel {...options}>
        {data.map((item) => (
          <div key={item.id} className="m-3">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src={item.imgSrc} alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{item.title}</h6>
                <div className="d-flex justify-content-center">
                  <h6 className="actualprice">${item.price}</h6>
                  <h6 className="text-muted ml-2">
                    <del>${item.cross_price}</del>
                  </h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <a href="/" className="btn card-features text-dark p-0">
                  <i className="fas fa-eye iconColor mr-1"></i>View Detail
                </a>
                <button className="btn card-features  text-dark p-0">
                  <i className="fas fa-shopping-cart iconColor mr-1"></i>Add To
                  Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Carsoulcards;
