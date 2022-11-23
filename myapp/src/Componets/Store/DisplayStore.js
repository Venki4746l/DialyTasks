import React from 'react'
import { connect } from 'react-redux'
import { incAction,decAction } from './Action';

const DisplayStore = ({loacl_varabile,incAction,decAction}) => {
    //when we need perticular value passing the palyoad  we send value
  return (
    <center>
        
        <button onClick={()=>decAction(1)}>decrement by 1</button>
        <h1>{loacl_varabile}</h1>
        
        <button onClick={()=>incAction(2)}>increment by 2</button>
    </center>
  )
}
const mapStateToProps=state=>({
    loacl_varabile:state
})

export default connect(mapStateToProps,{incAction,decAction}) (DisplayStore);
