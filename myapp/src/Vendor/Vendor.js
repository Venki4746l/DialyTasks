// import React from "react";
// import "./Vendor.css";
// import sliding1 from "../Assets/vendor/sliding1.jpg";
// import sliding2 from "../Assets/vendor/sliding2.jpg";
// import sliding3 from "../Assets/vendor/sliding3.jpg";
// import sliding4 from "../Assets/vendor/sliding4.jpg";
// import sliding5 from "../Assets/vendor/sliding5.jpg";
// import sliding6 from "../Assets/vendor/sliding6.jpg";
// import sliding7 from "../Assets/vendor/sliding7.jpg";
// import sliding8 from "../Assets/vendor/sliding8.jpg";

// const Vendor = () => {

//   return (
//     <div className="container-fluid py-5">
//       <div className="row px-xl-5">
//         <div className="col">
//           <div id="owl-demo" className="owl-carousel owl-theme">
//             <div className="item">
//               <img src={sliding1} alt="" />
//             </div>
//             <div className="item">
//               <img src={sliding2} alt="" />
//             </div>
//             <div className="item">
//               <img src={sliding3} alt="" />
//             </div>
//             <div className="item">
//               <img src={sliding4} alt="" />
//             </div>
//             <div className="item">
//               <img src={sliding5} alt="" />
//             </div>
//             <div className="item">
//               <img src={sliding6} alt="" />
//             </div>
//             <div className="item">
//               <img src={sliding7} alt="" />
//             </div>
//             <div className="item">
//               <img src={sliding8} alt="" />
//             </div>
//             <div className="item">
//               <img src={sliding1} alt="" />
//             </div>
//             <div className="item">
//               <img src={sliding2} alt="" />
//             </div>
//             <div className="item">
//               <img src={sliding3} alt="" />
//             </div>
//             <div className="item">
//               <img src={sliding4} alt="" />
//             </div>
//             <div className="item">
//               <img src={sliding5} alt="" />
//             </div>
//             <div className="item">
//               <img src={sliding6} alt="" />
//             </div>
//             <div className="item">
//               <img src={sliding7} alt="" />
//             </div>
//             <div className="item">
//               <img src={sliding8} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Vendor;
// import React,{Component} from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Vendor.css";
import sliding1 from "../Assets/vendor/sliding1.jpg";
import sliding2 from "../Assets/vendor/sliding2.jpg";
import sliding3 from "../Assets/vendor/sliding3.jpg";
import sliding4 from "../Assets/vendor/sliding4.jpg";
import sliding5 from "../Assets/vendor/sliding5.jpg";
import sliding6 from "../Assets/vendor/sliding6.jpg";
import sliding7 from "../Assets/vendor/sliding7.jpg";
import sliding8 from "../Assets/vendor/sliding8.jpg";
import React from "react";

const Vendor = () => {
  return (
    
      <div class="container-fluid vendorContainer">
        <OwlCarousel items={6} margin={8} autoplay={true}>
          <div className="vendorImageContainer">
            <img className="img" src={sliding1} alt="" />
          </div>
          <div  className="vendorImageContainer">
            <img className="img" src={sliding2} alt="" />
          </div>
          <div  className="vendorImageContainer">
            <img className="img" src={sliding3} alt="" />
          </div>
          <div  className="vendorImageContainer">
            <img className="img" src={sliding4} alt="" />
          </div>
          <div  className="vendorImageContainer">
            <img className="img" src={sliding5} alt="" />
          </div>
          <div  className="vendorImageContainer">
            <img className="img" src={sliding6} alt="" />
          </div>
          <div  className="vendorImageContainer">
            <img className="img" src={sliding7} alt="" />
          </div>
          <div  className="vendorImageContainer">
            <img className="img" src={sliding8} alt="" />
          </div>
          <div  className="vendorImageContainer">
            <img className="img" src={sliding1} alt="" />
          </div>
          <div  className="vendorImageContainer">
            <img className="img" src={sliding2} alt="" />
          </div>
          <div  className="vendorImageContainer">
            <img className="img" src={sliding3} alt="" />
          </div>
          <div  className="vendorImageContainer">
            <img className="img" src={sliding4} alt="" />
          </div>
          <div  className="vendorImageContainer">
            <img className="img" src={sliding5} alt="" />
          </div >
          <div  className="vendorImageContainer">
            <img className="img" src={sliding6} alt="" />
          </div>
          <div  className="vendorImageContainer">
            <img className="img" src={sliding7} alt="" />
          </div>
          <div  className="vendorImageContainer">
            <img className="img " src={sliding8} alt="" />
          </div>
        </OwlCarousel>
      </div>
    
  );
};

export default Vendor;
