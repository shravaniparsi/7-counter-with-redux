export const INCREMENT = "INCREMENT_COUNTER";
export const DECREMENT = "DECREMENT_COUNTER";
export const CUSTOM_INCREMENT = "CUSTOM_INCREMENT_COUNTER";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const custom_increment = value => {
  return {
    type: CUSTOM_INCREMENT,
    payload: value
  };
};

export const custom_async_increment = value => {
  return dispatch => {
    // asynchronous operatons;
    dispatch(custom_increment(value));
  };
};
