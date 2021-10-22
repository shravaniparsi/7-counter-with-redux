import * as actionTypes from './../store/actions/actions'

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.INCREMENT) {
    // api call 200:0k
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === actionTypes.DECREMENT) {
      return {
          ...state,
          counter: state.counter - 1
      }
  };
  if (action.type === actionTypes.CUSTOM_INCREMENT) {
      return {
          ...state,
          counter: state.counter + parseInt(action.payload)
      }
  }
  return state;
};

export default reducer;
