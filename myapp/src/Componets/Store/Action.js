export const incAction = (value) => async (dispatch) => {
  dispatch({ type: "inc",payload:value });
};

export const decAction = (value) => async (dispatch) => {
  dispatch({ type: "dec",payload:value });
};
