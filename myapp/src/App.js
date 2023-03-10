// // import React from "react";
// // import "./App.css";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // //import DisplayStore from "./Redux/DisplayStore";
// // //import Products from "./Redux/Products";
// // //import PostMEthod from "./FireBase/PostMEthod";
// // //import FetchMethods from "./FireBase/FetchMethods";
// // //import Firebasetest from "./FireBase/Firebasetest";
// // //import Courses from "./Card/card";
// // //import DisplayStore from "./Redux/DisplayStore";
// // //import OwlDemo from "./Sai/Carasoul";
// // //import StayUpdate from "./Componets/Pages/StayUpdate";
// // //import SignInForm from "./Login/Login";
// // //import DisplayStore from "./Componets/Store/DisplayStore";
// // //import CardItems from './Componets/CardItems/CardItems';
// // //import Vendor from './Vendor/Vendor';
// // //import TrandyProducts from './Componets/TrandyProducts';
// // //import Carsoulcards from './Componets/CardItemsCarsoul/Carsoulcards'
// // import CartItem from "./Api/CartItem";
// // import ProductsShowing from "./Api/ProductsShowing";

// // const App = () => {
// //   // const [loginactive, setloginActive] = useState(false);
// //   return (
// //     <>
// //       <BrowserRouter>
// //         <Routes>
// //           <Route exact path="/" element={<ProductsShowing />} />
// //           <Route exact path="/carts" element={<CartItem />} />
// //         </Routes>
// //       </BrowserRouter>
// //     </>
// //   );
// // };

// // export default App;
// import React, { useState } from 'react';
// import './App.css'

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleModal = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <button onClick={toggleModal}>Open Modal</button>
//       {isOpen && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <button onClick={toggleModal}>Close</button>
//             <p>Modal Content</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React from 'react'
import Parent from './PropsExample/Parent'

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  )
}

export default App
