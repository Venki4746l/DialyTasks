import React from "react";
import { connect } from "react-redux";
import { incAction, decAction } from "./Action";

const DisplayStore = ({ items, incAction, decAction }) => {
  //when we need perticular value passing the palyoad  we send value
  console.log(items)
  return (
    <div>
      item
      {/* {loacl_varabile.cardItem.map((product) => {
        <div key={Products.id}>
          <h1>{product.name}</h1>
          <button></button>
          <button onClick={() => decAction(1)}>decrement by 1</button>
          <h1>{product.quantity}</h1>

          <button onClick={() => incAction(1)}>increment by 2</button>
        </div>;
      })} */}
    </div>
  );
};
const mapStateToProps = state =>{
  //  console.log(state)
    return{
        items:state._todoProduct.shopcardItems
    }
}

export default connect(mapStateToProps, { incAction, decAction })(DisplayStore);
