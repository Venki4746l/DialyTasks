export const incAction = (value) => async (dispatch) => {
  dispatch({ type: "inc",payload:value });
};

export const decAction = (value) => async (dispatch) => {
  dispatch({ type: "dec",payload:value });
};

export const addCard=(item)=>async (dispatch)=>{
  dispatch({type:"add",payload:item})
}
